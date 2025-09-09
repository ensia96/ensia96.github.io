import { marked } from "marked";
import { MarkdownDTO } from "@/lib/markdown/dto";

export class Markdown {
  renderer: InstanceType<typeof marked.Renderer>;

  constructor() {
    this.renderer = new marked.Renderer();
  }

  parse({ content }: MarkdownDTO.MarkdownParseParams) {
    return marked.parse(content);
  }

  async render({ content }: MarkdownDTO.MarkdownParseParams) {
    return (
      <div dangerouslySetInnerHTML={{ __html: this.parse({ content }) }} />
    );
  }
}
