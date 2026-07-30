import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";
import { client } from "@/tina/__generated__/client";

export const metadata: Metadata = { title: "Contact" };

/**
 * Contact page — Stage II Tina wiring.
 *
 * Prose/labels come from manuscript/contact/contact.mdx via Tina.
 * Identity VALUES (name, email, phone, cv url, department) remain
 * structural and live in content/site.ts.
 */
export default async function ContactPage() {
  const result = await client.queries.contact({
    relativePath: "contact.mdx",
  });

  return (
    <ContactPageClient
      query={result.query}
      variables={result.variables}
      data={result.data}
    />
  );
}
