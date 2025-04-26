// See https://github.com/azu/git-commit-push-via-github-api/blob/master/src/git-commit-push-via-github-api.ts

// authenticate > get reference > create blob > create tree > create commit > update reference

const GITHUB_API_URL = "https://api.github.com";

export async function createNewCommit({
  commitMessage,
  content,
  owner,
  path,
  ref,
  repo,
  token,
}: CreateNewCommitParams) {
  const url = `${GITHUB_API_URL}/repos/${owner}/${repo}/git`;
  const headers = {
    "Content-Type": "application/json",
    // See https://docs.github.com/en/rest/authentication/authenticating-to-the-rest-api?apiVersion=2022-11-28
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
  };

  // 1. Reference 가져오기
  // See https://docs.github.com/en/rest/git/refs?apiVersion=2022-11-28#get-a-reference
  const refRes = await fetch(`${url}/ref/${ref}`, { headers });
  if (!refRes.ok)
    throw new Error(`Failed to get reference: ${await refRes.text()}`);
  const refData = await refRes.json();
  const referenceCommitSha = refData.object.sha;

  // 2. Blob 생성
  // See https://docs.github.com/en/rest/git/blobs?apiVersion=2022-11-28#create-a-blob
  const isBuffer = Buffer.isBuffer(content);
  const encoding = isBuffer ? "base64" : "utf-8";
  const fileContent = isBuffer
    ? (content as Buffer).toString("base64")
    : content;
  const blobRes = await fetch(`${url}/blobs`, {
    method: "POST",
    headers,
    body: JSON.stringify({ content: fileContent, encoding }),
  });
  if (!blobRes.ok)
    throw new Error(`Failed to create blob: ${await blobRes.text()}`);
  const blobData = await blobRes.json();
  const blobSha = blobData.sha;

  // 3. Tree 생성
  // See https://docs.github.com/en/rest/git/trees?apiVersion=2022-11-28#create-a-tree
  const treeRes = await fetch(`${url}/trees`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      base_tree: referenceCommitSha,
      tree: [{ path, mode: "100644", type: "blob", sha: blobSha }],
    }),
  });
  if (!treeRes.ok)
    throw new Error(`Failed to create tree: ${await treeRes.text()}`);
  const treeData = await treeRes.json();
  const newTreeSha = treeData.sha;

  // 4. Commit 생성
  // See https://docs.github.com/en/rest/git/commits?apiVersion=2022-11-28#create-a-commit
  const commitRes = await fetch(`${url}/commits`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      message: commitMessage,
      tree: newTreeSha,
      parents: [referenceCommitSha],
    }),
  });
  if (!commitRes.ok)
    throw new Error(`Failed to create commit: ${await commitRes.text()}`);
  const commitData = await commitRes.json();
  const newCommitSha = commitData.sha;

  // 5. 참조 업데이트 (update ref)
  // See https://docs.github.com/en/rest/git/refs?apiVersion=2022-11-28#update-a-reference
  const updateRes = await fetch(`${url}/refs/${ref}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({ sha: newCommitSha, force: false }),
  });
  if (!updateRes.ok)
    throw new Error(`Failed to update reference: ${await updateRes.text()}`);
  return newCommitSha;
}

export interface CreateNewCommitParams {
  commitMessage: string;
  content: string | Buffer;
  owner: string;
  path: string;
  ref: string;
  repo: string;
  token: string;
}

export async function getRepositories({ owner, token }: GetRepositoriesParams) {
  // See https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-the-authenticated-user
  let endpoint: string = "/user/repos";
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "application/vnd.github+json",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  else if (owner)
    // See https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user
    endpoint = `/users/${owner}/repos`;
  else throw new Error("owner or token is required");
  const url = GITHUB_API_URL + endpoint;

  const repositoriesRes = await fetch(url, { headers });
  const repositoriesData = await repositoriesRes.json();
  return repositoriesData;
}

export interface GetRepositoriesParams {
  owner?: string;
  token?: string;
}

export async function getRepositoryContents({
  owner,
  repository,
  token,
}: GetRepositoryContentsParams) {
  if (!owner) throw new Error("owner is required");
  if (!repository) throw new Error("repository is required");

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Accept: "application/vnd.github+json",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  // See https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#get-repository-content
  const repositoryContentsRes = await fetch(
    `${GITHUB_API_URL}/repos/${owner}/${repository}/contents`,
    headers,
  );
  const repositoryContentsData = await repositoryContentsRes.json();
  return repositoryContentsData;
}

export interface GetRepositoryContentsParams {
  owner: string;
  repository: string;
  token?: string;
}
