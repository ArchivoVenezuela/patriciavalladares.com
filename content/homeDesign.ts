import {
  getAllProjects,
  getBiographyContent,
  getHomeResearchProgram,
  getLandingHero,
  getProjectBySlug,
  getPublicationsContent,
  getThemeById,
} from "@/lib/content";
import { sectionTitles, TODO } from "@/lib/content/constants";

const program = getHomeResearchProgram();
const hero = getLandingHero();
const publications = getPublicationsContent();
const biography = getBiographyContent();

export const instrumentsGraphHeading = sectionTitles.researchProjects;
export const instrumentsGraphAside = program.paragraphs[0] ?? "";

const p = (slug: string) => getProjectBySlug(slug)?.summary ?? TODO;
const t = (id: string) => getThemeById(id)?.description ?? TODO;

export const graphNodes = {
  center: {
    index: sectionTitles.researchProgram,
    title: sectionTitles.hero,
    text: hero.paragraphs[0] ?? "",
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

const archivoProject = getProjectBySlug("archivo-venezuela");
export const archiveLede = archivoProject?.summary ?? TODO;

export const archiveStats = archivoProject?.homepage?.stats ?? [
  { value: "—", label: "Records", accent: "oxblood" as const },
  { value: "—", label: "Collections", accent: "forest" as const },
  { value: "—", label: "Continents", accent: "forest" as const },
  { value: "—", label: "Partners", accent: "forest" as const },
  { value: "—", label: "Earliest · ongoing", accent: "oxblood" as const },
];

export const archiveSpecimens = archivoProject?.homepage?.specimens ?? [
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

export const instrumentIndex = getAllProjects()
  .filter((p) => !["maracas", "arepa", "avocado", "fieldscholar"].includes(p.slug))
  .map((project, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: project.title,
    subtitle: project.subtitle,
    description: project.summary,
    featured: project.homepageFeatured ?? false,
    slug: project.slug,
    italic: project.homepageItalic ?? false,
  }));

export const programTimeline = [
  { year: "—", title: TODO, note: TODO, featured: false },
];

const { books, articles } = publications.frontmatter;

export const homePublications = [
  ...books.slice(0, 2).map((b) => ({
    year: b.year,
    title: b.subtitle ? `${b.title}: ${b.subtitle}` : b.title,
    type: "Book" as const,
    featured: b.featured ?? false,
  })),
  ...articles
    .filter((pub) => pub.featured && pub.type !== "book")
    .slice(0, 2)
    .map((pub) => ({
      year: pub.year,
      title: pub.title,
      type: pub.type === "forthcoming" ? "Forthcoming" : "Article",
      featured: pub.featured ?? false,
    })),
];

export const biographyPanels = [
  { label: sectionTitles.biography, text: biography.paragraphs[0] ?? "" },
  { label: sectionTitles.biography, text: biography.paragraphs[1] ?? "" },
];

export const aboutClosing = "";

export const migrationSection = {
  title: getThemeById("migration")?.title ?? "Migration",
  description: t("migration"),
  footer: TODO,
};

export const criticalAiSection = {
  title: getThemeById("critical-ai")?.title ?? "Critical AI",
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
  sectionTitles as draftSectionTitles,
  TODO as draftInterlude,
  TODO,
};
