import type { DigitalScholarshipContent } from "@/lib/types";
import { getResearchMethods, TODO } from "@/lib/content";

const methods = getResearchMethods();

export const digitalScholarship: DigitalScholarshipContent = {
  intro: methods.paragraphs[0] ?? "",
  evolution: [
    {
      id: "methods",
      label: methods.frontmatter.title,
      description: methods.paragraphs[1] ?? "",
    },
  ],
  philosophy: methods.paragraphs[1] ?? "",
  infrastructure: TODO,
  digitalMethods: methods.frontmatter.methods.join("; "),
  ethicalAI: TODO,
  openScholarship: TODO,
  futureDirections: TODO,
};
