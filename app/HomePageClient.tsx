"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import { ArchiveSection } from "@/components/home/ArchiveSection";
import { CorrespondenceFooter } from "@/components/home/CorrespondenceFooter";
import { CriticalAI } from "@/components/home/CriticalAI";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeResearchQuestions } from "@/components/home/HomeResearchQuestions";
import { HomeResearchThemes } from "@/components/home/HomeResearchThemes";
import {
  InstrumentsIndex,
  type InstrumentIndexItem,
} from "@/components/home/InstrumentsIndex";
import { Masthead } from "@/components/home/Masthead";
import {
  PublicationsStrip,
  type HomePublicationItem,
} from "@/components/home/PublicationsStrip";
import {
  projectSummaryFromTina,
  tinaProjectToDetail,
  type TinaProjectNode,
} from "@/lib/tina/projects";
import type {
  ContactQuery,
  HomeHeroQuery,
  HomeProgramQuery,
  HomeProjectsOverviewQuery,
  HomeQuestionsQuery,
  HomeThemesQuery,
  ProjectConnectionQuery,
  ProjectConnectionQueryVariables,
  PublicationsQuery,
} from "@/tina/__generated__/types";

interface TinaQueryProps<T, V = { relativePath: string }> {
  query: string;
  variables: V;
  data: T;
}

interface HomePageClientProps {
  hero: TinaQueryProps<HomeHeroQuery>;
  themes: TinaQueryProps<HomeThemesQuery>;
  questions: TinaQueryProps<HomeQuestionsQuery>;
  publications: TinaQueryProps<PublicationsQuery>;
  connection: TinaQueryProps<
    ProjectConnectionQuery,
    ProjectConnectionQueryVariables
  >;
  contact: TinaQueryProps<ContactQuery>;
  projectsOverview: TinaQueryProps<HomeProjectsOverviewQuery>;
  program: TinaQueryProps<HomeProgramQuery>;
}

/** Manuscript project order — matches prior lib/content getAllProjects() ordering. */
const PROJECT_ORDER = [
  "archivo-venezuela",
  "archivo-studio",
  "current-book-project",
  "graduate-certificate-applied-dh",
  "ai-lab-humanities",
  "fieldscholar",
  "maracas",
  "arepa",
  "avocado",
];

/** Tools excluded from the homepage instruments index. */
const HOMEPAGE_EXCLUDED_SLUGS = ["maracas", "arepa", "avocado", "fieldscholar"];

