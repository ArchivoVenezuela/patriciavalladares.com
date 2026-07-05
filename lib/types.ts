/**
 * Shared TypeScript interfaces for site content.
 * Structured for future bilingual expansion (locale-keyed strings).
 */

export type LocalizedString = string;

export interface SiteConfig {
  name: string;
  wordmark: string;
  title: string;
  description: string;
  url: string;
  cvUrl: string;
  email: string;
  locale: string;
}

export interface NavItem {
  /** Full label — pages, footer, mobile nav */
  label: string;
  /** Shorter label for desktop header when needed */
  shortLabel?: string;
  href: string;
  external?: boolean;
}

export interface ResearchTheme {
  id: string;
  number: string;
  title: LocalizedString;
  description: LocalizedString;
}

export interface ResearchQuestion {
  id: string;
  question: LocalizedString;
}

export type ProjectTier = "flagship" | "applied" | "book";

export interface Project {
  slug: string;
  title: LocalizedString;
  tier: ProjectTier;
  category: LocalizedString;
  tagline: LocalizedString;
  summary: LocalizedString;
  status: "active" | "in-development" | "planned" | "placeholder";
  featured?: boolean;
  externalUrl?: string;
}

export interface Publication {
  id: string;
  title: LocalizedString;
  authors?: LocalizedString;
  venue: LocalizedString;
  year: string;
  type: "article" | "book" | "chapter" | "forthcoming";
  topic?: string;
  featured?: boolean;
  url?: string;
}

export interface Book extends Publication {
  type: "book";
  publisher: LocalizedString;
  coverImage?: string;
}

export interface Course {
  id: string;
  title: LocalizedString;
  code?: string;
  semester?: string;
  description: LocalizedString;
}

export interface NewsItem {
  id: string;
  date: string;
  title: LocalizedString;
  summary: LocalizedString;
  url?: string;
}

export interface AboutContent {
  positioningStatement: LocalizedString;
  professionalIdentity: LocalizedString;
  languages: {
    native: string[];
    fluent: string[];
    reading?: string[];
  };
  education: Array<{
    degree: LocalizedString;
    institution: LocalizedString;
    year: string;
  }>;
}

export interface PublicHumanitiesItem {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  year?: string;
  url?: string;
}
