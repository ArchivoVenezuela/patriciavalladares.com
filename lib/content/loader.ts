import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { cache } from "react";
import { TODO } from "./constants";

export const CONTENT_ROOT = path.join(process.cwd(), "manuscript");

export { TODO };

export interface MdxDocument<TFrontmatter = Record<string, unknown>> {
  frontmatter: TFrontmatter;
  body: string;
  paragraphs: string[];
}

export function readMdxFile<TFrontmatter = Record<string, unknown>>(
  relativePath: string,
): MdxDocument<TFrontmatter> {
  const filePath = path.join(CONTENT_ROOT, relativePath);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  const body = content.trim();

  return {
    frontmatter: data as TFrontmatter,
    body,
    paragraphs: body ? body.split(/\n\n+/).filter(Boolean) : [],
  };
}

export function listMdxFiles(relativeDir: string): string[] {
  const dirPath = path.join(CONTENT_ROOT, relativeDir);
  return fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith(".mdx"))
    .sort();
}

export const loadMdx = cache(readMdxFile);
