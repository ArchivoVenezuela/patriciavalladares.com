import type { ProjectDetail, ProjectStatus, ProjectTier } from "@/lib/types";
import { extractParagraphTexts } from "@/lib/tina/richText";
import { TODO } from "@/lib/content/constants";

/** Minimal Tina project node shape used by list + detail pages. */
export type TinaProjectNode = {
  __typename?: string;
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tier: string;
  status: string;
  featured?: boolean | null;
  homepageFeatured?: boolean | null;
  homepageItalic?: boolean | null;
  summary?: string | null;
  body?: unknown;
  links?: Array<{
    label: string;
    url: string;
    external?: boolean | null;
  } | null> | null;
  homepage?: {
    specimensLabel?: string | null;
    specimenCardLabel?: string | null;
    stats?: Array<{
      value: string;
      label: string;
      accent: string;
    } | null> | null;
    specimens?: Array<{
      year: string;
      id: string;
      title: string;
      note: string;
      meta?: Array<{ label: string; value: string } | null> | null;
    } | null> | null;
  } | null;
  _sys: { relativePath: string; filename: string };
};

export function projectSummaryFromTina(node: TinaProjectNode): string {
  if (node.summary?.trim()) return node.summary.trim();
  const paragraphs = extractParagraphTexts(node.body);
  return paragraphs[0] ?? TODO;
}

export function tinaProjectToDetail(node: TinaProjectNode): ProjectDetail {
  const summary = projectSummaryFromTina(node);
  return {
    slug: node.slug,
    title: node.title,
    subtitle: node.subtitle,
    tier: node.tier as ProjectTier,
    category: node.subtitle,
    summary,
    status: node.status as ProjectStatus,
    role: TODO,
    collaborators: [],
    tags: [],
    featured: node.featured ?? undefined,
    problem: TODO,
    whyItMatters: TODO,
    researchQuestions: [],
    methodology: TODO,
    technologies: [],
    outcomes: [],
    relatedPublicationIds: [],
    relatedCourseIds: [],
    relatedPublicHumanitiesIds: [],
    links: (node.links ?? [])
      .filter((l): l is NonNullable<typeof l> => Boolean(l))
      .map((l) => ({
        label: l.label,
        url: l.url,
        external: l.external ?? false,
      })),
    body: typeof node.body === "string" ? node.body : summary,
    paragraphs: extractParagraphTexts(node.body),
    homepage: node.homepage
      ? {
          specimensLabel: node.homepage.specimensLabel ?? undefined,
          specimenCardLabel: node.homepage.specimenCardLabel ?? undefined,
          stats: (node.homepage.stats ?? [])
            .filter((s): s is NonNullable<typeof s> => Boolean(s))
            .map((s) => ({
              value: s.value,
              label: s.label,
              accent: (s.accent === "oxblood" ? "oxblood" : "forest") as
                | "oxblood"
                | "forest",
            })),
          specimens: (node.homepage.specimens ?? [])
            .filter((s): s is NonNullable<typeof s> => Boolean(s))
            .map((s) => ({
              year: s.year,
              id: s.id,
              title: s.title,
              note: s.note,
              meta: (s.meta ?? [])
                .filter((m): m is NonNullable<typeof m> => Boolean(m))
                .map((m) => ({ label: m.label, value: m.value })),
            })),
        }
      : undefined,
    homepageFeatured: node.homepageFeatured ?? undefined,
    homepageItalic: node.homepageItalic ?? undefined,
  };
}

export function findProjectRelativePath(
  edges: Array<{ node?: TinaProjectNode | null } | null> | null | undefined,
  slug: string,
): string | undefined {
  const node = edges
    ?.map((e) => e?.node)
    .find((n) => n?.slug === slug);
  return node?._sys.relativePath;
}
