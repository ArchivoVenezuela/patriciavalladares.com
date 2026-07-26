/**
 * Compatibility bridge — biography prose lives in manuscript/biography/biography.mdx.
 * Currently consumed only by unused alternate homepage components.
 */
import type { AboutContent } from "@/lib/types";
import { getBiographyContent, TODO } from "@/lib/content";

const biography = getBiographyContent();

export const aboutContent: AboutContent = {
  positioningStatement: biography.paragraphs[0] ?? "",
  professionalIdentity: biography.paragraphs[1] ?? "",
  intellectualBiography: biography.paragraphs,
  languages: {
    native: [],
    fluent: [],
  },
  education: [
    {
      degree: TODO,
      institution: TODO,
      year: "—",
    },
  ],
};
