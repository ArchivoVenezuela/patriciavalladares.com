"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { ProjectCard } from "@/components/content/ProjectCard";
import { extractParagraphTexts } from "@/lib/tina/richText";
import { tinaProjectToDetail } from "@/lib/tina/projects";
import type {
  HomeProjectsOverviewQuery,
  ProjectConnectionQuery,
  ProjectConnectionQueryVariables,
} from "@/tina/__generated__/types";

interface ProjectsPageClientProps {
  overview: {
    query: string;
    variables: { relativePath: string };
    data: HomeProjectsOverviewQuery;
  };
  connection: {
    query: string;
    variables: ProjectConnectionQueryVariables;
    data: ProjectConnectionQuery;
  };
}

const FLAGSHIP_SLUGS = [
  "archivo-venezuela",
  "archivo-studio",
  "graduate-certificate-applied-dh",
  "ai-lab-humanities",
];

const INFRASTRUCTURE_SLUGS = ["fieldscholar", "maracas", "arepa", "avocado"];

export function ProjectsPageClient({
  overview,
  connection,
}: ProjectsPageClientProps) {
  const { data: overviewData } = useTina({
    query: overview.query,
    variables: overview.variables,
    data: overview.data,
  });
  const { data: connectionData } = useTina({
    query: connection.query,
    variables: connection.variables,
    data: connection.data,
  });

  const doc = overviewData.homeProjectsOverview;
  const description = extractParagraphTexts(doc.body)[0];

  const nodes = (connectionData.projectConnection.edges ?? [])
    .map((e) => e?.node)
    .filter((n): n is NonNullable<typeof n> => Boolean(n));

  const bySlug = (slug: string) => nodes.find((n) => n.slug === slug);

  const flagshipProjects = FLAGSHIP_SLUGS.map(bySlug)
    .filter((n): n is NonNullable<typeof n> => Boolean(n))
    .map(tinaProjectToDetail);

  const infrastructureProjects = INFRASTRUCTURE_SLUGS.map(bySlug)
    .filter((n): n is NonNullable<typeof n> => Boolean(n))
    .map(tinaProjectToDetail);

  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker={doc.kicker}
        title={doc.title}
        description={description}
        folioLabel={doc.folioLabel ?? "Projects — 01"}
        tinaFields={{
          kicker: tinaField(doc, "kicker"),
          title: tinaField(doc, "title"),
          folioLabel: tinaField(doc, "folioLabel"),
        }}
      />

      <Section kicker={doc.kicker} title={doc.title} number="01">
        <div className="grid gap-6 md:grid-cols-2">
          {flagshipProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section
        kicker="Tools"
        title={doc.toolsSectionTitle}
        number="02"
      >
        <p
          className="mb-8 max-w-2xl text-sm text-ink-muted"
          data-tina-field={tinaField(doc, "toolsIntro")}
        >
          {doc.toolsIntro}
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {infrastructureProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </Container>
  );
}
