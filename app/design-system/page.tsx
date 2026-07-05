import { BookCard } from "@/components/content/BookCard";
import { NewsItem } from "@/components/content/NewsItem";
import { ProjectCard } from "@/components/content/ProjectCard";
import { PublicationEntry } from "@/components/content/PublicationEntry";
import { ThemeIndexItem } from "@/components/content/ThemeIndexItem";
import { CatalogCaption } from "@/components/editorial/CatalogCaption";
import { Epigraph } from "@/components/editorial/Epigraph";
import { FolioMarker } from "@/components/editorial/FolioMarker";
import { Kicker } from "@/components/editorial/Kicker";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Rule } from "@/components/editorial/Rule";
import { Section } from "@/components/editorial/Section";
import { Container } from "@/components/layout/Container";
import { newsItems } from "@/content/news";
import { flagshipProjects } from "@/content/projects";
import { books, featuredPublications } from "@/content/publications";
import { researchThemes } from "@/content/themes";

export const metadata = {
  title: "Design System (Internal)",
  robots: { index: false, follow: false },
};

const swatches = [
  { name: "paper", className: "bg-paper border border-border" },
  { name: "surface", className: "bg-surface border border-border" },
  { name: "ink", className: "bg-ink text-paper" },
  { name: "ink-muted", className: "bg-ink-muted text-paper" },
  { name: "oxblood", className: "bg-oxblood text-paper" },
  { name: "gold", className: "bg-gold text-ink" },
  { name: "border", className: "bg-border" },
];

export default function DesignSystemPage() {
  const sampleProject = flagshipProjects[0];
  const sampleTheme = researchThemes[0];
  const sampleBook = books[0];
  const samplePublication = featuredPublications[0];
  const sampleNews = newsItems[0];

  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker="Internal review"
        title="Design System"
        description="Visual foundation for the Patricia Valladares-Ruiz academic research website. Not linked from navigation."
        folioLabel="DS — 01"
      />

      <Section kicker="Color" title="Palette" number="01">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {swatches.map((swatch) => (
            <div key={swatch.name}>
              <div
                className={`flex h-20 items-end p-3 text-xs font-medium uppercase tracking-wide ${swatch.className}`}
              >
                {swatch.name}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section kicker="Typography" title="Type scale" number="02">
        <div className="space-y-8 max-w-3xl">
          <div>
            <Kicker className="mb-2">Display — Fraunces</Kicker>
            <p className="font-display text-display font-semibold text-ink">
              Archival Knowledge Infrastructures
            </p>
          </div>
          <div>
            <Kicker className="mb-2">Section heading</Kicker>
            <p className="font-display text-section font-semibold text-ink">
              Research Program
            </p>
          </div>
          <div>
            <Kicker className="mb-2">Body — Work Sans</Kicker>
            <p className="text-ink-muted">
              Placeholder body text demonstrating readable line length and
              rhythm for scholarly content. Warm paper background, deep ink
              text, restrained editorial spacing.
            </p>
          </div>
          <div>
            <Kicker className="mb-2">Kicker / label</Kicker>
            <p className="text-kicker">Lines of Inquiry</p>
          </div>
        </div>
      </Section>

      <Section kicker="Interactive" title="Links & buttons" number="03">
        <div className="flex flex-wrap items-center gap-6">
          <a href="#" className="text-link">
            Text link
          </a>
          <a href="#" className="btn btn-primary">
            Primary button
          </a>
          <a href="#" className="btn btn-outline">
            Outline button
          </a>
        </div>
      </Section>

      <Section kicker="Editorial" title="Primitives" number="04">
        <div className="space-y-10 max-w-3xl">
          <div>
            <Kicker className="mb-3">Kicker</Kicker>
            <Rule className="mb-6" />
            <Rule variant="gold" className="mb-6" />
            <FolioMarker label="Research — p. 02" />
          </div>
          <Epigraph
            quote="Placeholder epigraph — archival memory and cultural inscription."
            attribution="Attribution pending"
          />
          <figure>
            <div className="aspect-video max-w-md border border-border bg-surface" />
            <CatalogCaption
              title="Catalogue entry title"
              subtitle="Subtitle or medium pending"
              meta="Placeholder meta"
            />
          </figure>
        </div>
      </Section>

      <Section kicker="Content" title="Components" number="05">
        <div className="space-y-12">
          <div className="grid gap-6 md:grid-cols-2">
            {sampleProject && <ProjectCard project={sampleProject} featured />}
          </div>
          {sampleTheme && (
            <ThemeIndexItem theme={sampleTheme} href="/research" />
          )}
          {samplePublication && (
            <PublicationEntry publication={samplePublication} />
          )}
          {sampleBook && <BookCard book={sampleBook} />}
          {sampleNews && <NewsItem item={sampleNews} />}
        </div>
      </Section>

      <Section variant="ink" kicker="Band" title="Ink section variant" number="06">
        <p className="max-w-2xl text-paper/80">
          One dark ink band per page maximum. Used for narrative emphasis — e.g.
          Digital Scholarship & Research Infrastructure on the homepage (Phase 3).
        </p>
      </Section>
    </Container>
  );
}
