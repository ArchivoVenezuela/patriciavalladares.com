import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <PageHeader
        kicker="Home"
        title="Patricia Valladares-Ruiz"
        description="Placeholder positioning statement — interdisciplinary humanities scholar building multilingual knowledge infrastructures for archives, Digital Humanities, cultural memory, and public humanities."
      />
      <Section kicker="Phase 1" title="Homepage content pending">
        <p className="text-ink-muted">
          Full homepage sections (research themes, current research questions,
          featured projects, publications, news) will be built in Phase 2.
        </p>
      </Section>
    </div>
  );
}
