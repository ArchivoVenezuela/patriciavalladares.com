import type { Metadata } from "next";
import { DigitalScholarshipPageClient } from "./DigitalScholarshipPageClient";
import { client } from "@/tina/__generated__/client";

export const metadata: Metadata = {
  title: "Digital Scholarship & Research Infrastructure",
};

export default async function DigitalScholarshipPage() {
  const result = await client.queries.researchMethods({
    relativePath: "methods.mdx",
  });

  return (
    <DigitalScholarshipPageClient
      query={result.query}
      variables={result.variables}
      data={result.data}
    />
  );
}
