import { marked } from "marked";

export class Markdown {
  renderer: InstanceType<typeof marked.Renderer>;

  constructor() {
    this.renderer = new marked.Renderer();
  }

  parse(content: string) {
    return marked.parse(content);
  }
}
