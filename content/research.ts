import type { ResearchProgramContent } from "@/lib/types";
import { getDraftProject, draftResearchProgram } from "./draft";

const bookDraft = getDraftProject("current-book-project");

/** Re-exports manuscript content for any legacy imports */
export const researchProgram: ResearchProgramContent = {
  positioningStatement: draftResearchProgram.paragraphs[0],
  researchVision: draftResearchProgram.paragraphs[1],
  pullQuotes: [],
  futureDirections: draftResearchProgram.paragraphs[2],
  bookProject: {
    title: bookDraft?.title ?? "Archiving the Present",
    subtitle: bookDraft?.subtitle ?? "Monograph",
    summary: bookDraft?.description ?? "",
    status: "in-development",
    slug: "current-book-project",
  },
};
