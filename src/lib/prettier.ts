import * as prettier from "prettier/standalone";
import { parsers as acorn } from "prettier/plugins/acorn";
import { parsers as angular } from "prettier/plugins/angular";
import { parsers as babel } from "prettier/plugins/babel";
import { parsers as flow } from "prettier/plugins/flow";
import { parsers as glimmer } from "prettier/plugins/glimmer";
import { parsers as graphql } from "prettier/plugins/graphql";
import { parsers as html } from "prettier/plugins/html";
import { parsers as markdown } from "prettier/plugins/markdown";
import { parsers as meriyah } from "prettier/plugins/meriyah";
import { parsers as postcss } from "prettier/plugins/postcss";
import { parsers as typescript } from "prettier/plugins/typescript";
import { parsers as yaml } from "prettier/plugins/yaml";
import { Options, Parser } from "prettier";

export class Prettier {
  private plugins: PrettierPlugin[];
  private worker: PretterWorker;

  constructor() {
    this.plugins = [
      acorn,
      angular,
      babel,
      flow,
      glimmer,
      graphql,
      html,
      markdown,
      meriyah,
      postcss,
      typescript,
      yaml,
    ];
    this.worker = prettier;
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
