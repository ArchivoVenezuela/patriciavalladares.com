import type { Metadata } from "next";
import { HomePageClient } from "./HomePageClient";
import { client } from "@/tina/__generated__/client";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = createPageMetadata({
  description: siteConfig.description,
  path: "/",
});

export default async function HomePage() {
  const [
    heroResult,
    themesResult,
    questionsResult,
    publicationsResult,
    connectionResult,
    contactResult,
    projectsOverviewResult,
    programResult,
  ] = await Promise.all([
    client.queries.homeHero({ relativePath: "hero.mdx" }),
    client.queries.homeThemes({ relativePath: "research-themes.mdx" }),
    client.queries.homeQuestions({ relativePath: "research-questions.mdx" }),
    client.queries.publications({ relativePath: "overview.mdx" }),
    client.queries.projectConnection(),
    client.queries.contact({ relativePath: "contact.mdx" }),
    client.queries.homeProjectsOverview({
      relativePath: "projects-overview.mdx",
    }),
    client.queries.homeProgram({ relativePath: "research-program.mdx" }),
  ]);

  return (
    <HomePageClient
      hero={{
        query: heroResult.query,
        variables: heroResult.variables,
        data: heroResult.data,
      }}
      themes={{
        query: themesResult.query,
        variables: themesResult.variables,
        data: themesResult.data,
      }}
      questions={{
        query: questionsResult.query,
        variables: questionsResult.variables,
        data: questionsResult.data,
      }}
      publications={{
        query: publicationsResult.query,
        variables: publicationsResult.variables,
        data: publicationsResult.data,
      }}
      connection={{
        query: connectionResult.query,
        variables: connectionResult.variables,
        data: connectionResult.data,
      }}
      contact={{
        query: contactResult.query,
        variables: contactResult.variables,
        data: contactResult.data,
      }}
      projectsOverview={{
        query: projectsOverviewResult.query,
        variables: projectsOverviewResult.variables,
        data: projectsOverviewResult.data,
      }}
      program={{
        query: programResult.query,
        variables: programResult.variables,
        data: programResult.data,
      }}
    />
  );
}
