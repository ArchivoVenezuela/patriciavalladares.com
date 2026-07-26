import type { NavItem } from "@/lib/types";

/** Site navigation labels — structural IA, not manuscript prose. */
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
