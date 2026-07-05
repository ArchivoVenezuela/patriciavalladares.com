import type { NavItem, SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Patricia Valladares-Ruiz",
  wordmark: "P. Valladares-Ruiz",
  title: "Patricia Valladares-Ruiz — Academic Research",
  description:
    "Placeholder site description — interdisciplinary humanities scholar building multilingual knowledge infrastructures for archives, Digital Humanities, cultural memory, and public humanities.",
  url: "https://patriciavalladares.com",
  cvUrl: "/cv/cv-placeholder.pdf",
  email: "email@example.com",
  locale: "en",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Research Program", href: "/research" },
  { label: "Projects", href: "/projects" },
  {
    label: "Digital Scholarship & Research Infrastructure",
    shortLabel: "Digital Scholarship",
    href: "/digital-scholarship",
  },
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
