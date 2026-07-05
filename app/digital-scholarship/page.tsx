import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";

export const metadata = {
  title: "Digital Scholarship & Research Infrastructure",
};

export default function DigitalScholarshipPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <PageHeader
        kicker="Digital Scholarship & Research Infrastructure"
        title="Digital Scholarship & Research Infrastructure"
        description="Narrative on archives, metadata, multilingual infrastructures, and AI as extension of humanities research — pending."
      />
      <Section title="Methods & infrastructure">
        <p className="text-ink-muted">
          Placeholder: how digital scholarship connects archival work, metadata
          practice, and knowledge infrastructures. AI framed as humanities
          infrastructure, not engineering expertise.
        </p>
      </Section>
    </div>
  );
}
