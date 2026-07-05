import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";

const staticRoutes = [
  "",
  "/research",
  "/projects",
  "/digital-scholarship",
  "/publications",
  "/teaching",
  "/public-humanities",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...projects.map((project) => ({
      url: `${base}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
