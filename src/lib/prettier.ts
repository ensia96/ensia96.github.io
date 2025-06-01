declare global {
  const prettier: PretterWorker;
  const prettierPlugins: PrettierPlugin[];
}
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

interface PrettierPlugin {
  [key: string]: Parser;
}

interface PretterWorker {
  format(content: string, options: Options): Promise<string>;
}
