import { marked } from "marked";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const renderer = new marked.Renderer();
renderer.html = ({ text }) => escapeHtml(text);

export function renderMarkdown(content: string) {
  return marked.parse(content, {
    async: false,
    gfm: true,
    renderer,
  });
}
