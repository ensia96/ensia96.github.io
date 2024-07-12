import { statSync, readdirSync } from "fs";

import { FileTreeNode, JoinPath, GetRootPath } from "./type";

export const joinPath: JoinPath = (...args) => args.join("/");

export const getRootPath: GetRootPath = () => process.cwd();

export class FileSystemController {
  static getFileName(path: string): string {
    return path.split("/").pop() || "";
  }

  static getFileExtension(path: string): string {
    return path.split(".").pop() || "";
  }

  // See https://www.typescriptlang.org/docs/handbook/utility-types.html
  static getFileStatus(
    path: string
  ): Exclude<NonNullable<ReturnType<typeof statSync>>, "BigIntStats"> | null {
    try {
      return statSync(path);
    } catch (error: unknown) {
      console.error("error :", error);
      return null;
    }
  }

  static listDirectoryContents(path: string): string[] | null {
    const fileStatus = this.getFileStatus(path);
    if (fileStatus === null || fileStatus.isFile()) return null;
    return readdirSync(path);
  }

  static createFileTree(path: string, depth: number = 1): FileTreeNode {
    const children = this.listDirectoryContents(path);
    const node: FileTreeNode = {
      name: this.getFileName(path),
      isDirectory: !!children,
      children: null,
    };
    if (depth > 0 && node.isDirectory)
      node.children = children!.map((child) =>
        this.createFileTree(joinPath(path, child), depth - 1)
      );
    return node;
  }

  static createCompleteFileTree(
    rootPath: string = process.cwd()
  ): FileTreeNode | null {
    return this.createFileTree(rootPath, Infinity);
  }

  static listAllFiles(path: string): string[] {
    const fileStatus = this.getFileStatus(path);
    if (fileStatus === null) return [];
    if (fileStatus.isFile()) return [path];
    return readdirSync(path).flatMap((child) =>
      this.listAllFiles(joinPath(path, child))
    );
  }
}