export function HomePageClient({
  hero,
  themes,
  questions,
  publications,
  connection,
  contact,
  projectsOverview,
  program,
}: HomePageClientProps) {
  const { data: heroData } = useTina({
    query: hero.query,
    variables: hero.variables,
    data: hero.data,
  });
  const { data: themesData } = useTina({
    query: themes.query,
    variables: themes.variables,
    data: themes.data,
  });
  const { data: questionsData } = useTina({
    query: questions.query,
    variables: questions.variables,
    data: questions.data,
  });
  const { data: pubsData } = useTina({
    query: publications.query,
    variables: publications.variables,
    data: publications.data,
  });
  const { data: connectionData } = useTina({
    query: connection.query,
    variables: connection.variables,
    data: connection.data,
  });
  const { data: contactData } = useTina({
    query: contact.query,
    variables: contact.variables,
    data: contact.data,
  });
  const { data: projectsOverviewData } = useTina({
    query: projectsOverview.query,
    variables: projectsOverview.variables,
    data: projectsOverview.data,
  });
  const { data: programData } = useTina({
    query: program.query,
    variables: program.variables,
    data: program.data,
  });

  const heroDoc = heroData.homeHero;
  const themesDoc = themesData.homeThemes;
  const questionsDoc = questionsData.homeQuestions;
  const pubsDoc = pubsData.publications;
  const contactDoc = contactData.contact;
  const projectsOverviewDoc = projectsOverviewData.homeProjectsOverview;
  const programDoc = programData.homeProgram;

  const themeList = (themesDoc.themes ?? []).filter(
    (t): t is NonNullable<typeof t> => Boolean(t),
  );
  const questionList = (questionsDoc.questions ?? []).filter(
    (q): q is string => Boolean(q),
  );

  const nodes = (connectionData.projectConnection.edges ?? [])
    .map((e) => e?.node)
    .filter((n): n is NonNullable<typeof n> => Boolean(n));

  const orderedNodes: TinaProjectNode[] = [
    ...PROJECT_ORDER.map((slug) => nodes.find((n) => n.slug === slug)).filter(
      (n): n is NonNullable<typeof n> => Boolean(n),
    ),
    ...nodes.filter((n) => !PROJECT_ORDER.includes(n.slug)),
  ];

  const instrumentNodes = orderedNodes.filter(
    (n) => !HOMEPAGE_EXCLUDED_SLUGS.includes(n.slug),
  );

  const instrumentItems: InstrumentIndexItem[] = instrumentNodes.map(
    (node, index) => ({
      number: String(index + 1).padStart(2, "0"),
      title: node.title,
      subtitle: node.subtitle,
      description: projectSummaryFromTina(node),
      featured: node.homepageFeatured ?? false,
      slug: node.slug,
      italic: node.homepageItalic ?? false,
    }),
  );

  const archivoNode = nodes.find((n) => n.slug === "archivo-venezuela");
  const archiveProject = archivoNode ? tinaProjectToDetail(archivoNode) : null;

  const criticalAiTheme = themeList.find((t) => t.id === "critical-ai");
  const criticalAiFields = themesDoc.criticalAi;

  const books = (pubsDoc.books ?? []).filter(
    (b): b is NonNullable<typeof b> => Boolean(b),
  );
  const articles = (pubsDoc.articles ?? []).filter(
    (a): a is NonNullable<typeof a> => Boolean(a),
  );

  const homePublications: HomePublicationItem[] = [
    ...books.slice(0, 2).map((b) => ({
      year: b.year,
      title: b.subtitle ? `${b.title}: ${b.subtitle}` : b.title,
      type: "Book",
      featured: b.featured ?? false,
    })),
    ...articles
      .filter((a) => a.featured && a.type !== "book")
      .slice(0, 2)
      .map((pub) => ({
        year: pub.year,
        title: pub.title,
        type: pub.type === "forthcoming" ? "Forthcoming" : "Article",
        featured: pub.featured ?? false,
      })),
  ];

  return (
    <div className="min-h-screen bg-paper">
      <HomeHeader />
      <Masthead
        label={heroDoc.label}
        name={heroDoc.name}
        titleLine={heroDoc.titleLine}
        institution={heroDoc.institution}
        figureLabel={heroDoc.figureLabel}
        body={heroDoc.body}
        tinaFields={{
          label: tinaField(heroDoc, "label"),
          name: tinaField(heroDoc, "name"),
          titleLine: tinaField(heroDoc, "titleLine"),
          institution: tinaField(heroDoc, "institution"),
          figureLabel: tinaField(heroDoc, "figureLabel"),
          body: tinaField(heroDoc, "body"),
        }}
      />
      <InstrumentsIndex
        heading={projectsOverviewDoc.title}
        items={instrumentItems}
        tinaFields={{
          heading: tinaField(projectsOverviewDoc, "title"),
        }}
      />
      <HomeResearchThemes
        kicker={themesDoc.kicker}
        title={themesDoc.title}
        themes={themeList}
        tinaFields={{
          kicker: tinaField(themesDoc, "kicker"),
          title: tinaField(themesDoc, "title"),
          themes: tinaField(themesDoc, "themes"),
        }}
      />
      <HomeResearchQuestions
        kicker={questionsDoc.kicker}
        title={questionsDoc.title}
        questions={questionList}
        tinaFields={{
          kicker: tinaField(questionsDoc, "kicker"),
          title: tinaField(questionsDoc, "title"),
          questions: tinaField(questionsDoc, "questions"),
        }}
      />
      {archiveProject && archivoNode && (
        <ArchiveSection
          kicker={projectsOverviewDoc.title}
          title={archiveProject.title}
          lede={archiveProject.summary}
          specimensLabel={archiveProject.homepage?.specimensLabel ?? ""}
          specimenCardLabel={archiveProject.homepage?.specimenCardLabel ?? ""}
          stats={archiveProject.homepage?.stats ?? []}
          specimens={archiveProject.homepage?.specimens ?? []}
          tinaFields={{
            kicker: tinaField(projectsOverviewDoc, "title"),
            title: tinaField(archivoNode, "title"),
            lede: tinaField(archivoNode, "body"),
          }}
        />
      )}
      {criticalAiTheme && criticalAiFields && (
        <CriticalAI
          section={{
            title: criticalAiTheme.title,
            description: criticalAiTheme.description,
            machineReading: criticalAiFields.machineReading,
            communityReading: criticalAiFields.communityReading,
            captionMachine: criticalAiFields.captionMachine,
            captionCommunity: criticalAiFields.captionCommunity,
          }}
          demo={{
            objectId: criticalAiFields.objectId,
            objectLabel: criticalAiFields.objectLabel,
            machineTags: (criticalAiFields.machineTags ?? []).filter(
              (t): t is string => Boolean(t),
            ),
            machineConfidence: criticalAiFields.machineConfidence,
            machineNote: criticalAiFields.machineNote,
            communityLead: criticalAiFields.communityLead,
            communityNote: criticalAiFields.communityNote,
          }}
        />
      )}
      <PublicationsStrip
        title={pubsDoc.kicker}
        publications={homePublications}
      />
      <CorrespondenceFooter
        contactTitle={contactDoc.title}
        programTitle={programDoc.title}
      />
    </div>
  );
}
