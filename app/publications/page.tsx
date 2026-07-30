import type { Metadata } from "next";
import { PublicationsPageClient } from "./PublicationsPageClient";
import { client } from "@/tina/__generated__/client";

export const metadata: Metadata = { title: "Publications" };

export default async function PublicationsPage() {
  const result = await client.queries.publications({
    relativePath: "overview.mdx",
  });

  return (
    <PublicationsPageClient
      query={result.query}
      variables={result.variables}
      data={result.data}
    />
  );
}
