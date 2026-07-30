import type { Metadata } from "next";
import { TeachingPageClient } from "./TeachingPageClient";
import { client } from "@/tina/__generated__/client";

export const metadata: Metadata = { title: "Teaching" };

export default async function TeachingPage() {
  const result = await client.queries.teaching({
    relativePath: "overview.mdx",
  });

  return (
    <TeachingPageClient
      query={result.query}
      variables={result.variables}
      data={result.data}
    />
  );
}
