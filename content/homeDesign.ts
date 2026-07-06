import {
  TODO,
  draftBiography,
  draftHero,
  draftInterlude,
  draftMethods,
  draftProjects,
  draftResearchProgram,
  draftSectionTitles,
  getDraftProject,
  getDraftTheme,
} from "./draft";
import { books, featuredPublications } from "./publications";

export const homeNavLinks = [
  { id: "projects", label: "Research Projects", href: "#projects" },
  { id: "themes", label: "Research Themes", href: "#themes" },
  { id: "inquiry", label: "Inquiry", href: "#inquiry" },
  { id: "archive", label: "Archivo Venezuela", href: "#archive" },
  { id: "ai", label: "Critical AI", href: "#ai" },
  { id: "publications", label: "Publications", href: "#publications" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const;

export const instrumentsGraphHeading = draftSectionTitles.researchProjects;
export const instrumentsGraphAside = draftResearchProgram.paragraphs[0];

const p = (slug: string) => getDraftProject(slug)?.description ?? TODO;
const t = (id: string) => getDraftTheme(id)?.description ?? TODO;

export const graphNodes = {
  center: {
    index: draftSectionTitles.researchProgram,
    title: draftHero.kicker,
    text: draftHero.question,
  },
  archive: {
    index: "Archivo Venezuela",
    title: "Archivo Venezuela",
    text: p("archivo-venezuela"),
  },
  studio: {
    index: "Archivo Studio",
    title: "Archivo Studio",
    text: p("archivo-studio"),
  },
  book: {
    index: "Archiving the Present",
    title: "Archiving the Present",
    text: p("current-book-project"),
  },
  cert: {
    index: "Applied Digital Humanities Certificate",
    title: "Applied Digital Humanities Certificate",
    text: p("graduate-certificate-applied-dh"),
  },
  ailab: {
    index: "AI Lab",
    title: "AI Lab",
    text: p("ai-lab-humanities"),
  },
  counter: {
    index: "Counter-Archives",
    title: "Counter-Archives",
    text: t("counter-archives"),
  },
  migration: {
    index: "Migration",
    title: "Migration",
    text: t("migration"),
  },
} as const;

export type GraphNodeKey = keyof typeof graphNodes;

export const archiveLede = p("archivo-venezuela");

export const archiveStats = [
  { value: "—", label: "Records", accent: "oxblood" as const },
  { value: "—", label: "Collections", accent: "forest" as const },
  { value: "—", label: "Continents", accent: "forest" as const },
  { value: "—", label: "Partners", accent: "forest" as const },
  { value: "—", label: "Earliest · ongoing", accent: "oxblood" as const },
];

export const archiveSpecimens = [
  {
    year: "—",
    id: "TODO",
    title: TODO,
    meta: [
      ["Status", TODO],
      ["Source", "Texto para la web.md"],
    ] as [string, string][],
    note: TODO,
  },
];

export const instrumentIndex = draftProjects.map((project, index) => ({
  number: String(index + 1).padStart(2, "0"),
  title: project.title,
  subtitle: project.subtitle,
  description: project.description,
  featured: ["archivo-venezuela", "ai-lab-humanities"].includes(project.slug),
  slug: project.slug,
  italic: project.slug === "current-book-project",
}));

export const programTimeline = [
  { year: "—", title: TODO, note: TODO, featured: false },
];

export const homePublications = [
  ...books.slice(0, 2).map((b) => ({
    year: b.year,
    title: b.subtitle ? `${b.title}: ${b.subtitle}` : b.title,
    type: "Book" as const,
    featured: b.featured ?? false,
  })),
  ...featuredPublications
    .filter((pub) => pub.type !== "book")
    .slice(0, 2)
    .map((pub) => ({
      year: pub.year,
      title: pub.title,
      type: pub.type === "forthcoming" ? "Forthcoming" : "Article",
      featured: pub.featured ?? false,
    })),
];

export const biographyPanels = [
  { label: draftSectionTitles.biography, text: draftBiography.short },
  { label: draftSectionTitles.biography, text: draftBiography.extended },
];

export const aboutClosing = "";

export const migrationSection = {
  title: getDraftTheme("migration")?.title ?? "Migration",
  description: t("migration"),
  footer: TODO,
};

export const criticalAiSection = {
  title: getDraftTheme("critical-ai")?.title ?? "Critical AI",
  description: t("critical-ai"),
  machineReading: TODO,
  communityReading: TODO,
  captionMachine: TODO,
  captionCommunity: TODO,
};

export const criticalAiDemo = {
  objectId: "—",
  objectLabel: TODO,
  machineTags: [] as string[],
  machineConfidence: "—",
  machineNote: TODO,
  communityLead: TODO,
  communityNote: TODO,
};

export {
  draftHero,
  draftInterlude,
  draftBiography,
  draftSectionTitles,
  draftMethods,
};
