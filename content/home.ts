import type { HomePageContent } from "@/lib/types";
import { draftBiography, draftHero, draftMethods, draftSectionTitles } from "./draft";

export const homeContent: HomePageContent = {
  hero: {
    kicker: draftSectionTitles.researchProgram,
    headline: draftHero.kicker,
    statement: draftHero.lede,
  },
  digitalScholarshipBand: {
    title: draftMethods.title,
    summary: `${draftMethods.intro} ${draftMethods.closing}`,
  },
  teachingTeaser: draftSectionTitles.researchProgram,
  publicHumanitiesTeaser: draftBiography.extended,
};
