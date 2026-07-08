/**
 * @deprecated Import from @/lib/content instead.
 * Thin compatibility layer — editorial copy lives in manuscript MDX files.
 */
import {
  getAllProjects,
  getBiographyContent,
  getHomeResearchProgram,
  getLandingHero,
  getResearchMethods,
  getResearchQuestionsContent,
  getResearchThemesContent,
  getThemeById,
  getProjectBySlug as getProjectFromMdx,
  sectionTitles,
  TODO,
} from "@/lib/content";

export { TODO, sectionTitles as draftSectionTitles, getThemeById };

export function getDraftTheme(id: string) {
  return getThemeById(id);
}

export function getDraftProject(slug: string) {
  const project = getProjectFromMdx(slug);
  if (!project) return undefined;
  return {
    slug: project.slug,
    title: project.title,
    subtitle: project.subtitle,
    description: project.summary,
  };
}

const hero = getLandingHero();
export const draftLandingHero = {
  label: hero.label,
  name: hero.name,
  titleLine: hero.titleLine,
  institution: hero.institution,
  figureLabel: hero.figureLabel,
  paragraphs: hero.paragraphs,
};

export const draftHero = {
  kicker: sectionTitles.hero,
  question:
    "How is cultural knowledge preserved when institutions collapse, communities migrate, while political power, and digital technologies increasingly mediate what is remembered and how?",
  lede:
    "This question brings together my work across digital humanities, Latin American and Caribbean studies, archival studies, cultural memory, migration, and critical approaches to digital humanities and artificial intelligence. My research explores the relationships between them through a set of interconnected projects, publications, digital infrastructures, and collaborative initiatives.",
};

export const draftResearchQuestions = getResearchQuestionsContent().questions;
export const draftInterlude = TODO;
export const draftThemes = getResearchThemesContent().themes;

const researchProgram = getHomeResearchProgram();
export const draftResearchProgram = {
  title: researchProgram.frontmatter.title,
  paragraphs: researchProgram.paragraphs,
};

export const draftProjects = getAllProjects()
  .filter((p) => !["maracas", "arepa", "avocado"].includes(p.slug))
  .map((p) => ({
    slug: p.slug,
    title: p.title,
    subtitle: p.subtitle,
    description: p.summary,
  }));

const methods = getResearchMethods();
export const draftMethods = {
  title: methods.frontmatter.title,
  intro: methods.paragraphs[0] ?? "",
  methods: methods.frontmatter.methods,
  closing: methods.paragraphs[1] ?? "",
};

const biography = getBiographyContent();
export const draftBiography = {
  short: biography.paragraphs[0] ?? "",
  extended: biography.paragraphs[1] ?? "",
};

export { getProjectFromMdx as getDraftProjectBySlug };
