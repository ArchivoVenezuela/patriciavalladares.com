/**
 * Compatibility bridge — import from @/lib/content for new code.
 * Editorial copy is loaded from manuscript/ via lib/content loaders.
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
