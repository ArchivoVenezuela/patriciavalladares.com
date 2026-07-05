import type { ProjectDetail, ProjectStatus, ProjectTier } from "@/lib/types";

function placeholderDetail(
  slug: string,
  title: string,
  subtitle: string,
  tier: ProjectTier,
  category: string,
  tags: string[],
  featured = false,
): ProjectDetail {
  return {
    slug,
    title,
    subtitle,
    tier,
    category,
    summary: "One-sentence summary pending.",
    status: "placeholder" as ProjectStatus,
    role: "Role pending",
    collaborators: ["Collaborators pending"],
    tags,
    image: `/images/projects/${slug}.jpg`,
    featured,
    problem: "Problem statement pending.",
    whyItMatters: "Why it matters — statement pending.",
    researchQuestions: ["Research question pending."],
    methodology: "Methodology description pending.",
    technologies: ["Technology pending"],
    outcomes: ["Outcome pending."],
    relatedPublicationIds: [],
    relatedCourseIds: [],
    relatedPublicHumanitiesIds: [],
    links: [],
  };
}

export const projects: ProjectDetail[] = [
  placeholderDetail(
    "archivo-venezuela",
    "Archivo Venezuela",
    "Subtitle pending",
    "flagship",
    "Digital Archive | Public Humanities",
    ["archives", "public-humanities", "bilingual"],
    true,
  ),
  placeholderDetail(
    "archivo-studio",
    "Archivo Studio",
    "Subtitle pending",
    "flagship",
    "Research Infrastructure",
    ["metadata", "digital-humanities"],
    true,
  ),
  placeholderDetail(
    "graduate-certificate-applied-dh",
    "Graduate Certificate in Applied Digital Humanities",
    "Subtitle pending",
    "flagship",
    "Academic Program",
    ["teaching", "digital-humanities"],
    true,
  ),
  placeholderDetail(
    "ai-lab-humanities",
    "AI Lab for Teaching and Research in the Humanities",
    "Subtitle pending",
    "flagship",
    "Teaching & Research",
    ["teaching", "ai", "humanities"],
    true,
  ),
  placeholderDetail(
    "fieldscholar",
    "FieldScholar",
    "Subtitle pending",
    "flagship",
    "Applied Platform",
    ["fieldwork", "research-tools"],
    true,
  ),
  placeholderDetail(
    "current-book-project",
    "Current Book Project",
    "Subtitle pending",
    "flagship",
    "Monograph in Progress",
    ["monograph", "cultural-memory"],
    true,
  ),
  placeholderDetail(
    "maracas",
    "MARACAS",
    "Subtitle pending",
    "infrastructure",
    "Archival Workflow Tool",
    ["archives", "workflow"],
  ),
  placeholderDetail(
    "arepa",
    "AREPA",
    "Subtitle pending",
    "infrastructure",
    "Digital Preservation Tool",
    ["preservation", "archives"],
  ),
  placeholderDetail(
    "avocado",
    "AVOCADO",
    "Subtitle pending",
    "infrastructure",
    "Bibliographic Tool",
    ["metadata", "cataloguing"],
  ),
];

export const flagshipProjects = projects.filter((p) => p.tier === "flagship");
export const infrastructureProjects = projects.filter(
  (p) => p.tier === "infrastructure",
);

/** @deprecated use infrastructureProjects */
export const appliedProjects = infrastructureProjects;

export const bookProject = projects.find(
  (p) => p.slug === "current-book-project",
);

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((p) => p.slug === slug);
}
