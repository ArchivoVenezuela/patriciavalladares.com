import { Container } from "@/components/layout/Container";
import { Epigraph } from "@/components/editorial/Epigraph";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { aboutContent } from "@/content/about";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker="About"
        title={aboutContent.positioningStatement}
        description={aboutContent.professionalIdentity}
        folioLabel="About — 01"
      />

      {aboutContent.epigraph && (
        <Epigraph
          quote={aboutContent.epigraph.quote}
          attribution={aboutContent.epigraph.attribution}
        />
      )}

      <Section kicker="Biography" title="Intellectual biography" number="01">
        <div className="max-w-3xl space-y-6 text-ink-muted leading-relaxed">
          {aboutContent.intellectualBiography.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section kicker="Languages" title="Languages" number="02">
        <dl className="grid gap-6 sm:grid-cols-2 max-w-2xl text-sm">
          <div>
            <dt className="font-medium text-ink">Native</dt>
            <dd className="mt-1 text-ink-muted">{aboutContent.languages.native.join(", ")}</dd>
          </div>
          <div>
            <dt className="font-medium text-ink">Fluent</dt>
            <dd className="mt-1 text-ink-muted">{aboutContent.languages.fluent.join(", ")}</dd>
          </div>
          {aboutContent.languages.intermediate && (
            <div>
              <dt className="font-medium text-ink">Intermediate</dt>
              <dd className="mt-1 text-ink-muted">{aboutContent.languages.intermediate.join(", ")}</dd>
            </div>
          )}
          {aboutContent.languages.reading && (
            <div>
              <dt className="font-medium text-ink">Reading knowledge</dt>
              <dd className="mt-1 text-ink-muted">{aboutContent.languages.reading.join(", ")}</dd>
            </div>
          )}
        </dl>
      </Section>

      <Section kicker="Education" title="Education" number="03">
        <ul className="space-y-4 max-w-2xl">
          {aboutContent.education.map((entry, i) => (
            <li key={i} className="border-b border-border pb-4">
              <p className="font-medium text-ink">{entry.degree}</p>
              <p className="text-sm text-ink-muted">{entry.institution}, {entry.year}</p>
            </li>
          ))}
        </ul>
      </Section>
    </Container>
  );
}
