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
  label: string;
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

export interface ResearchProgramContent {
  positioningStatement: LocalizedString;
  researchVision: LocalizedString;
  futureDirections: LocalizedString;
  bookProject: {
    title: LocalizedString;
    subtitle: LocalizedString;
    summary: LocalizedString;
    status: ProjectStatus;
    slug: string;
  };
}

export type ProjectTier = "flagship" | "infrastructure";

export type ProjectStatus =
  | "active"
  | "in-development"
  | "planned"
  | "beta"
  | "prototype"
  | "placeholder";

export interface ProjectLink {
  label: LocalizedString;
  url: string;
  external?: boolean;
}

/** Summary fields for index cards and detail hero */
export interface Project {
  slug: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  tier: ProjectTier;
  category: LocalizedString;
  summary: LocalizedString;
  status: ProjectStatus;
  role: LocalizedString;
  collaborators: LocalizedString[];
  tags: string[];
  image?: string;
  featured?: boolean;
}

/** Full project detail — extends summary with narrative sections */
export interface ProjectDetail extends Project {
  problem: LocalizedString;
  whyItMatters: LocalizedString;
  researchQuestions: LocalizedString[];
  methodology: LocalizedString;
  technologies: string[];
  outcomes: LocalizedString[];
  relatedPublicationIds: string[];
  relatedCourseIds: string[];
  relatedPublicHumanitiesIds: string[];
  links: ProjectLink[];
}

export interface InfrastructureStage {
  id: string;
  label: LocalizedString;
  description: LocalizedString;
}

export interface DigitalScholarshipContent {
  intro: LocalizedString;
  evolution: InfrastructureStage[];
  philosophy: LocalizedString;
  infrastructure: LocalizedString;
  digitalMethods: LocalizedString;
  ethicalAI: LocalizedString;
  openScholarship: LocalizedString;
  futureDirections: LocalizedString;
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
