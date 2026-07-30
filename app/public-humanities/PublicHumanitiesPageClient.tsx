"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { projectSummaryFromTina } from "@/lib/tina/projects";
import type {
  HomeThemesQuery,
  ProjectQuery,
  PublicHumanitiesQuery,
} from "@/tina/__generated__/types";

interface TinaQueryProps<T> {
  query: string;
  variables: { relativePath: string };
  data: T;
}

interface PublicHumanitiesPageClientProps {
  publicHumanities: TinaQueryProps<PublicHumanitiesQuery>;
  themes: TinaQueryProps<HomeThemesQuery>;
  project: TinaQueryProps<ProjectQuery>;
}

export function PublicHumanitiesPageClient({
  publicHumanities,
  themes,
  project,
}: PublicHumanitiesPageClientProps) {
  const { data: phData } = useTina({
    query: publicHumanities.query,
    variables: publicHumanities.variables,
    data: publicHumanities.data,
  });
  const { data: themesData } = useTina({
    query: themes.query,
    variables: themes.variables,
    data: themes.data,
  });
  const { data: projectData } = useTina({
    query: project.query,
    variables: project.variables,
    data: project.data,
  });

  const doc = phData.publicHumanities;
  const themesDoc = themesData.homeThemes;
  const projectDoc = projectData.project;

  const themeList = themesDoc.themes ?? [];
  const introThemeIndex = themeList.findIndex(
    (t) => t?.id === doc.introThemeId,
  );
  const introTheme = introThemeIndex >= 0 ? themeList[introThemeIndex] : null;
  const intro = introTheme?.description;

  const itemSummary = projectSummaryFromTina(projectDoc);

  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker={doc.kicker}
        title={doc.title}
        description={intro ?? undefined}
        folioLabel={doc.folioLabel ?? "Public — 01"}
        tinaFields={{
          kicker: tinaField(doc, "kicker"),
          title: tinaField(doc, "title"),
          folioLabel: tinaField(doc, "folioLabel"),
        }}
      />

      <Section kicker={doc.title} title={doc.title} number="01">
        {intro && (
          <p
            className="max-w-3xl leading-relaxed text-ink-muted"
            data-tina-field={
              introTheme
                ? tinaField(themesDoc, "themes", introThemeIndex)
                : undefined
            }
          >
            {intro}
          </p>
        )}
      </Section>

      <Section kicker="Projects" title={doc.projectsSectionTitle} number="02">
        <ul className="space-y-8">
          <li className="border-b border-border pb-8">
            <h3
              className="font-display text-xl font-semibold text-ink"
              data-tina-field={tinaField(projectDoc, "title")}
            >
              {projectDoc.title}
            </h3>
            <p
              className="mt-3 max-w-2xl leading-relaxed text-ink-muted"
              data-tina-field={tinaField(projectDoc, "body")}
            >
              {itemSummary}
            </p>
          </li>
        </ul>
      </Section>
    </Container>
  );
}
