import { JoinUrl } from "./type";

export const joinUrl: JoinUrl = (...args: string[]): string => args.join("/");

// TODO: Implement the following functions
// readFileTree
// parseFilePath
// insertFileNode
// createFileTree
