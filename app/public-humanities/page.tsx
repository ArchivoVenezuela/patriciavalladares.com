import type { Metadata } from "next";
import { PublicHumanitiesPageClient } from "./PublicHumanitiesPageClient";
import { client } from "@/tina/__generated__/client";
import { findProjectRelativePath } from "@/lib/tina/projects";

export const metadata: Metadata = { title: "Public Humanities" };

export default async function PublicHumanitiesPage() {
  const [phResult, themesResult, connectionResult] = await Promise.all([
    client.queries.publicHumanities({ relativePath: "overview.mdx" }),
    client.queries.homeThemes({ relativePath: "research-themes.mdx" }),
    client.queries.projectConnection(),
  ]);

  const projectSlug = phResult.data.publicHumanities.featuredProjectSlug;
  const projectRelativePath = findProjectRelativePath(
    connectionResult.data.projectConnection.edges,
    projectSlug,
  );

  if (!projectRelativePath) {
    throw new Error(
      `Public Humanities page: no project with slug '${projectSlug}' found.`,
    );
  }

  const projectResult = await client.queries.project({
    relativePath: projectRelativePath,
  });

  return (
    <PublicHumanitiesPageClient
      publicHumanities={{
        query: phResult.query,
        variables: phResult.variables,
        data: phResult.data,
      }}
      themes={{
        query: themesResult.query,
        variables: themesResult.variables,
        data: themesResult.data,
      }}
      project={{
        query: projectResult.query,
        variables: projectResult.variables,
        data: projectResult.data,
      }}
    />
  );
}
