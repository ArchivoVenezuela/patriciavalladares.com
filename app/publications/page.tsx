import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import {
  allPublications,
  featuredPublications,
} from "@/content/publications";

export const metadata = { title: "Publications" };

export default function PublicationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <PageHeader
        kicker="Publications"
        title="Publications"
        description="Publication data pending."
      />
      <Section kicker="Featured" title="Featured Publications">
        <ul className="space-y-4">
          {featuredPublications.map((pub) => (
            <li key={pub.id} className="border-b border-border pb-4">
              <p className="font-display text-lg text-ink">{pub.title}</p>
              <p className="text-sm text-ink-muted">
                {pub.venue} ({pub.year})
              </p>
            </li>
          ))}
        </ul>
      </Section>
      <Section kicker="Complete" title="All Publications">
        <ul className="space-y-4">
          {allPublications.map((pub) => (
            <li key={pub.id}>
              <p className="text-ink">{pub.title}</p>
              <p className="text-sm text-ink-muted">
                {pub.venue} ({pub.year})
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
