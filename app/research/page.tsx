import type { Metadata } from "next";
import { ResearchPageClient } from "./ResearchPageClient";
import { client } from "@/tina/__generated__/client";
import { findProjectRelativePath } from "@/lib/tina/projects";

export const metadata: Metadata = { title: "Research Program" };

export default async function ResearchPage() {
  const [overviewResult, themesResult, connectionResult] = await Promise.all([
    client.queries.researchOverview({ relativePath: "overview.mdx" }),
    client.queries.homeThemes({ relativePath: "research-themes.mdx" }),
    client.queries.projectConnection(),
  ]);

  const bookRelativePath = findProjectRelativePath(
    connectionResult.data.projectConnection.edges,
    "current-book-project",
  );

  if (!bookRelativePath) {
    throw new Error(
      "Research page: no project with slug 'current-book-project' found.",
    );
  }

  const bookResult = await client.queries.project({
    relativePath: bookRelativePath,
  });

  return (
    <ResearchPageClient
      overview={{
        query: overviewResult.query,
        variables: overviewResult.variables,
        data: overviewResult.data,
      }}
      themes={{
        query: themesResult.query,
        variables: themesResult.variables,
        data: themesResult.data,
      }}
      book={{
        query: bookResult.query,
        variables: bookResult.variables,
        data: bookResult.data,
      }}
    />
  );
}
