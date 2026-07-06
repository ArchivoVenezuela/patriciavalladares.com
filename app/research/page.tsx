import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { ResearchTheme } from "@/components/research/ResearchTheme";
import {
  draftProjects,
  draftResearchProgram,
  draftSectionTitles,
  draftThemes,
} from "@/content/draft";

export const metadata = { title: "Research Program" };

const bookDraft = draftProjects.find((p) => p.slug === "current-book-project");

export default function ResearchPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker={draftSectionTitles.researchProgram}
        title={draftSectionTitles.researchProgram}
        description={draftResearchProgram.paragraphs[0]}
        folioLabel="Research — 01"
      />

      <Section kicker="Program" title={draftSectionTitles.researchProgram} number="01">
        <div className="max-w-3xl space-y-6 leading-relaxed text-ink-muted">
          {draftResearchProgram.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section kicker="Themes" title={draftSectionTitles.researchThemes} number="02">
        <div className="space-y-2">
          {draftThemes.map((theme, index) => (
            <ResearchTheme
              key={theme.id}
              theme={{
                id: theme.id,
                number: String(index + 1).padStart(2, "0"),
                title: theme.title,
                description: theme.description,
              }}
            />
          ))}
        </div>
      </Section>

      {bookDraft && (
        <Section kicker="Monograph" title={bookDraft.title} number="03">
          <p className="max-w-3xl text-lg italic text-ink-muted">
            {bookDraft.subtitle}
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink-muted">
            {bookDraft.description}
          </p>
          <p className="mt-6">
            <Link href={`/projects/${bookDraft.slug}`} className="text-link">
              View project →
            </Link>
          </p>
        </Section>
      )}
    </Container>
  );
}
