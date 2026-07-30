import "server-only";

import type { Book, Publication, ProjectDetail, ProjectLink, ProjectStatus, ProjectTier } from "@/lib/types";
import { listMdxFiles, loadMdx } from "./loader";
import { sectionTitles, TODO } from "./constants";

export interface HeroFrontmatter {
  label: string;
  name: string;
  titleLine: string;
  institution: string;
  figureLabel: string;
}

export interface SectionFrontmatter {
  title: string;
  kicker?: string;
  folioLabel?: string;
}

export interface ThemeFrontmatterItem {
  id: string;
  title: string;
  description: string;
}

export interface ResearchThemesFrontmatter extends SectionFrontmatter {
  themes: ThemeFrontmatterItem[];
}

export interface ResearchQuestionsFrontmatter extends SectionFrontmatter {
  questions: string[];
}

export interface ProjectFrontmatter {
  slug: string;
  title: string;
  subtitle: string;
  tier: ProjectTier;
  status: ProjectStatus;
  featured?: boolean;
  homepageFeatured?: boolean;
  homepageItalic?: boolean;
  links?: ProjectLink[];
  homepage?: {
    stats?: { value: string; label: string; accent: "oxblood" | "forest" }[];
    specimensLabel?: string;
    specimenCardLabel?: string;
    specimens?: {
      year: string;
      id: string;
      title: string;
      /** Prefer {label,value}; legacy tuple pairs still accepted. */
      meta: ({ label: string; value: string } | [string, string])[];
      note: string;
    }[];
  };
}

export interface MethodsFrontmatter extends SectionFrontmatter {
  methods: string[];
}

export type BiographyFrontmatter = SectionFrontmatter;

/** Page chrome only. Identity (email, affiliation, etc.) lives in content/site.ts. */
export type ContactFrontmatter = SectionFrontmatter;

export interface TeachingFrontmatter extends SectionFrontmatter {
  mentorshipTitle?: string;
}

export interface PublicationsFrontmatter extends SectionFrontmatter {
  intro?: string;
  books: Book[];
  articles: Publication[];
}

export function getLandingHero() {
  const doc = loadMdx<HeroFrontmatter>("home/hero.mdx");
  return {
    ...doc.frontmatter,
    paragraphs: doc.paragraphs,
    body: doc.body,
  };
}

export function getHomeResearchProgram() {
  return loadMdx<SectionFrontmatter>("home/research-program.mdx");
}

export function getHomeProjectsOverview() {
  return loadMdx<SectionFrontmatter>("home/projects-overview.mdx");
}

export function getResearchThemesContent() {
  const doc = loadMdx<ResearchThemesFrontmatter>("home/research-themes.mdx");
  return {
    title: doc.frontmatter.title,
    kicker: doc.frontmatter.kicker ?? doc.frontmatter.title,
    themes: doc.frontmatter.themes,
    body: doc.body,
  };
}

export function getResearchQuestionsContent() {
  const doc = loadMdx<ResearchQuestionsFrontmatter>("home/research-questions.mdx");
  return {
    title: doc.frontmatter.title,
    kicker: doc.frontmatter.kicker ?? "Research Program",
    questions: doc.frontmatter.questions,
  };
}

export function getResearchOverview() {
  return loadMdx<SectionFrontmatter>("research/overview.mdx");
}

export function getResearchMethods() {
  return loadMdx<MethodsFrontmatter>("research/methods.mdx");
}

export function getBiographyContent() {
  return loadMdx<BiographyFrontmatter>("biography/biography.mdx");
}

export function getContactContent() {
  return loadMdx<ContactFrontmatter>("contact/contact.mdx");
}

export function getTeachingContent() {
  const doc = loadMdx<TeachingFrontmatter>("teaching/overview.mdx");
  return {
    title: doc.frontmatter.title,
    kicker: doc.frontmatter.kicker ?? doc.frontmatter.title,
    folioLabel: doc.frontmatter.folioLabel,
    mentorshipTitle: doc.frontmatter.mentorshipTitle ?? "Graduate mentorship",
    statement: doc.paragraphs[0] ?? TODO,
    mentorshipStatement: doc.paragraphs[1] ?? doc.paragraphs[0] ?? TODO,
    body: doc.body,
    paragraphs: doc.paragraphs,
  };
}

export function getPublicationsContent() {
  return loadMdx<PublicationsFrontmatter>("publications/overview.mdx");
}

function projectFromMdx(relativePath: string): ProjectDetail {
  const doc = loadMdx<ProjectFrontmatter>(relativePath);
  const fm = doc.frontmatter;

  return {
    slug: fm.slug,
    title: fm.title,
    subtitle: fm.subtitle,
    tier: fm.tier,
    category: fm.subtitle,
    summary: doc.body || doc.paragraphs[0] || TODO,
    status: fm.status,
    role: TODO,
    collaborators: [],
    tags: [],
    featured: fm.featured,
    problem: TODO,
    whyItMatters: TODO,
    researchQuestions: [],
    methodology: TODO,
    technologies: [],
    outcomes: [],
    relatedPublicationIds: [],
    relatedCourseIds: [],
    relatedPublicHumanitiesIds: [],
    links: fm.links ?? [],
    body: doc.body,
    paragraphs: doc.paragraphs,
    homepage: fm.homepage,
    homepageFeatured: fm.homepageFeatured,
    homepageItalic: fm.homepageItalic,
  };
}

const TOOL_PROJECT_SLUGS = ["maracas", "arepa", "avocado"] as const;

export function getAllProjects(): ProjectDetail[] {
  const mdxProjects = listMdxFiles("projects").map((file) =>
    projectFromMdx(`projects/${file}`),
  );

  const manuscriptOrder = [
    "archivo-venezuela",
    "archivo-studio",
    "current-book-project",
    "graduate-certificate-applied-dh",
    "ai-lab-humanities",
    "fieldscholar",
    ...TOOL_PROJECT_SLUGS,
  ];

  const ordered = manuscriptOrder
    .map((slug) => mdxProjects.find((p) => p.slug === slug))
    .filter((p): p is ProjectDetail => Boolean(p));

  const extras = mdxProjects.filter(
    (p) => !manuscriptOrder.includes(p.slug as (typeof manuscriptOrder)[number]),
  );

  return [...ordered, ...extras];
}

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return getAllProjects().find((p) => p.slug === slug);
}

export function getThemeById(id: string) {
  return getResearchThemesContent().themes.find((theme) => theme.id === id);
}

export { sectionTitles, TODO };
