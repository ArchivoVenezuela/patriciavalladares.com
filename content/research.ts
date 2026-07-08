import type { ResearchProgramContent } from "@/lib/types";
import { getProjectBySlug, getResearchOverview } from "@/lib/content";

const overview = getResearchOverview();
const bookProject = getProjectBySlug("current-book-project");

export const researchProgram: ResearchProgramContent = {
  positioningStatement: overview.paragraphs[0] ?? "",
  researchVision: overview.paragraphs[1] ?? "",
  pullQuotes: [],
  futureDirections: overview.paragraphs[2] ?? "",
  bookProject: {
    title: bookProject?.title ?? "Archiving the Present",
    subtitle: bookProject?.subtitle ?? "Monograph",
    summary: bookProject?.summary ?? "",
    status: bookProject?.status ?? "in-development",
    slug: bookProject?.slug ?? "current-book-project",
  },
};
