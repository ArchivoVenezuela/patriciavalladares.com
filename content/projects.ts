import type { ProjectDetail } from "@/lib/types";
import { TODO, draftProjects, getDraftProject } from "./draft";

function manuscriptProject(
  slug: string,
  overrides: Partial<ProjectDetail> = {},
): ProjectDetail {
  const draft = getDraftProject(slug);
  return {
    slug,
    title: draft?.title ?? slug,
    subtitle: draft?.subtitle ?? "—",
    tier: overrides.tier ?? "flagship",
    category: draft?.subtitle ?? "—",
    summary: draft?.description ?? TODO,
    status: overrides.status ?? "active",
    role: TODO,
    collaborators: [],
    tags: [],
    featured: overrides.featured,
    problem: TODO,
    whyItMatters: TODO,
    researchQuestions: [],
    methodology: TODO,
    technologies: [],
    outcomes: [],
    relatedPublicationIds: [],
    relatedCourseIds: [],
    relatedPublicHumanitiesIds: [],
    links: overrides.links ?? [],
    ...overrides,
  };
}

function toolProject(slug: string, title: string, subtitle: string): ProjectDetail {
  return {
    slug,
    title,
    subtitle,
    tier: "infrastructure",
    category: subtitle,
    summary: TODO,
    status: "active",
    role: TODO,
    collaborators: [],
    tags: [],
    problem: TODO,
    whyItMatters: TODO,
    researchQuestions: [],
    methodology: TODO,
    technologies: [],
    outcomes: [],
    relatedPublicationIds: [],
    relatedCourseIds: [],
    relatedPublicHumanitiesIds: [],
    links: [],
  };
}

export const projects: ProjectDetail[] = [
  manuscriptProject("archivo-venezuela", {
    tier: "flagship",
    status: "active",
    featured: true,
    links: [
      { label: "Archivo Venezuela", url: "https://archivovenezuela.com", external: true },
    ],
  }),
  manuscriptProject("archivo-studio", {
    tier: "flagship",
    status: "in-development",
    featured: true,
  }),
  manuscriptProject("graduate-certificate-applied-dh", {
    tier: "flagship",
    status: "planned",
    featured: true,
    title: draftProjects[3].title,
  }),
  manuscriptProject("ai-lab-humanities", {
    tier: "flagship",
    status: "planned",
    featured: true,
    title: draftProjects[4].title,
  }),
  {
    ...manuscriptProject("fieldscholar", {
      tier: "infrastructure",
      title: "FieldScholar",
      subtitle: TODO,
      status: "beta",
    }),
    summary: TODO,
  },
  manuscriptProject("current-book-project", {
    tier: "infrastructure",
    status: "in-development",
    featured: false,
  }),
  toolProject("maracas", "MARACAS", "Archival workflow tool"),
  toolProject("arepa", "AREPA", "Digital preservation tool"),
  toolProject("avocado", "AVOCADO", "Bibliographic metadata tool"),
];

export const flagshipProjects = projects.filter((p) =>
  [
    "archivo-venezuela",
    "archivo-studio",
    "graduate-certificate-applied-dh",
    "ai-lab-humanities",
  ].includes(p.slug),
);
export const infrastructureProjects = projects.filter((p) =>
  ["fieldscholar", "maracas", "arepa", "avocado"].includes(p.slug),
);
export const appliedProjects = infrastructureProjects;
export const bookProject = projects.find((p) => p.slug === "current-book-project");
export const featuredHomeProjects = flagshipProjects.filter((p) =>
  ["archivo-venezuela", "archivo-studio", "ai-lab-humanities"].includes(p.slug),
);

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((p) => p.slug === slug);
}
