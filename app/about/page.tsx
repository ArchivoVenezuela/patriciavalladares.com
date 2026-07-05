import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { aboutContent } from "@/content/about";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <PageHeader
        kicker="About"
        title="About"
        description={aboutContent.positioningStatement}
      />
      <Section title="Professional identity">
        <p className="text-ink-muted">{aboutContent.professionalIdentity}</p>
      </Section>
      <Section title="Education">
        <ul className="space-y-4">
          {aboutContent.education.map((entry, i) => (
            <li key={i}>
              <p className="font-medium text-ink">{entry.degree}</p>
              <p className="text-sm text-ink-muted">
                {entry.institution}, {entry.year}
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
