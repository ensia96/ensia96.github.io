// ======================
// data
// ======================

export interface FileTreeNode {
  name: string;
  isDirectory: boolean;
  children?: FileTreeNode[] | null;
}

// ======================
// function
// ======================

export type Request = <Response>(input: RequestInfo | URL) => Promise<Response>;

export type JoinPath = (...args: string[]) => string;

export type GetRootPath = () => string;

// ======================
// api
// ======================

// export type SomeRequestResponse = {};
