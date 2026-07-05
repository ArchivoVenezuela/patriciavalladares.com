import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { aboutContent } from "@/content/about";
import { homeContent } from "@/content/home";
import { siteConfig, cvNavItem } from "@/content/site";
import { CatalogCaption } from "@/components/editorial/CatalogCaption";
import { Epigraph } from "@/components/editorial/Epigraph";
import { Kicker } from "@/components/editorial/Kicker";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export function HomeHero() {
  const { hero } = homeContent;

  return (
    <section className="border-b border-border bg-paper-light py-section md:py-section-lg">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <Kicker className="mb-6">
              Cultural memory · Archives · Digital Humanities
            </Kicker>
            <h1 className="font-display text-display font-medium text-ink">
              {siteConfig.name}
            </h1>
            <p className="mt-6 max-w-xl font-display text-subsection italic text-oxblood">
              {hero.headline}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-body">
              {hero.statement}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 border border-oxblood bg-oxblood px-5 py-2.5 text-sm font-medium text-paper no-underline transition-colors hover:bg-oxblood-hover"
              >
                Explore Research Program
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a
                href={cvNavItem.href}
                className="inline-flex items-center gap-2 border border-border-strong px-5 py-2.5 text-sm font-medium text-ink no-underline transition-colors hover:border-oxblood hover:text-oxblood"
              >
                Download CV
                <Download size={16} aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal>
            <figure className="mx-auto max-w-sm">
              <div
                className="flex aspect-[4/5] items-center justify-center border border-border-strong bg-surface"
                role="img"
                aria-label="Portrait placeholder"
              >
                <span className="text-xs tracking-wide text-ink-faint uppercase">
                  Portrait pending
                </span>
              </div>
              <CatalogCaption
                title={siteConfig.name}
                subtitle={siteConfig.titleLine}
                meta={siteConfig.affiliation}
              />
              {aboutContent.epigraph && (
                <Epigraph
                  quote={aboutContent.epigraph.quote}
                  attribution={aboutContent.epigraph.attribution}
                  className="mt-6 border-t border-border pt-6"
                />
              )}
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
