import type { NavItem, SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Patricia Valladares-Ruiz",
  wordmark: "P. Valladares-Ruiz",
  title: "Patricia Valladares-Ruiz — Academic Research",
  description:
    "Interdisciplinary humanities scholar building multilingual knowledge infrastructures for archives, digital humanities, cultural memory, and public scholarship.",
  url: "https://patriciavalladares.com",
  cvUrl: "/cv/Patricia_Valladares_CV_2025.pdf",
  email: "pat.valladares@uc.edu",
  locale: "en",
  affiliation: "University of Cincinnati",
  department:
    "Department of Romance and Arabic Languages and Literatures",
  titleLine: "Professor of Latin American and Caribbean Cultural Studies",
  phone: "(513) 432-6845",
};

export const socialLinks = {
  googleScholar: "#",
  orcid: "#",
  archivoVenezuela: "https://archivovenezuela.com",
  linkedin: "#",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Research Program", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Digital Scholarship & Research Infrastructure", shortLabel: "Digital Scholarship", href: "/digital-scholarship" },
  { label: "Publications", href: "/publications" },
  { label: "Teaching", href: "/teaching" },
  { label: "Public Humanities", href: "/public-humanities" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const cvNavItem: NavItem = {
  label: "CV",
  href: siteConfig.cvUrl,
  external: true,
};
