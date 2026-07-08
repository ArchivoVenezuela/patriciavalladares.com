import type { ResearchQuestion, ResearchTheme } from "@/lib/types";
import {
  getResearchQuestionsContent,
  getResearchThemesContent,
} from "@/lib/content";

const themesContent = getResearchThemesContent();
const questionsContent = getResearchQuestionsContent();

export const researchThemes: ResearchTheme[] = themesContent.themes.map(
  (theme, index) => ({
    id: theme.id,
    number: String(index + 1).padStart(2, "0"),
    title: theme.title,
    description: theme.description,
  }),
);

export const researchQuestions: ResearchQuestion[] =
  questionsContent.questions.map((question, index) => ({
    id: `rq-${index + 1}`,
    question,
  }));
