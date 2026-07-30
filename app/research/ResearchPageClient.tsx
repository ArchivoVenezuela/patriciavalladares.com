"use client";

import Link from "next/link";
import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { ResearchTheme } from "@/components/research/ResearchTheme";
import { extractParagraphTexts } from "@/lib/tina/richText";
import { projectSummaryFromTina } from "@/lib/tina/projects";
import type {
  HomeThemesQuery,
  ProjectQuery,
  ResearchOverviewQuery,
} from "@/tina/__generated__/types";

interface TinaQueryProps<T> {
  query: string;
  variables: { relativePath: string };
  data: T;
}

interface ResearchPageClientProps {
  overview: TinaQueryProps<ResearchOverviewQuery>;
  themes: TinaQueryProps<HomeThemesQuery>;
  book: TinaQueryProps<ProjectQuery>;
}

export function ResearchPageClient({
  overview,
  themes,
  book,
}: ResearchPageClientProps) {
  const { data: overviewData } = useTina({
    query: overview.query,
    variables: overview.variables,
    data: overview.data,
  });
  const { data: themesData } = useTina({
    query: themes.query,
    variables: themes.variables,
    data: themes.data,
  });
  const { data: bookData } = useTina({
    query: book.query,
    variables: book.variables,
    data: book.data,
  });

  const overviewDoc = overviewData.researchOverview;
  const themesDoc = themesData.homeThemes;
  const bookDoc = bookData.project;

  const description = extractParagraphTexts(overviewDoc.body)[0];
  const themeList = (themesDoc.themes ?? []).filter(
    (t): t is NonNullable<typeof t> => Boolean(t),
  );
  const bookSummary = projectSummaryFromTina(bookDoc);

  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker={overviewDoc.kicker}
        title={overviewDoc.title}
        description={description}
        folioLabel={overviewDoc.folioLabel ?? "Research — 01"}
        tinaFields={{
          kicker: tinaField(overviewDoc, "kicker"),
          title: tinaField(overviewDoc, "title"),
          folioLabel: tinaField(overviewDoc, "folioLabel"),
        }}
      />

      <Section
        kicker="Program"
        title={overviewDoc.programSectionTitle}
        number="01"
      >
        <div
          className="max-w-3xl space-y-6 leading-relaxed text-ink-muted [&_a]:text-link [&_p]:m-0 [&_p]:leading-relaxed"
          data-tina-field={tinaField(overviewDoc, "body")}
        >
          <TinaMarkdown content={overviewDoc.body} />
        </div>
      </Section>

      <Section
        kicker="Themes"
        title={overviewDoc.themesSectionTitle}
        number="02"
      >
        <div className="space-y-2" data-tina-field={tinaField(themesDoc, "themes")}>
          {themeList.map((theme, index) => (
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

      <Section
        kicker={overviewDoc.monographSectionKicker}
        title={bookDoc.title}
        number="03"
      >
        <p
          className="max-w-3xl text-lg italic text-ink-muted"
          data-tina-field={tinaField(bookDoc, "subtitle")}
        >
          {bookDoc.subtitle}
        </p>
        <p
          className="mt-4 max-w-3xl leading-relaxed text-ink-muted"
          data-tina-field={tinaField(bookDoc, "body")}
        >
          {bookSummary}
        </p>
        <p className="mt-6">
          <Link href={`/projects/${bookDoc.slug}`} className="text-link">
            View project →
          </Link>
        </p>
      </Section>
    </Container>
  );
}
