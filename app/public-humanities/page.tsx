import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { publicHumanitiesContent } from "@/content/publicHumanities";
import { draftSectionTitles } from "@/content/draft";

export const metadata = { title: "Public Humanities" };

export default function PublicHumanitiesPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker={draftSectionTitles.researchThemes}
        title="Public Humanities"
        description={publicHumanitiesContent.intro}
        folioLabel="Public — 01"
      />

      <Section kicker="Public Humanities" title="Public Humanities" number="01">
        <p className="max-w-3xl leading-relaxed text-ink-muted">
          {publicHumanitiesContent.intro}
        </p>
      </Section>

      <Section kicker="Projects" title={draftSectionTitles.researchProjects} number="02">
        <ul className="space-y-8">
          {publicHumanitiesContent.items.map((item) => (
            <li key={item.id} className="border-b border-border pb-8">
              <h3 className="font-display text-xl font-semibold text-ink">
                {item.url ? (
                  <a href={item.url} className="text-link" target="_blank" rel="noopener noreferrer">
                    {item.title}
                    <span className="sr-only"> (opens in new tab)</span>
                  </a>
                ) : (
                  item.title
                )}
              </h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </Container>
  );
}
