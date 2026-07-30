import type { Metadata } from "next";
import { ProjectsPageClient } from "./ProjectsPageClient";
import { client } from "@/tina/__generated__/client";

export const metadata: Metadata = { title: "Research Projects" };

export default async function ProjectsPage() {
  const [overviewResult, connectionResult] = await Promise.all([
    client.queries.homeProjectsOverview({
      relativePath: "projects-overview.mdx",
    }),
    client.queries.projectConnection(),
  ]);

  return (
    <ProjectsPageClient
      overview={{
        query: overviewResult.query,
        variables: overviewResult.variables,
        data: overviewResult.data,
      }}
      connection={{
        query: connectionResult.query,
        variables: connectionResult.variables,
        data: connectionResult.data,
      }}
    />
  );
}
