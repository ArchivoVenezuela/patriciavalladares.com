import type { ResearchQuestion, ResearchTheme } from "@/lib/types";

export const researchThemes: ResearchTheme[] = [
  {
    id: "cultural-memory",
    number: "01",
    title: "Cultural Memory & Displacement",
    description:
      "How diasporic communities inscribe, circulate, and contest memory when displacement fractures familiar archives of belonging. This line of inquiry examines literature, film, theater, and music as repositories of experience that official histories often omit.",
  },
  {
    id: "authoritarianism",
    number: "02",
    title: "Authoritarianism, Crisis & Cultural Production",
    description:
      "The aesthetics and politics of cultural work produced under authoritarian regimes and during periods of social collapse. I study how artists transform crisis into form—and how form, in turn, becomes a site of resistance, testimony, and survival.",
  },
  {
    id: "multilingual-infrastructure",
    number: "03",
    title: "Multilingual Knowledge Infrastructures",
    description:
      "The design of cataloguing systems, metadata schemas, and discovery environments that sustain research across Spanish, English, and French without reducing cultural specificity. Multilingualism here is a scholarly method, not a translation afterthought.",
  },
  {
    id: "digital-humanities",
    number: "04",
    title: "Digital Humanities & Archives",
    description:
      "Digital methods as extensions of humanistic inquiry: building archives, standardizing metadata, designing sustainable workflows, and making cultural collections legible to researchers, students, and communities beyond the academy.",
  },
  {
    id: "public-humanities",
    number: "05",
    title: "Public Humanities & Democratic Resilience",
    description:
      "Scholarly work that reaches public audiences—through digital exhibits, community collaboration, and bilingual dissemination—especially in contexts marked by displacement, censorship, and the erosion of democratic institutions.",
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
