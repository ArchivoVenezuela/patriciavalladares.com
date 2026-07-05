import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { publicHumanitiesContent } from "@/content/publicHumanities";

export const metadata = { title: "Public Humanities" };

export default function PublicHumanitiesPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker="Public Humanities"
        title="Public Humanities"
        description={publicHumanitiesContent.intro}
        folioLabel="Public — 01"
      />

      <Section kicker="Practice" title="Public scholarship" number="01">
        <p className="max-w-3xl leading-relaxed text-ink-muted">
          {publicHumanitiesContent.statement}
        </p>
      </Section>

      <Section kicker="Initiatives" title="Initiatives" number="02">
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
              {item.year && (
                <p className="mt-1 text-xs tracking-wide text-ink-faint uppercase">{item.year}</p>
              )}
              <p className="mt-3 max-w-2xl text-ink-muted leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ul>
      </Section>
    </Container>
  );
}
