import { Markdown } from "./markdown";
import { Prettier, PrettierPlugin, PrettierWorker } from "./prettier";

declare global {
  const prettier: PrettierWorker;
  const prettierPlugins: PrettierPlugin[];
}

const markdown = new Markdown();
const prettier = new Prettier();

export { markdown, prettier };
