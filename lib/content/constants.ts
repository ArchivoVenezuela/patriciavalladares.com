/** Client-safe editorial constants with no filesystem access. */

export const TODO = "TODO: content needed" as const;

export const sectionTitles = {
  hero: "Cultural knowledge in times of displacement",
  researchProgram: "Research Program",
  researchThemes: "Research Themes",
  researchProjects: "Research Projects",
  publications: "Publications",
  methods: "Methods",
  biography: "Biography",
  contact: "Contact",
} as const;