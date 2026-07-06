/**
 * SINGLE SOURCE OF TRUTH — all editorial content from
 * Text and prototype/Texto para la web.md
 *
 * Do not add copy here that is not in that manuscript.
 * Use TODO when layout requires text the manuscript does not provide.
 */

export const TODO =
  "[TODO: Copy not provided in Texto para la web.md]" as const;

export const draftSectionTitles = {
  hero: "Cultural knowledge in times of displacement",
  researchProgram: "Research Program",
  researchThemes: "Research Themes",
  researchProjects: "Research Projects",
  publications: "Publications",
  methods: "Methods",
  biography: "Biography",
  contact: "Contact",
} as const;

export const draftHero = {
  kicker: draftSectionTitles.hero,
  question:
    "How is cultural knowledge preserved when institutions collapse, communities migrate, while political power, and digital technologies increasingly mediate what is remembered and how?",
  lede:
    "This question brings together my work across digital humanities, Latin American and Caribbean studies, archival studies, cultural memory, migration, and critical approaches to digital humanities and artificial intelligence. My research explores the relationships between them through a set of interconnected projects, publications, digital infrastructures, and collaborative initiatives.",
};

/** Homepage landing hero — research program introduction */
export const draftLandingHero = {
  label: draftSectionTitles.researchProgram,
  name: "Patricia Valladares-Ruiz",
  titleLine:
    "Professor of Latin American and Caribbean Literature, Film, and Cultural Studies",
  institution: "University of Cincinnati",
  figureLabel: "01 — Introduction",
  paragraphs: [
    "I am Professor of Latin American and Caribbean Literature, Film, and Cultural Studies at the University of Cincinnati.",
    "My research examines how cultural knowledge is produced, preserved, and contested under conditions of political crisis, forced migration, and institutional collapse—across literature, film, theater, music, graphic narrative, and digital archives. The central question is what happens to cultural memory when the institutions responsible for preserving it lose legitimacy or cease to function.",
    "My current book, Archiving the Present, argues that Venezuelan diasporic cultural production functions as a contemporary counter-archive: a dispersed field of writers, filmmakers, musicians, and artists working across multiple countries who have assumed documentary and preservative functions once associated with national cultural institutions. The argument develops across six media and draws on more than two decades of research on Latin America and the Caribbean.",
    "Archivo Venezuela, the bilingual digital archive I founded and direct, is both an object of this research and part of its scholarly infrastructure.",
  ],
};

export const draftResearchQuestions = [
  "How do archives, digital collections, and AI shape cultural memory?",
  "How can multilingual infrastructures resist archival and algorithmic erasure?",
  "How can public humanities support democratic resilience under displacement and authoritarianism?",
];

/** Interlude section — no manuscript copy; layout retained */
export const draftInterlude = TODO;

export const draftResearchProgram = {
  title: draftSectionTitles.researchProgram,
  paragraphs: [
    "My work examines how cultural knowledge is preserved, transformed, and circulated under conditions of political crisis, forced migration, and technological change. Particular attention is given to archives, digital infrastructures, and the ways in which computational systems participate in processes of cultural memory.",
    "The program combines historical research, archival practice, digital methods, public humanities, and interdisciplinary collaboration. Its outcomes include scholarly publications, digital archives, research software, graduate teaching, exhibitions, and public-facing resources.",
    "Although these initiatives differ in format, they contribute to a shared line of inquiry concerning the production, preservation, and interpretation of cultural knowledge.",
  ],
};

