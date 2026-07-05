import type { ResearchQuestion, ResearchTheme } from "@/lib/types";

export const researchThemes: ResearchTheme[] = [
  {
    id: "cultural-memory",
    number: "01",
    title: "Cultural Memory & Displacement",
    description: "Theme description pending.",
  },
  {
    id: "authoritarianism",
    number: "02",
    title: "Authoritarianism & Aesthetics",
    description: "Theme description pending.",
  },
  {
    id: "multilingual-infrastructure",
    number: "03",
    title: "Multilingual Knowledge Infrastructures",
    description: "Theme description pending.",
  },
  {
    id: "digital-humanities",
    number: "04",
    title: "Digital Humanities & Archives",
    description: "Theme description pending.",
  },
  {
    id: "public-humanities",
    number: "05",
    title: "Public Humanities",
    description: "Theme description pending.",
  },
];

export const researchQuestions: ResearchQuestion[] = [
  {
    id: "rq-1",
    question:
      "How do archives, digital collections, and AI shape cultural memory?",
  },
  {
    id: "rq-2",
    question:
      "How can multilingual infrastructures resist archival and algorithmic erasure?",
  },
  {
    id: "rq-3",
    question:
      "How can public humanities support democratic resilience under displacement and authoritarianism?",
  },
];
