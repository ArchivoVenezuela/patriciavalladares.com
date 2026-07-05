import type { Book, Publication } from "@/lib/types";

export const books: Book[] = [
  {
    id: "book-1",
    title: "Book title pending",
    venue: "Publisher pending",
    publisher: "Publisher pending",
    year: "—",
    type: "book",
    featured: true,
  },
];

export const articles: Publication[] = [
  {
    id: "pub-1",
    title: "Publication title pending",
    venue: "Journal name pending",
    year: "—",
    type: "article",
    featured: true,
  },
  {
    id: "pub-2",
    title: "Publication title pending",
    venue: "Journal name pending",
    year: "—",
    type: "forthcoming",
    featured: true,
  },
];

export const featuredPublications = [...books, ...articles].filter(
  (p) => p.featured,
);

export const allPublications: Publication[] = [...books, ...articles];
