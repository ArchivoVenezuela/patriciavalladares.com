/**
 * Compatibility bridge — project narratives live in manuscript/projects/*.mdx.
 * Tool stubs (MARACAS, AREPA, AVOCADO) are defined in lib/content until MDX exists.
 */
import type { ProjectDetail } from "@/lib/types";
import { getAllProjects, getProjectBySlug, TODO } from "@/lib/content";

export const projects: ProjectDetail[] = getAllProjects();

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

export { getProjectBySlug, TODO };
