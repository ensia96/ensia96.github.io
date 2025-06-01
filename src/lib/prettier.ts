import { Options, Parser } from "prettier";

export class Prettier {
  async format({ content, filepath }: PrettierFormatParams) {
    return await prettier.format(content, {
      filepath,
      plugins: prettierPlugins,
    });
  }
}

interface PrettierFormatParams {
  content: string;
  filepath: string;
}

export interface PrettierPlugin {
  [key: string]: Parser;
}

export interface PrettierWorker {
  format(content: string, options: Options): Promise<string>;
}
