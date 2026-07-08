import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MdxBody } from "@/components/mdx/MdxContent";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { ResearchTheme } from "@/components/research/ResearchTheme";
import {
  getProjectBySlug,
  getResearchOverview,
  getResearchThemesContent,
  sectionTitles,
} from "@/lib/content";

export const metadata = { title: "Research Program" };

const overview = getResearchOverview();
const themesContent = getResearchThemesContent();
const bookDraft = getProjectBySlug("current-book-project");

export default async function ResearchPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker={overview.frontmatter.kicker ?? sectionTitles.researchProgram}
        title={overview.frontmatter.title}
        description={overview.paragraphs[0]}
        folioLabel={overview.frontmatter.folioLabel ?? "Research — 01"}
      />

      <Section kicker="Program" title={sectionTitles.researchProgram} number="01">
        <MdxBody
          body={overview.body}
          className="max-w-3xl leading-relaxed text-ink-muted"
        />
      </Section>

      <Section kicker="Themes" title={sectionTitles.researchThemes} number="02">
        <div className="space-y-2">
          {themesContent.themes.map((theme, index) => (
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
            {bookDraft.summary}
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
