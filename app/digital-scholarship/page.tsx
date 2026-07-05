import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { EvolutionTimeline } from "@/components/digital-scholarship/EvolutionTimeline";
import { digitalScholarship } from "@/content/digitalScholarship";

export const metadata = {
  title: "Digital Scholarship & Research Infrastructure",
};

export default function DigitalScholarshipPage() {
  const ds = digitalScholarship;

  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker="Digital Scholarship & Research Infrastructure"
        title="Digital Scholarship & Research Infrastructure"
        description={ds.intro}
        folioLabel="DS — 01"
      />

      <Section
        kicker="Trajectory"
        title="From archives to AI"
        number="01"
      >
        <p className="mb-10 max-w-3xl text-ink-muted leading-relaxed">
          This research trajectory extends existing humanities work — archival
          practice, metadata, multilingual collections — toward digital
          infrastructures and, ultimately, critical engagement with AI. It does
          not represent a pivot to computer science or engineering.
        </p>
        <EvolutionTimeline stages={ds.evolution} />
      </Section>

      <Section kicker="Philosophy" title="Philosophy" number="02">
        <p className="max-w-3xl text-ink-muted leading-relaxed">
          {ds.philosophy}
        </p>
      </Section>

      <Section kicker="Infrastructure" title="Infrastructure" number="03">
        <p className="max-w-3xl text-ink-muted leading-relaxed">
          {ds.infrastructure}
        </p>
      </Section>

      <Section kicker="Methods" title="Digital methods" number="04">
        <p className="max-w-3xl text-ink-muted leading-relaxed">
          {ds.digitalMethods}
        </p>
      </Section>

      <Section variant="ink" kicker="Ethics" title="Ethical AI" number="05">
        <p className="max-w-3xl leading-relaxed text-paper/85">
          {ds.ethicalAI}
        </p>
      </Section>

      <Section kicker="Open" title="Open scholarship" number="06">
        <p className="max-w-3xl text-ink-muted leading-relaxed">
          {ds.openScholarship}
        </p>
      </Section>

      <Section kicker="Horizon" title="Future directions" number="07">
        <p className="max-w-3xl text-ink-muted leading-relaxed">
          {ds.futureDirections}
        </p>
      </Section>
    </Container>
  );
}
