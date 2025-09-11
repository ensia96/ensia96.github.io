export namespace GithubDTO {
  export type GithubFetchParams = {
    base?: string;
    params?: Record<string, unknown>;
    path: string | string[];
  };

  export type GithubGetContentPathFromNode = {
    node: GithubGetTreeResponse["tree"][number];
  };

  export type GithubGetReferenceParams = {
    reference: string;
    repository: string;
  };

  export type GithubGetReferenceResponse = {
    ref: string;
    node_id: string;
    url: string;
    object: { type: string; sha: string; url: string };
  };

  export type GithubGetRepositoriesResponse = {
    name: string;
    description: string;
    default_branch: string;
  }[];

  export type GithubGetTreeParams = {
    reference: string;
    repository: string;
  };

  export type GithubGetTreeResponse = {
    sha: string;
    url: string;
    tree: { path: string; sha: string; type: "blob" | "tree" }[];
    truncated: boolean;
  };

  export type GithubRenderParams = {
    path?: string | string[];
  };

  export type GithubRepository = {
    name: string;
    defaultBranch: string;
  };

  export type GithubTree = { [key: string]: GithubTree | string } | string;
}
