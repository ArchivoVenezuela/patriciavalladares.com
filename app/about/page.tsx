import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { aboutContent } from "@/content/about";
import { draftSectionTitles, TODO } from "@/content/draft";

export const metadata = { title: "Biography" };

export default function AboutPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker={draftSectionTitles.biography}
        title={draftSectionTitles.biography}
        description={aboutContent.professionalIdentity}
        folioLabel="Biography — 01"
      />

      <Section kicker={draftSectionTitles.biography} title={draftSectionTitles.biography} number="01">
        <div className="max-w-3xl space-y-6 leading-relaxed text-ink-muted">
          {aboutContent.intellectualBiography.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section kicker="Languages" title="Languages" number="02">
        <p className="max-w-3xl text-sm text-ink-muted">{TODO}</p>
      </Section>

      <Section kicker="Education" title="Education" number="03">
        <p className="max-w-3xl text-sm text-ink-muted">{TODO}</p>
      </Section>
    </Container>
  );
}
