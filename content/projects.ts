import type { ProjectDetail } from "@/lib/types";

export const projects: ProjectDetail[] = [
  {
    slug: "archivo-venezuela",
    title: "Archivo Venezuela",
    subtitle: "Documenting diasporic cultural production",
    tier: "flagship",
    category: "Digital Archive | Public Humanities",
    summary:
      "A bilingual digital archive preserving Venezuelan diasporic literature, film, visual art, theater, and music for researchers, educators, and communities worldwide.",
    status: "active",
    role: "Founder, Director, Lead Developer",
    collaborators: [
      "Guest curators (CUNY, Cornell)",
      "Undergraduate research interns",
      "Diaspora studies collaborators",
    ],
    tags: ["archives", "bilingual", "public-humanities", "omeka"],
    featured: true,
    problem:
      "Since 2015, displacement from Venezuela has produced a vast body of cultural work—novels, films, performances, visual art—that risks disappearing without systematic preservation and bilingual description.",
    whyItMatters:
      "Archives shape what future scholars and communities can know. Without intentional infrastructure, diasporic cultural memory becomes fragmentary, monolingual, or inaccessible to the public.",
    researchQuestions: [
      "How can a bilingual digital archive make diasporic cultural production discoverable across languages and disciplines?",
      "What curatorial and metadata practices best serve both scholarly and community audiences?",
    ],
    methodology:
      "Omeka Classic platform with Dublin Core metadata; scholarly digital exhibits with curatorial essays; student training in digital curation; Python tools for sustainable batch cataloguing.",
    technologies: ["Omeka Classic", "Python", "Dublin Core", "Bilingual metadata (ES/EN)"],
    outcomes: [
      "Digital exhibits with international guest curators",
      "Bilingual metadata enabling cross-linguistic discovery",
      "Undergraduate research training in digital curation",
      "Public resource for diaspora communities and researchers",
    ],
    relatedPublicationIds: ["pub-2025-symposium", "pub-2025-alba", "pub-2023-latr"],
    relatedCourseIds: ["dhum7001"],
    relatedPublicHumanitiesIds: ["ph-archivo", "ph-exhibits"],
    links: [
      { label: "Visit Archivo Venezuela", url: "https://archivovenezuela.com", external: true },
      { label: "Digital Exhibits", url: "https://archivovenezuela.com/exhibits", external: true },
    ],
  },
  {
    slug: "archivo-studio",
    title: "Archivo Studio",
    subtitle: "Metadata translation and schema conversion",
    tier: "flagship",
    category: "Research Infrastructure",
    summary:
      "A web-based environment for translating and normalizing metadata across schemas and languages—extending archival practice into multilingual knowledge infrastructures.",
    status: "in-development",
    role: "Lead Developer",
    collaborators: ["Digital humanities collaborators"],
    tags: ["metadata", "multilingual", "digital-humanities"],
    featured: true,
    problem:
      "Digital archives cataloguing diverse media face incompatible metadata schemas and labor-intensive bilingual entry. Manual translation and conversion slow scholarly work and introduce inconsistency.",
    whyItMatters:
      "Multilingual knowledge infrastructures depend on metadata that travels across languages and standards without losing cultural specificity or scholarly precision.",
    researchQuestions: [
      "How can metadata workflows reduce duplication while preserving bilingual description?",
      "Where can assisted translation support—rather than replace—human curatorial judgment?",
    ],
    methodology:
      "Web interface integrating metadata standards (Dublin Core, MARC, MODS) with batch processing and quality review; designed as infrastructure for Archivo Venezuela and partner collections.",
    technologies: ["React", "TypeScript", "Metadata standards", "API integration"],
    outcomes: [
      "Reduced bilingual metadata labor across archival projects",
      "Schema interoperability for diverse media types",
      "Foundation for ethical AI-assisted cataloguing workflows",
    ],
    relatedPublicationIds: [],
    relatedCourseIds: ["dhum7001", "hum7075l"],
    relatedPublicHumanitiesIds: ["ph-archivo"],
    links: [],
  },
  {
    slug: "graduate-certificate-applied-dh",
    title: "Graduate Certificate in Applied Digital Humanities",
    subtitle: "Training humanists as builders and interpreters",
    tier: "flagship",
    category: "Academic Program",
    summary:
      "A graduate certificate preparing students to apply digital methods to humanistic research through archives, metadata, curation, and critical engagement with emerging tools.",
    status: "planned",
    role: "Program Developer",
    collaborators: ["Department and graduate faculty"],
    tags: ["teaching", "digital-humanities", "curriculum"],
    featured: true,
    problem:
      "Humanities graduate programs need structured pathways for digital methods that treat technology as interpretive practice—not as an optional technical supplement.",
    whyItMatters:
      "Applied digital humanities training produces scholars who can build, critique, and sustain the knowledge infrastructures their research requires.",
    researchQuestions: [
      "What competencies should humanists acquire to work critically with archives and digital tools?",
      "How can certificate curricula connect project-based learning to publication and public scholarship?",
    ],
    methodology:
      "Modular curriculum spanning introduction to digital humanities, applied archival practice, and capstone projects linked to department research strengths.",
    technologies: ["Omeka", "Metadata standards", "DH pedagogy frameworks"],
    outcomes: [
      "Credential pathway for applied digital humanities",
      "Integration with Archivo Venezuela and related research projects",
      "Pipeline for graduate student participation in public humanities work",
    ],
    relatedPublicationIds: [],
    relatedCourseIds: ["dhum7001"],
    relatedPublicHumanitiesIds: [],
    links: [],
  },
  {
    slug: "ai-lab-humanities",
    title: "AI Lab for Teaching and Research in the Humanities",
    subtitle: "Critical AI within humanistic practice",
    tier: "flagship",
    category: "Teaching & Research",
    summary:
      "A graduate seminar and research environment exploring AI applications in humanities scholarship and pedagogy—with emphasis on ethics, archives, and interpretive accountability.",
    status: "planned",
    role: "Course Director",
    collaborators: ["Graduate students", "DH collaborators"],
    tags: ["teaching", "ai", "ethics", "humanities"],
    featured: true,
    problem:
      "Humanities scholars and students encounter AI tools without frameworks for evaluating their limits, biases, or fit with interpretive methods grounded in archival and cultural context.",
    whyItMatters:
      "AI must be taught and researched as part of a humanistic trajectory—alongside archives, metadata, and public accountability—not as standalone technical skill acquisition.",
    researchQuestions: [
      "How should humanists evaluate AI outputs against archival evidence and cultural knowledge?",
      "What pedagogical models foster critical—not merely instrumental—AI literacy?",
    ],
    methodology:
      "Seminar format combining theoretical readings, hands-on experimentation with archival and metadata workflows, and student projects subject to humanistic review standards.",
    technologies: ["Archival platforms", "Metadata workflows", "AI APIs (evaluative use)"],
    outcomes: [
      "Graduate seminar (HUM 7075L) integrating AI within humanities methods",
      "Research prototypes linked to Archivo Studio and fieldwork tools",
      "Published pedagogical frameworks for ethical AI in the humanities",
    ],
    relatedPublicationIds: [],
    relatedCourseIds: ["hum7075l"],
    relatedPublicHumanitiesIds: [],
    links: [],
  },
  {
    slug: "fieldscholar",
    title: "FieldScholar",
    subtitle: "Fieldwork annotation and research capture",
    tier: "flagship",
    category: "Applied Platform",
    summary:
      "A mobile research companion for capturing, annotating, and organizing field notes and interviews—with offline capability and export to qualitative analysis workflows.",
    status: "beta",
    role: "Lead Developer",
    collaborators: ["Field researchers", "Graduate students"],
    tags: ["fieldwork", "research-tools", "mobile"],
    featured: true,
    problem:
      "Humanities field researchers need reliable tools for capturing heterogeneous materials—notes, audio, images—especially in contexts with limited connectivity.",
    whyItMatters:
      "Fieldwork generates the primary materials that archives later hold. Tools that support capture and early analysis strengthen the entire research pipeline from collection to preservation.",
    researchQuestions: [
      "How can mobile tools support annotation without preempting humanistic interpretation?",
      "Where might assisted transcription serve field researchers while preserving review and context?",
    ],
    methodology:
      "Mobile application with offline-first design; export pathways to established qualitative analysis software; integration with archival workflows where appropriate.",
    technologies: ["React Native", "Offline-first architecture", "Audio/Video capture"],
    outcomes: [
      "Streamlined field note capture and organization",
      "Prototype for AI-assisted transcription under researcher review",
      "Export compatibility with qualitative analysis tools",
    ],
    relatedPublicationIds: [],
    relatedCourseIds: [],
    relatedPublicHumanitiesIds: [],
    links: [],
  },
  {
    slug: "current-book-project",
    title: "Current Book Project",
    subtitle: "Diasporic cultural memory and narrative resistance (working title)",
    tier: "flagship",
    category: "Monograph in Progress",
    summary:
      "A monograph examining Venezuelan diasporic fiction and film as sites of gendered displacement, narrative resistance, and reimagined belonging.",
    status: "in-development",
    role: "Author",
    collaborators: ["Research communities in diaspora studies"],
    tags: ["monograph", "diaspora", "cultural-memory"],
    featured: true,
    problem:
      "Diasporic cultural production demands sustained literary and filmic analysis that connects aesthetic form to experiences of displacement, gender, and political crisis.",
    whyItMatters:
      "The monograph consolidates two decades of research on Venezuelan and Caribbean cultural production toward the urgent question of how exile reshapes narrative and cinematic imagination.",
    researchQuestions: [
      "How do diasporic writers and filmmakers reimagine home after displacement?",
      "What narrative strategies encode gendered experiences of exile and resistance?",
    ],
    methodology:
      "Close reading of contemporary fiction and film; dialogue with archive-based research from Archivo Venezuela; comparative diaspora studies framework.",
    technologies: [],
    outcomes: [
      "Book manuscript in development",
      "Integration with Archivo Venezuela research collections",
      "Contribution to diaspora studies and Latin American cultural criticism",
    ],
    relatedPublicationIds: ["pub-2025-symposium", "pub-2025-alba", "book-narrativas"],
    relatedCourseIds: ["span7080"],
    relatedPublicHumanitiesIds: [],
    links: [],
  },
  {
    slug: "maracas",
    title: "MARACAS",
    subtitle: "Batch Omeka item creator with bilingual support",
    tier: "infrastructure",
    category: "Archival Workflow Tool",
    summary:
      "Desktop utility for batch-creating Omeka items from bilingual CSV spreadsheets with metadata validation.",
    status: "active",
    role: "Lead Developer",
    collaborators: [],
    tags: ["omeka", "workflow", "python"],
    problem: "Manual Omeka data entry does not scale for bilingual archives.",
    whyItMatters: "Supports sustainable growth of Archivo Venezuela and related collections.",
    researchQuestions: [],
    methodology: "Python/Tkinter application with Omeka REST API integration.",
    technologies: ["Python", "Omeka REST API", "CSV"],
    outcomes: ["Bulk cataloguing with bilingual metadata validation"],
    relatedPublicationIds: [],
    relatedCourseIds: ["dhum7001"],
    relatedPublicHumanitiesIds: ["ph-archivo"],
    links: [],
  },
  {
    slug: "arepa",
    title: "AREPA",
    subtitle: "Omeka backup and preservation utility",
    tier: "infrastructure",
    category: "Digital Preservation Tool",
    summary:
      "Comprehensive backup tool for Omeka installations with integrity verification and preservation reports.",
    status: "active",
    role: "Lead Developer",
    collaborators: [],
    tags: ["preservation", "omeka", "python"],
    problem: "Digital archives require verified backup and migration pathways.",
    whyItMatters: "Long-term preservation underpins public humanities commitments.",
    researchQuestions: [],
    methodology: "Automated export of items, collections, files, and metadata with checksums.",
    technologies: ["Python", "JSON/CSV export"],
    outcomes: ["Disaster recovery and migration support for Omeka archives"],
    relatedPublicationIds: [],
    relatedCourseIds: [],
    relatedPublicHumanitiesIds: [],
    links: [],
  },
  {
    slug: "avocado",
    title: "AVOCADO",
    subtitle: "WorldCat bibliographic metadata retrieval",
    tier: "infrastructure",
    category: "Bibliographic Tool",
    summary:
      "Retrieves and enriches bibliographic metadata from OCLC WorldCat for archival cataloguing.",
    status: "active",
    role: "Lead Developer",
    collaborators: [],
    tags: ["metadata", "bibliography", "worldcat"],
    problem: "Complete bibliographic records require time-consuming manual lookups.",
    whyItMatters: "Accelerates cataloguing while maintaining metadata completeness.",
    researchQuestions: [],
    methodology: "ISBN/OCLC lookup with batch processing and export.",
    technologies: ["Python", "OCLC WorldCat API"],
    outcomes: ["Standardized bibliographic records across collections"],
    relatedPublicationIds: [],
    relatedCourseIds: [],
    relatedPublicHumanitiesIds: [],
    links: [],
  },
];

export const flagshipProjects = projects.filter((p) => p.tier === "flagship");
export const infrastructureProjects = projects.filter((p) => p.tier === "infrastructure");
export const appliedProjects = infrastructureProjects;
export const bookProject = projects.find((p) => p.slug === "current-book-project");
export const featuredHomeProjects = flagshipProjects.filter((p) =>
  ["archivo-venezuela", "archivo-studio", "ai-lab-humanities"].includes(p.slug),
);

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((p) => p.slug === slug);
}
