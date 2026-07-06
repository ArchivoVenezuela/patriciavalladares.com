import type { ResearchQuestion, ResearchTheme } from "@/lib/types";
import { draftResearchQuestions, draftThemes } from "./draft";

export const researchThemes: ResearchTheme[] = draftThemes.map((theme, index) => ({
  id: theme.id,
  number: String(index + 1).padStart(2, "0"),
  title: theme.title,
  description: theme.description,
}));

export const researchQuestions: ResearchQuestion[] = draftResearchQuestions.map(
  (question, index) => ({
    id: `rq-${index + 1}`,
    question,
  }),
);
