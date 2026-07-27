/** Minimal helpers for Tina rich-text AST (plain paragraph extraction). */

type TinaNode = {
  type?: string;
  text?: string;
  children?: TinaNode[];
};

export function extractParagraphTexts(body: unknown): string[] {
  if (!body || typeof body !== "object") return [];
  const root = body as TinaNode;
  if (!Array.isArray(root.children)) return [];

  return root.children
    .filter((node) => node.type === "p" || node.type === "h1" || node.type === "h2" || node.type === "h3")
    .map((node) => collectText(node).trim())
    .filter(Boolean);
}

function collectText(node: TinaNode): string {
  if (typeof node.text === "string") return node.text;
  if (!Array.isArray(node.children)) return "";
  return node.children.map(collectText).join("");
}
