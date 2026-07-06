import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { draftMethods, draftSectionTitles } from "@/content/draft";

export const metadata = {
  title: "Digital Scholarship & Research Infrastructure",
};

export default function DigitalScholarshipPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker={draftSectionTitles.methods}
        title={draftSectionTitles.methods}
        description={draftMethods.intro}
        folioLabel="Methods — 01"
      />

      <Section kicker="Methods" title={draftMethods.title} number="01">
        <p className="max-w-3xl leading-relaxed text-ink-muted">
          {draftMethods.intro}
        </p>
        <ul className="mt-8 max-w-3xl list-disc space-y-2 pl-5 text-ink-muted">
          {draftMethods.methods.map((method) => (
            <li key={method}>{method}</li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl leading-relaxed text-ink-muted">
          {draftMethods.closing}
        </p>
      </Section>
    </Container>
  );
}
