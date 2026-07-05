import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "archivo-venezuela",
    title: "Archivo Venezuela",
    tier: "flagship",
    category: "Digital Archive | Public Humanities",
    tagline: "Project tagline pending",
    summary: "Project summary pending.",
    status: "placeholder",
    featured: true,
  },
  {
    slug: "archivo-studio",
    title: "Archivo Studio",
    tier: "flagship",
    category: "Research Infrastructure",
    tagline: "Project tagline pending",
    summary: "Project summary pending.",
    status: "placeholder",
    featured: true,
  },
  {
    slug: "graduate-certificate-applied-dh",
    title: "Graduate Certificate in Applied Digital Humanities",
    tier: "flagship",
    category: "Academic Program",
    tagline: "Project tagline pending",
    summary: "Project summary pending.",
    status: "placeholder",
    featured: true,
  },
  {
    slug: "ai-lab-humanities",
    title: "AI Lab for Teaching and Research in the Humanities",
    tier: "flagship",
    category: "Teaching & Research",
    tagline: "Project tagline pending",
    summary: "Project summary pending.",
    status: "placeholder",
    featured: true,
  },
  {
    slug: "fieldscholar",
    title: "FieldScholar",
    tier: "applied",
    category: "Applied Platform",
    tagline: "Tool tagline pending",
    summary: "Tool summary pending.",
    status: "placeholder",
  },
  {
    slug: "maracas",
    title: "MARACAS",
    tier: "applied",
    category: "Archival Workflow Tool",
    tagline: "Tool tagline pending",
    summary: "Tool summary pending.",
    status: "placeholder",
  },
  {
    slug: "arepa",
    title: "AREPA",
    tier: "applied",
    category: "Digital Preservation Tool",
    tagline: "Tool tagline pending",
    summary: "Tool summary pending.",
    status: "placeholder",
  },
  {
    slug: "avocado",
    title: "AVOCADO",
    tier: "applied",
    category: "Bibliographic Tool",
    tagline: "Tool tagline pending",
    summary: "Tool summary pending.",
    status: "placeholder",
  },
  {
    slug: "current-book-project",
    title: "Current Book Project",
    tier: "book",
    category: "Monograph in Progress",
    tagline: "Book project tagline pending",
    summary: "Book project summary pending.",
    status: "placeholder",
    featured: true,
  },
];

export const flagshipProjects = projects.filter((p) => p.tier === "flagship");
export const appliedProjects = projects.filter((p) => p.tier === "applied");
export const bookProject = projects.find((p) => p.tier === "book");

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
