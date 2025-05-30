import { Options, Parser } from "prettier";

export class Prettier {
  private plugins: PrettierPlugin[];
  private worker: PretterWorker;

  constructor() {
    this.plugins = [
      require("prettier/plugins/acorn"),
      require("prettier/plugins/angular"),
      require("prettier/plugins/babel"),
      require("prettier/plugins/estree"),
      require("prettier/plugins/flow"),
      require("prettier/plugins/glimmer"),
      require("prettier/plugins/graphql"),
      require("prettier/plugins/html"),
      require("prettier/plugins/markdown"),
      require("prettier/plugins/meriyah"),
      require("prettier/plugins/postcss"),
      require("prettier/plugins/typescript"),
      require("prettier/plugins/yaml"),
    ];
    this.worker = require("prettier/standalone");
  }

  async format({ content, filepath }: PrettierFormatParams) {
    return await this.worker.format(content, {
      filepath,
      plugins: this.plugins,
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
