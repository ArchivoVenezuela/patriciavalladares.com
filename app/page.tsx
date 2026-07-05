import Link from "next/link";
import { BookCard } from "@/components/content/BookCard";
import { NewsItem } from "@/components/content/NewsItem";
import { ProjectCard } from "@/components/content/ProjectCard";
import { PublicationEntry } from "@/components/content/PublicationEntry";
import { ThemeIndexItem } from "@/components/content/ThemeIndexItem";
import { Kicker } from "@/components/editorial/Kicker";
import { Rule } from "@/components/editorial/Rule";
import { SectionLink } from "@/components/editorial/SectionLink";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/editorial/Section";
import { ResearchQuestion } from "@/components/research/ResearchQuestion";
import { homeContent } from "@/content/home";
import { newsItems } from "@/content/news";
import { featuredHomeProjects } from "@/content/projects";
import { books, featuredPublications } from "@/content/publications";
import { siteConfig, cvNavItem } from "@/content/site";
import { researchQuestions, researchThemes } from "@/content/themes";

export default function HomePage() {
  const homeNews = newsItems.slice(0, 3);
  const homePubs = featuredPublications.slice(0, 4);
  const homeThemes = researchThemes.slice(0, 3);
  const featuredBook = books[0];

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-paper">
        <Container className="py-16 md:py-24">
          <Kicker>{homeContent.hero.kicker}</Kicker>
          <h1 className="mt-4 max-w-4xl font-display text-display font-semibold text-ink">
            {homeContent.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {homeContent.hero.statement}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/research" className="btn btn-primary">
              Research Program
            </Link>
            <a href={cvNavItem.href} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </div>
        </Container>
      </section>

      <Container>
        <Section kicker="Inquiry" title="Current Research Questions" number="01">
          <div className="space-y-6 max-w-3xl">
            {researchQuestions.map((q, i) => (
              <ResearchQuestion key={q.id} item={q} index={i + 1} />
            ))}
          </div>
          <SectionLink href="/research">Explore the Research Program</SectionLink>
        </Section>

        <Section kicker="Themes" title="Lines of Inquiry" number="02">
          <div className="space-y-2">
            {homeThemes.map((theme) => (
              <ThemeIndexItem key={theme.id} theme={theme} href="/research" />
            ))}
          </div>
          <SectionLink href="/research">All research themes</SectionLink>
        </Section>

        <Section kicker="Projects" title="Featured Projects" number="03">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredHomeProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <SectionLink href="/projects">View all projects</SectionLink>
        </Section>
      </Container>

      {/* Digital Scholarship band */}
      <Section variant="ink" kicker="Methods" title={homeContent.digitalScholarshipBand.title} className="px-6">
        <Container narrow>
          <p className="max-w-2xl leading-relaxed text-paper/85">
            {homeContent.digitalScholarshipBand.summary}
          </p>
          <SectionLink href="/digital-scholarship" className="[&_a]:text-paper [&_a]:decoration-paper/40">
            Digital Scholarship & Research Infrastructure
          </SectionLink>
        </Container>
      </Section>

      <Container>
        <Section kicker="Publications" title="Selected Publications" number="04">
          <div className="grid gap-10 lg:grid-cols-[min(240px,30%)_1fr]">
            {featuredBook && <BookCard book={featuredBook} />}
            <div className="space-y-4">
              {homePubs
                .filter((p) => p.type !== "book")
                .map((pub) => (
                  <PublicationEntry key={pub.id} publication={pub} />
                ))}
            </div>
          </div>
          <SectionLink href="/publications">Complete publications</SectionLink>
        </Section>

        <Section kicker="Pedagogy" title="Teaching & Mentorship" number="05">
          <p className="max-w-2xl text-ink-muted leading-relaxed">
            {homeContent.teachingTeaser}
          </p>
          <SectionLink href="/teaching">Teaching and courses</SectionLink>
        </Section>

        <Section kicker="Public" title="Public Humanities" number="06">
          <p className="max-w-2xl text-ink-muted leading-relaxed">
            {homeContent.publicHumanitiesTeaser}
          </p>
          <SectionLink href="/public-humanities">Public humanities work</SectionLink>
        </Section>

        <Section kicker="News" title="Recent" number="07">
          <div>
            {homeNews.map((item) => (
              <NewsItem key={item.id} item={item} />
            ))}
          </div>
        </Section>

        <section className="border-t border-border py-12 md:py-16">
          <Kicker className="mb-3">Contact</Kicker>
          <h2 className="font-display text-2xl font-semibold text-ink">Get in touch</h2>
          <p className="mt-4 text-ink-muted">
            {siteConfig.titleLine}, {siteConfig.affiliation}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href={`mailto:${siteConfig.email}`} className="text-link">
              {siteConfig.email}
            </a>
            <Link href="/contact" className="text-link">
              Contact page
            </Link>
          </div>
          <Rule className="mt-8 max-w-xs" variant="gold" />
        </section>
      </Container>
    </>
  );
}
