import { GithubDTO } from "@/lib/github/dto";
import { Markdown } from "@/lib/markdown";

export class Github {
  private readonly _nodes: GithubDTO.GithubGetTreeResponse["tree"] = [];
  private readonly _pages: Record<string, string> = {};
  private readonly _repositories: GithubDTO.GithubRepository[] = [];

  constructor(
    private readonly owner = process.env.GITHUB_OWNER!,
    private readonly repositories = new Set(
      process.env
        .REPOSITORIES!.split("\n")
        .map((repository) => repository.trim())
        .filter(Boolean),
    ),
    private readonly token = process.env.GITHUB_TOKEN,
  ) {}

  async fetch<T>({ base, params, path }: GithubDTO.GithubFetchParams) {
    try {
      const options = { headers: {} };
      if (!base && this.token)
        options.headers = { Authorization: `Bearer ${this.token}` };
      if (Array.isArray(path)) path = path.join("/");
      const url = new URL(path, base ?? "https://api.github.com");
      const query = new URLSearchParams();
      for (const [key, value] of Object.entries(params ?? []))
        if (value) query.set(key, value.toString());
      url.search = query.toString();
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(response.statusText);
      return (
        response.headers.get("Content-Type")?.includes("json")
          ? response.json()
          : response.text()
      ) as T;
    } catch (error: unknown) {
      console.error(error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "서버 오류가 발생했습니다. 고객센터에 문의를 남겨주세요.";
      return { error: errorMessage };
    }
  }

  private getContentPathFromNode({
    node,
  }: GithubDTO.GithubGetContentPathFromNode) {
    const [repositoryName, ...rest] = node.path.split("/");
    const [repository] = this._repositories.filter(
      (repository) => repository.name === repositoryName,
    );
    return [
      this.owner,
      repository.name,
      repository.defaultBranch,
      ...rest,
    ].join("/");
  }

  // See https://docs.github.com/en/rest/pages/pages?apiVersion=2022-11-28#get-a-github-pages-site
  private async getPages({ repository }: GithubDTO.GithubGetPagesParams) {
    if (!repository) throw new Error("repository is required");
    const response = await this.fetch<GithubDTO.GithubGetPagesResponse>({
      path: ["repos", this.owner, repository, "pages"],
    });
    if ("error" in response) return;
    return response;
  }

  // See https://docs.github.com/en/rest/git/refs?apiVersion=2022-11-28#get-a-reference
  private async getReference({
    reference = "heads/main",
    repository,
  }: GithubDTO.GithubGetReferenceParams) {
    if (!repository) throw new Error("repository is required");
    const response = await this.fetch<GithubDTO.GithubGetReferenceResponse>({
      path: ["repos", this.owner, repository, "git", "ref", reference],
    });
    if ("error" in response) return;
    return response;
  }

  // See https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user
  private async getRepositories() {
    const response = await this.fetch<GithubDTO.GithubGetRepositoriesResponse>({
      path: ["users", this.owner, "repos"],
    });
    if ("error" in response) return [];
    return response;
  }

  // See https://docs.github.com/en/rest/git/trees?apiVersion=2022-11-28#get-a-tree
  private async getTree({
    reference,
    repository,
  }: GithubDTO.GithubGetTreeParams) {
    if (!repository) throw new Error("repository is required");
    if (!reference) throw new Error("reference is required");
    const response = await this.fetch<GithubDTO.GithubGetTreeResponse>({
      params: { recursive: 1 },
      path: ["repos", this.owner, repository, "git", "trees", reference].join(
        "/",
      ),
    });
    if ("error" in response)
      return { sha: "", url: "", tree: [], truncated: false };
    return response;
  }

  async initialize() {
    if (this.initialized) return;
    const repositories = await this.getRepositories();
    for (const repository of repositories)
      if (this.repositories.has(repository.name)) {
        const reference = await this.getReference({
          repository: repository.name,
          reference: `heads/${repository.default_branch}`,
        });
        if (!reference) continue;
        const tree = await this.getTree({
          reference: reference.object.sha,
          repository: repository.name,
        });
        let page;
        if (repository.has_pages)
          page = await this.getPages({ repository: repository.name });
        if (page) this._pages[repository.name] = page.html_url;
        for (const node of tree.tree)
          if (!node.path.includes(".github"))
            this._nodes.push({
              ...node,
              path: [repository.name, node.path].join("/"),
            });
        this._repositories.push({
          name: repository.name,
          defaultBranch: repository.default_branch,
        });
      }
  }

  private get initialized() {
    return !!this._repositories.length;
  }

  get paths() {
    const paths = [];
    for (const node of this._nodes)
      if (node.type === "blob")
        paths.push({
          path: this.getContentPathFromNode({ node }).split("/"),
        });
    return paths;
  }

  async render({ path }: GithubDTO.GithubRenderParams = {}) {
    if (!path)
      return (
        <ul>
          <GithubDirectoryTree
            {...{ directory: this.tree, pages: this._pages }}
          />
        </ul>
      );
    if (Array.isArray(path)) path = path.join("/");
    const markdown = new Markdown();
    const response = await this.fetch<string>({
      base: "https://raw.githubusercontent.com",
      path,
    });
    if (typeof response !== "string")
      return <p {...{ children: response.error }} />;
    return markdown.render({ content: response });
  }

  private get tree() {
    const directory: GithubDTO.GithubDirectory = {};
    for (const node of this._nodes) {
      if (node.type === "tree") continue;
      let current = directory;
      const segments = node.path.split("/");
      const file = segments.pop()!;
      for (const segment of segments)
        if (typeof current === "string") continue;
        else if (segment in current && typeof current[segment] !== "string")
          current = current[segment];
        else current = current[segment] = {};
      current[file] = this.getContentPathFromNode({ node });
    }
    return directory;
  }
}

function GithubDirectoryTree({
  depth = 0,
  name,
  directory,
  pages = {},
}: GithubDTO.GithubDirectoryTreeProps) {
  if (typeof directory === "string")
    return (
      <li>
        <a {...{ children: name, href: directory }} />
      </li>
    );
  const directories = Object.keys(directory)
    .sort(
      (a, b) =>
        Number(typeof directory[a] === "string") -
          Number(typeof directory[b] === "string") || a.localeCompare(b),
    )
    .map((name) => (
      <GithubDirectoryTree
        key={name}
        {...{
          depth: depth + 1,
          directory: directory[name],
          name,
          pages,
        }}
      />
    ));
  if (name)
    return (
      <li>
        <details {...{ open: depth === 1 }}>
          <summary
            {...{
              children:
                depth === 1 && name in pages ? (
                  <a {...{ children: name, href: pages[name] }} />
                ) : (
                  name
                ),
            }}
          />

          <ul {...{ children: directories }} />
        </details>
      </li>
    );
  return directories;
}
