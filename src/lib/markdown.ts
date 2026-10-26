import { marked } from "marked";

export interface MarkdownContext {
  owner: string;
  path: string;
  reference: string;
  repository: string;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function resolvePath(currentPath: string, relativePath: string) {
  const segments = currentPath.split("/").slice(0, -1);
  for (const segment of relativePath.split("/")) {
    if (!segment || segment === ".") continue;
    if (segment === "..") {
      if (!segments.length) return;
      segments.pop();
    } else {
      segments.push(segment);
    }
  }
  return segments.join("/");
}

function resolveUrl(target: string, context: MarkdownContext, image: boolean) {
  if (!target || /^(?:[a-z][a-z\d+.-]*:|#|\/)/i.test(target)) return target;
  const suffixIndex = target.search(/[?#]/);
  const path = suffixIndex < 0 ? target : target.slice(0, suffixIndex);
  const suffix = suffixIndex < 0 ? "" : target.slice(suffixIndex);
  const resolvedPath = path ? resolvePath(context.path, path) : context.path;
  if (!resolvedPath) return target;

  const route = [context.owner, context.repository, context.reference, resolvedPath]
    .flatMap((segment) => segment.split("/"))
    .map(encodeURIComponent)
    .join("/");
  return `${image ? "https://raw.githubusercontent.com/" : "/"}${route}${suffix}`;
}

function createRenderer(context?: MarkdownContext) {
  const renderer = new marked.Renderer();
  renderer.html = ({ text }) => escapeHtml(text);
  if (!context) return renderer;
  renderer.link = function ({ href, title, tokens }) {
    const text = this.parser.parseInline(tokens);
    const resolved = resolveUrl(href, context, false);
    return `<a href="${escapeHtml(resolved)}"${title ? ` title="${escapeHtml(title)}"` : ""}>${text}</a>`;
  };
  renderer.image = ({ href, title, text }) => {
    const resolved = resolveUrl(href, context, true);
    return `<img src="${escapeHtml(resolved)}" alt="${escapeHtml(text)}"${title ? ` title="${escapeHtml(title)}"` : ""}>`;
  };
  return renderer;
}

export function renderMarkdown(content: string, context?: MarkdownContext) {
  return marked.parse(content, { async: false, gfm: true, renderer: createRenderer(context) });
}