export const draftThemes = [
  {
    id: "digital-humanities",
    title: "Digital Humanities",
    description:
      "Digital technologies increasingly shape how knowledge is produced, organized, preserved, and accessed. This research approaches computation as a scholarly method while examining its intellectual and institutional implications for the humanities.",
  },
  {
    id: "latin-american",
    title: "Latin American and Caribbean Studies",
    description:
      "Latin America and the Caribbean provide the historical and cultural context from which many of these questions emerge. Regional experiences of dictatorship, migration, memory, and cultural production inform the broader comparative framework of the program.",
  },
  {
    id: "cultural-memory",
    title: "Cultural Memory",
    description:
      "How societies remember—and what they forget—is neither accidental nor neutral. In my latest monograph, I investigate the institutions, practices, and technologies through which cultural memory is constructed, transmitted, and contested.",
  },
  {
    id: "archives",
    title: "Archives",
    description:
      "Archives are understood not simply as repositories but as social, political, and technological infrastructures. Research addresses archival formation, digital preservation, metadata, description, and access, particularly in contexts where official records have become fragmented or inaccessible.",
  },
  {
    id: "counter-archives",
    title: "Counter-Archives",
    description:
      "Counter-archives document experiences that remain absent from institutional collections. The program examines how dispersed communities, cultural practitioners, and civil society create alternative records that challenge official narratives.",
  },
  {
    id: "migration",
    title: "Migration",
    description:
      "Migration transforms not only populations but also the circulation of knowledge, cultural heritage, and memory. Projects explore diasporic networks, transnational archives, and the movement of cultural materials across borders.",
  },
  {
    id: "public-humanities",
    title: "Public Humanities",
    description:
      "Research extends beyond the university through collaborations with libraries, archives, museums, cultural organizations, and community partners. Public scholarship is treated as an integral dimension of research rather than as a separate activity.",
  },
  {
    id: "critical-ai",
    title: "Critical AI",
    description:
      "Artificial intelligence increasingly influences the description, discovery, and interpretation of cultural materials. This work examines the epistemological assumptions embedded within computational systems and explores alternative approaches for archives and the humanities.",
  },
  {
    id: "digital-infrastructure",
    title: "Digital Knowledge Infrastructures",
    description:
      "Behind every digital collection lies an infrastructure of standards, metadata, software, and institutional practices. The program investigates how these infrastructures shape what can be preserved, discovered, and reused.",
  },
];

export const draftProjects = [
  {
    slug: "archivo-venezuela",
    title: "Archivo Venezuela",
    subtitle: "Digital archive",
    description:
      "A digital archive documenting the cultural production of the Venezuelan diaspora. The project combines archival practice, multilingual metadata, community collaboration, and digital preservation to document materials dispersed across multiple countries and institutions.",
  },
  {
    slug: "archivo-studio",
    title: "Archivo Studio",
    subtitle: "Methods studio",
    description:
      "A suite of digital tools supporting archival workflows, metadata production, multilingual description, quality control, and publication. Developed as research infrastructure, the project investigates how digital systems can support rather than replace scholarly judgment.",
  },
  {
    slug: "current-book-project",
    title: "Archiving the Present",
    subtitle: "Monograph",
    description:
      "A book-length study examining archives, migration, cultural memory, and machine-mediated knowledge production in contemporary Latin America. The manuscript synthesizes questions developed across more than two decades of research.",
  },
  {
    slug: "graduate-certificate-applied-dh",
    title: "Applied Digital Humanities Certificate",
    subtitle: "Graduate program",
    description:
      "An interdisciplinary graduate curriculum introducing students to digital methods, archival practice, metadata, project development, and public humanities.",
  },
  {
    slug: "ai-lab-humanities",
    title: "AI Lab",
    subtitle: "Laboratory",
    description:
      "An experimental environment for studying the application of machine learning and large language models to archival description, multilingual collections, research workflows, and digital cultural heritage.",
  },
];

export const draftMethods = {
  title: draftSectionTitles.methods,
  intro:
    "My research projects combine qualitative inquiry, archival research, computational methods, and collaborative design.",
  methods: [
    "Archival research",
    "Oral history",
    "Digital humanities",
    "Metadata design",
    "Digital preservation",
    "Computational text analysis",
    "Public scholarship",
    "Research software development",
    "Human-centered AI",
    "Collaborative research",
  ],
  closing:
    "Methodological choices depend on the research question rather than on any single disciplinary tradition.",
};

export const draftBiography = {
  short:
    "Patricia Valladares-Ruiz is Professor of Hispanic Studies at the University of Cincinnati, where she works at the intersection of Latin American and Caribbean studies, archives, migration, cultural memory, digital humanities, and critical AI.",
  extended:
    "Her research combines scholarship, digital infrastructure, archival practice, and public humanities to examine how cultural knowledge is preserved, transformed, and made accessible in periods of political, social, and technological change.",
};

export function getDraftTheme(id: string) {
  return draftThemes.find((t) => t.id === id);
}

export function getDraftProject(slug: string) {
  return draftProjects.find((p) => p.slug === slug);
}
