import type { HomePageContent } from "@/lib/types";
import {
  getBiographyContent,
  getHomeResearchProgram,
  getResearchMethods,
  sectionTitles,
} from "@/lib/content";

const methods = getResearchMethods();
const biography = getBiographyContent();
const program = getHomeResearchProgram();

export const homeContent: HomePageContent = {
  hero: {
    kicker: sectionTitles.researchProgram,
    headline: program.frontmatter.title,
    statement: program.paragraphs[0] ?? "",
  },
  digitalScholarshipBand: {
    title: methods.frontmatter.title,
    summary: `${methods.paragraphs[0] ?? ""} ${methods.paragraphs[1] ?? ""}`.trim(),
  },
  teachingTeaser: sectionTitles.researchProgram,
  publicHumanitiesTeaser: biography.paragraphs[1] ?? "",
};
