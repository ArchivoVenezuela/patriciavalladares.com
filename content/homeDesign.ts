import { draftHero, draftInterlude, draftBiography, draftProjects } from "./draft";
import { books, featuredPublications } from "./publications";

export const homeNavLinks = [
  { id: "instruments", label: "Instruments", href: "#instruments" },
  { id: "archive", label: "Archive", href: "#archive" },
  { id: "migration", label: "Migration", href: "#migration" },
  { id: "ai", label: "Critical AI", href: "#ai" },
  { id: "inquiry", label: "Inquiry", href: "#inquiry" },
  { id: "index", label: "Index", href: "#index" },
  { id: "about", label: "About", href: "#about" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const;

/** Design tagline — masthead footer per Claude prototype */
export const mastheadTagline =
  "A research program preserving endangered cultural knowledge — where the archive, not the algorithm, is the protagonist.";

/** Archive section lede per Claude prototype */
export const archiveLede =
  "A nation's record, gathered from a diaspora spread across three continents. Open the drawer — every object carries its journey.";

export const graphNodes = {
  center: {
    index: "The question",
    title: "Cultural knowledge",
    text: "What survives when institutions collapse, communities migrate, and machines decide what is seen?",
  },
  archive: {
    index: "Ex. 01 · Archive",
    title: "Archivo Venezuela",
    text: "A nation's record, gathered from its diaspora across three continents.",
  },
  studio: {
    index: "Ex. 02 · Studio",
    title: "Archivo Studio",
    text: "The workshop where description standards and interfaces are built.",
  },
  book: {
    index: "Ex. 03 · Book",
    title: "Archiving the Present",
    text: "The program's argument in long form. In press, 2026.",
  },
  cert: {
    index: "Ex. 04 · Teaching",
    title: "Applied DH Certificate",
    text: "A graduate curriculum that trains builders, not spectators.",
  },
  ailab: {
    index: "Ex. 05 · Lab",
    title: "AI Lab",
    text: "Where the machine's account of culture is tested and rebuilt.",
  },
  counter: {
    index: "Method",
    title: "Counter-Archive",
    text: "Memory recorded against the grain of the official record.",
  },
  migration: {
    index: "Condition",
    title: "Migration",
    text: "What memory does when its people are dispersed.",
  },
} as const;

export type GraphNodeKey = keyof typeof graphNodes;

// TODO: Replace with verified collection statistics when available
export const archiveStats = [
  { value: "—", label: "Records", accent: "oxblood" as const },
  { value: "—", label: "Collections", accent: "forest" as const },
  { value: "3", label: "Continents", accent: "forest" as const },
  { value: "—", label: "Partners", accent: "forest" as const },
  { value: "—", label: "Earliest · ongoing", accent: "oxblood" as const },
];

/** Demonstrative specimens from Claude design UI — TODO: replace with verified Archivo Venezuela catalog records */
export const archiveSpecimens = [
  {
    year: "1998",
    id: "AV-1998-0417",
    title: "Boletín del exilio, no. 12",
    meta: [
      ["Type", "Periodical · print → digital"],
      ["Origin", "Caracas → Bogotá → Miami"],
      ["Date", "1998"],
      ["Rights", "Community stewardship"],
    ],
    note: "Staples rusted through. We scanned it the afternoon it arrived.",
  },
  {
    year: "2004",
    id: "AV-2004-1130",
    title: "Casete — testimonio oral",
    meta: [
      ["Type", "Audio · 90 min"],
      ["Origin", "Maracaibo"],
      ["Date", "2004"],
      ["Rights", "Restricted · family consent"],
    ],
    note: "The last recording of a voice now gone.",
  },
  {
    year: "2011",
    id: "AV-2011-0022",
    title: "Cartel — marcha estudiantil",
    meta: [
      ["Type", "Poster · offset"],
      ["Origin", "Caracas"],
      ["Date", "2011"],
      ["Rights", "Open access"],
    ],
    note: "Folded eight times to fit a pocket across a border.",
  },
  {
    year: "2017",
    id: "AV-2017-0555",
    title: "Fotografía — vigilia",
    meta: [
      ["Type", "Photograph · born-digital"],
      ["Origin", "Caracas"],
      ["Date", "2017"],
      ["Rights", "Photographer, in exile"],
    ],
    note: "A vigil, not a riot. The candles are cropped out.",
  },
  {
    year: "2020",
    id: "AV-2020-0810",
    title: "Hilo — archivo born-digital",
    meta: [
      ["Type", "Social media · thread"],
      ["Origin", "Diaspora"],
      ["Date", "2020"],
      ["Rights", "Community capture"],
    ],
    note: "Deleted by the platform; preserved by the community.",
  },
];

export const instrumentIndex = [
  {
    number: "01",
    title: draftProjects[0].title,
    subtitle: draftProjects[0].subtitle,
    description: draftProjects[0].description,
    tags: "Counter-Archive · Migration",
    featured: true,
    slug: draftProjects[0].slug,
  },
  {
    number: "02",
    title: draftProjects[1].title,
    subtitle: draftProjects[1].subtitle,
    description: draftProjects[1].description,
    tags: "Infrastructures",
    featured: false,
    slug: draftProjects[1].slug,
  },
  {
    number: "03",
    title: draftProjects[2].title,
    subtitle: draftProjects[2].subtitle,
    description: draftProjects[2].description,
    tags: "Cultural Memory",
    featured: false,
    slug: draftProjects[2].slug,
    italic: true,
  },
  {
    number: "04",
    title: draftProjects[3].title,
    subtitle: draftProjects[3].subtitle,
    description: draftProjects[3].description,
    tags: "Public Humanities",
    featured: false,
    slug: draftProjects[3].slug,
  },
  {
    number: "05",
    title: draftProjects[4].title,
    subtitle: draftProjects[4].subtitle,
    description: draftProjects[4].description,
    tags: "Critical AI",
    featured: true,
    slug: draftProjects[4].slug,
  },
];

// TODO: Verify milestone dates against project history
export const programTimeline = [
  { year: "1998", title: "First rescue", note: "A single collection digitized before it was lost.", featured: true },
  { year: "2013", title: "Studio founded", note: "Rescue becomes method and standard.", featured: false },
  { year: "2017", title: "Diaspora network", note: "Communities become collaborators across continents.", featured: false },
  { year: "2020", title: "Certificate launches", note: "The practice becomes a curriculum.", featured: false },
  { year: "2023", title: "AI Lab", note: "The program turns to face the machine.", featured: false },
  { year: "2026", title: "The book", note: "Two decades distilled into one argument.", featured: true, italic: true },
];

export const homePublications = [
  ...books.slice(0, 2).map((b) => ({
    year: b.year,
    title: b.subtitle ? `${b.title}: ${b.subtitle}` : b.title,
    type: "Book" as const,
    featured: b.featured ?? false,
  })),
  ...featuredPublications
    .filter((p) => p.type !== "book")
    .slice(0, 2)
    .map((p) => ({
      year: p.year,
      title: p.title,
      type: p.type === "forthcoming" ? "Forthcoming" : "Article",
      featured: p.featured ?? false,
    })),
];

export const aboutPanels = [
  {
    label: "What she asks",
    text: "How does a culture remember itself once its institutions are gone?",
    serif: true,
  },
  {
    label: "How she works",
    text: "Archival, computational, and public — with communities as collaborators, never as subjects.",
    serif: false,
  },
  {
    label: "Who she works with",
    text: "Libraries, archives, museums, cultural organizations, and community partners.",
    serif: false,
  },
  {
    label: "What remains",
    text: "Infrastructure others can use — an archive, a studio, a book, a curriculum, a lab.",
    serif: false,
  },
];

export const aboutClosing = `${draftBiography.short} ${draftBiography.extended}`;

export const criticalAiDemo = {
  objectId: "AV-2017-0555",
  objectLabel: "[ photograph ]\nCaracas, 2017",
  machineTags: ["crowd", "street", "daytime", "people · 40+", "urban area", "event"],
  machineConfidence: "0.71",
  machineNote:
    "Classified as \"public gathering.\" No date beyond EXIF. No names. No reason.",
  communityLead:
    "A vigil, not a riot. The candles are cropped out. The banner names the disappeared.",
  communityNote:
    "Photographed by a participant, later exiled. The image left the country on a phone. What the model reads as \"crowd,\" a mother reads as her son.",
};

export { draftHero, draftInterlude, draftBiography };
