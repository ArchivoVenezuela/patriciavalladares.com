import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { PullQuote } from "@/components/editorial/PullQuote";
import { Section } from "@/components/editorial/Section";
import { ResearchQuestion } from "@/components/research/ResearchQuestion";
import { ResearchTheme } from "@/components/research/ResearchTheme";
import { researchProgram } from "@/content/research";
import { researchQuestions, researchThemes } from "@/content/themes";

export const metadata = { title: "Research Program" };

export default function ResearchPage() {
  const { bookProject } = researchProgram;

  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker="Research Program"
        title="Research Program"
        description={researchProgram.positioningStatement}
        folioLabel="Research — 01"
      />

      <Section kicker="Vision" title="Research vision" number="01">
        <p className="max-w-3xl leading-relaxed text-ink-muted">
          {researchProgram.researchVision}
        </p>
        {researchProgram.pullQuotes[0] && (
          <PullQuote quote={researchProgram.pullQuotes[0]} />
        )}
      </Section>

      <Section kicker="Themes" title="Research themes" number="02">
        <div className="space-y-2">
          {researchThemes.map((theme) => (
            <ResearchTheme key={theme.id} theme={theme} />
          ))}
        </div>
      </Section>

      <Section kicker="Inquiry" title="Current research questions" number="03">
        <div className="space-y-8 max-w-3xl">
          {researchQuestions.map((item, index) => (
            <ResearchQuestion key={item.id} item={item} index={index + 1} />
          ))}
        </div>
      </Section>

      <Section kicker="Monograph" title={bookProject.title} number="04">
        <p className="max-w-3xl text-lg italic text-ink-muted">
          {bookProject.subtitle}
        </p>
        <p className="mt-4 max-w-3xl leading-relaxed text-ink-muted">
          {bookProject.summary}
        </p>
        {researchProgram.pullQuotes[1] && (
          <PullQuote quote={researchProgram.pullQuotes[1]} />
        )}
        <p className="mt-6">
          <Link href={`/projects/${bookProject.slug}`} className="text-link">
            View book project →
          </Link>
        </p>
      </Section>

      <Section kicker="Horizon" title="Future directions" number="05">
        <p className="max-w-3xl leading-relaxed text-ink-muted">
          {researchProgram.futureDirections}
        </p>
      </Section>
    </Container>
  );
}
