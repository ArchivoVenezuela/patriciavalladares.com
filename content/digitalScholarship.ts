import type { DigitalScholarshipContent } from "@/lib/types";
import { TODO, draftMethods } from "./draft";

export const digitalScholarship: DigitalScholarshipContent = {
  intro: draftMethods.intro,
  evolution: [
    {
      id: "methods",
      label: draftMethods.title,
      description: draftMethods.closing,
    },
  ],
  philosophy: draftMethods.closing,
  infrastructure: TODO,
  digitalMethods: draftMethods.methods.join("; "),
  ethicalAI: TODO,
  openScholarship: TODO,
  futureDirections: TODO,
};
