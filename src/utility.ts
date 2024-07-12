import { statSync, readdirSync, Stats } from "fs";

import { FileTreeNode, JoinPath } from "./type";

export const joinPath: JoinPath = (...args) => args.join("/");

export class FileSystemController {
  static getBaseName(path: string): string {
    return path.split("/").pop() || "";
  }

  static getExtension(path: string): string {
    return path.split(".").pop() || "";
  }

  static getFileStatus(path: string): Stats | null {
    try {
      return statSync(path);
    } catch (error: unknown) {
      console.error("error :", error);
      return null;
    }
  }

  static getChildNodes(path: string): string[] | null {
    const fileStatus = this.getFileStatus(path);
    if (fileStatus === null || fileStatus.isFile()) return null;
    return readdirSync(path);
  }

  static generateFileTreeNode(path: string, depth: number): FileTreeNode {
    const children = this.getChildNodes(path);
    const node: FileTreeNode = {
      name: this.getBaseName(path),
      isDirectory: !!children,
      children: null,
    };
    if (depth > 0 && node.isDirectory)
      node.children = children!.map((child) =>
        this.generateFileTreeNode(joinPath(path, child), depth - 1)
      );
    return node;
  }

  static buildTree(
    rootPath: string = process.cwd(),
    maxDepth: number = 1
  ): FileTreeNode | null {
    return this.generateFileTreeNode(rootPath, maxDepth);
  }
}
