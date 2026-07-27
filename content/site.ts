/**
 * Structural site identity and metadata — not manuscript prose.
 *
 * Canonical for: name, wordmark, title line, affiliation, department,
 * email, phone, domain, CV URL, social/profile links, SEO defaults.
 *
 * Substantial biography and contact-page prose live under manuscript/.
 * Canonical professional title:
 * “Professor of Latin American and Caribbean Literature and Film”.
 * Research specializations belong in biography prose, not in titleLine.
 */
import type { SiteConfig } from "@/lib/types";
import { navigation } from "./navigation";

export const siteConfig: SiteConfig = {
  name: "Patricia Valladares-Ruiz",
  wordmark: "P. Valladares-Ruiz",
  title: "Patricia Valladares-Ruiz — Academic Research",
  description:
    "Patricia Valladares-Ruiz is Professor of Latin American and Caribbean Literature and Film at the University of Cincinnati, where she works at the intersection of Latin American and Caribbean studies, archives, migration, cultural memory, digital humanities, and critical AI.",
  url: "https://patriciavalladares.com",
  cvUrl: "/cv/Patricia_Valladares_CV_2025.pdf",
  email: "pat.valladares@uc.edu",
  locale: "en",
  affiliation: "University of Cincinnati",
  department: "Department of Romance and Arabic Languages and Literatures",
  titleLine: "Professor of Latin American and Caribbean Literature and Film",
  phone: "(513) 432-6845",
};

export const socialLinks = {
  googleScholar: "#",
  orcid: "#",
  archivoVenezuela: "https://archivovenezuela.com",
  linkedin: "#",
};

export const cvNavItem = {
  label: "CV",
  href: siteConfig.cvUrl,
  external: true,
};
