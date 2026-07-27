import type { Metadata } from "next";
import { AboutPageClient } from "./AboutPageClient";
import { client } from "@/tina/__generated__/client";

export const metadata: Metadata = { title: "Biography" };

/**
 * About page — Stage 1 Tina spike.
 *
 * Public/production: Tina client reads the same manuscript MDX file.
 * Edit mode: AboutPageClient hydrates via useTina for visual editing.
 * Canonical file remains manuscript/biography/biography.mdx.
 */
export default async function AboutPage() {
  const result = await client.queries.biography({
    relativePath: "biography.mdx",
  });

  return (
    <AboutPageClient
      query={result.query}
      variables={result.variables}
      data={result.data}
    />
  );
}
