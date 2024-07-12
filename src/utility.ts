import { JoinPath } from "./type";

export const joinPath: JoinPath = (...args: string[]): string => args.join("/");

// TODO: Implement the following functions
// readFileTree
// parseFilePath
// insertFileNode
// createFileTree
