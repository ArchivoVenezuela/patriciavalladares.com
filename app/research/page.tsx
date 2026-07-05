import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { bookProject } from "@/content/projects";
import { researchThemes } from "@/content/themes";

export const metadata = { title: "Research Program" };

export default function ResearchPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker="Research Program"
        title="Research Program"
        description="Research program overview pending."
      />
      <Section kicker="Themes" title="Lines of inquiry">
        <ul className="space-y-6">
          {researchThemes.map((theme) => (
            <li key={theme.id} className="border-b border-border pb-6">
              <span className="font-display text-sm text-gold">{theme.number}</span>
              <h3 className="mt-1 font-display text-xl text-ink">{theme.title}</h3>
              <p className="mt-2 text-ink-muted">{theme.description}</p>
            </li>
          ))}
        </ul>
      </Section>
      {bookProject && (
        <Section kicker="Monograph" title={bookProject.title}>
          <p className="text-ink-muted">{bookProject.summary}</p>
        </Section>
      )}
    </Container>
  );
}
