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
