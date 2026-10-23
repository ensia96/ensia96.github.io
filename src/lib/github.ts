interface GitHubRepositoryResponse {
  default_branch: string;
  homepage: string | null;
  name: string;
  private: boolean;
}

interface GitHubTreeResponse {
  tree: Array<{
    path: string;
    sha: string;
    type: "blob" | "tree" | "commit";
  }>;
  truncated: boolean;
}

export interface RepositoryFile {
  href: string;
  path: string;
  rawPath: string;
  repository: string;
  route: string;
  sha: string;
}

export interface Repository {
  defaultBranch: string;
  files: RepositoryFile[];
  homepage: string | null;
  name: string;
}

const owner = import.meta.env.GITHUB_OWNER?.trim();
const repositoryNames = (import.meta.env.REPOSITORIES ?? "")
  .split("\n")
  .map((name) => name.trim())
  .filter(Boolean);
const token = import.meta.env.GITHUB_TOKEN?.trim();

let catalogPromise: Promise<Repository[]> | undefined;

function apiPath(...segments: string[]) {
  return `/${segments.map(encodeURIComponent).join("/")}`;
}

function getHomepage(homepage: string | null) {
  if (!homepage) return null;
  try {
    const url = new URL(homepage);
    return url.protocol === "http:" || url.protocol === "https:" ? url.href : null;
  } catch {
    return null;
  }
}

async function request<T>(path: string, optional = false): Promise<T | undefined> {
  const attempt = (authorization?: string) =>
    fetch(new URL(path, "https://api.github.com"), {
      headers: {
        Accept: "application/vnd.github+json",
        ...(authorization ? { Authorization: `Bearer ${authorization}` } : {}),
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

  let response = await attempt(token);
  if (token && [401, 403, 404].includes(response.status)) {
    response = await attempt();
  }

  if (optional && response.status === 404) return undefined;
  if (!response.ok) {
    throw new Error(`GitHub API 요청 실패: ${path} (${response.status})`);
  }

  return (await response.json()) as T;
}

async function loadRepository(name: string): Promise<Repository | undefined> {
  const metadata = await request<GitHubRepositoryResponse>(
    apiPath("repos", owner!, name),
    true,
  );
  if (!metadata) {
    console.warn(`등록한 공개 저장소를 찾을 수 없습니다: ${name}`);
    return undefined;
  }
  if (metadata.private) {
    console.warn(`비공개 저장소를 제외합니다: ${name}`);
    return undefined;
  }

  const tree = await request<GitHubTreeResponse>(
    `${apiPath("repos", owner!, metadata.name, "git", "trees", metadata.default_branch)}?recursive=1`,
  );
  if (!tree) throw new Error(`저장소 트리를 불러오지 못했습니다: ${name}`);
  if (tree.truncated) {
    throw new Error(`저장소 트리가 잘려 전체 파일을 확인할 수 없습니다: ${name}`);
  }

  const files = tree.tree
    .filter((node) => node.type === "blob" && !node.path.includes(".github"))
    .map((node) => {
      const route = [owner!, metadata.name, metadata.default_branch, node.path].join(
        "/",
      );
      return {
        href: `/${route.split("/").map(encodeURIComponent).join("/")}`,
        path: node.path,
        rawPath: route,
        repository: metadata.name,
        route,
        sha: node.sha,
      };
    });

  return {
    defaultBranch: metadata.default_branch,
    files,
    homepage: getHomepage(metadata.homepage),
    name: metadata.name,
  };
}

export async function getRepositories() {
  if (!catalogPromise) {
    if (!owner) throw new Error("GITHUB_OWNER 환경 변수가 필요합니다.");
    if (!repositoryNames.length) {
      throw new Error("REPOSITORIES 환경 변수에 저장소를 등록해야 합니다.");
    }
    catalogPromise = Promise.all(repositoryNames.map(loadRepository)).then(
      (repositories) => repositories.filter((repository) => repository !== undefined),
    );
  }
  return catalogPromise;
}

export async function getFileContent(file: RepositoryFile) {
  const url = new URL(
    file.rawPath.split("/").map(encodeURIComponent).join("/"),
    "https://raw.githubusercontent.com/",
  );
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`파일을 불러오지 못했습니다: ${file.repository}/${file.path}`);
  }
  return response.text();
}
