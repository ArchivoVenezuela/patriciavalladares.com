import type { AboutContent } from "@/lib/types";
import { TODO, draftBiography } from "./draft";

export const aboutContent: AboutContent = {
  positioningStatement: draftBiography.short,
  professionalIdentity: draftBiography.extended,
  intellectualBiography: [draftBiography.short, draftBiography.extended],
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
