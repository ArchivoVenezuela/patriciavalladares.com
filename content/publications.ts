import type { Book, Publication } from "@/lib/types";
import { getPublicationsContent } from "@/lib/content";

const publicationsDoc = getPublicationsContent();
const { books, articles } = publicationsDoc.frontmatter;

export { books, articles };

export const homeBooks = books.filter((b) => b.featured);
export const homeArticles = articles.filter((a) => a.featured).slice(0, 4);

export const featuredPublications: Publication[] = [
  ...books.filter((b) => b.featured),
  ...articles.filter((a) => a.featured),
];

export const selectedArticles = articles.filter(
  (a) => a.featured || a.year === "2023" || a.year === "2022",
);

export const allPublications: Publication[] = [...books, ...articles];

export const publicationsIntro = publicationsDoc.frontmatter.intro;
