import Link from "next/link";
import { homeBooks, homeArticles } from "@/content/publications";
import { BookCard } from "@/components/content/BookCard";
import { PublicationEntry } from "@/components/content/PublicationEntry";
import { Kicker } from "@/components/editorial/Kicker";
import { Rule } from "@/components/editorial/Rule";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export function SelectedPublicationsSection() {
  return (
    <section className="py-section md:py-section-lg" aria-labelledby="selected-publications">
      <Container>
        <Reveal>
          <Kicker className="mb-2">Scholarship</Kicker>
          <h2
            id="selected-publications"
            className="font-display text-section font-medium text-ink"
          >
            Selected Publications
          </h2>
          <Rule className="mt-5 max-w-xs" />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <Reveal>
            <h3 className="sr-only">Monographs</h3>
            <div className="flex flex-wrap gap-8">
              {homeBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h3 className="mb-6 font-mono text-[10px] uppercase tracking-widest text-ink-faint">
              Articles
            </h3>
            <div className="space-y-5">
              {homeArticles.map((pub) => (
                <PublicationEntry key={pub.id} publication={pub} />
              ))}
            </div>
          </Reveal>
        </div>

        <p className="mt-10">
          <Link href="/publications" className="text-link text-sm font-medium">
            All publications →
          </Link>
        </p>
      </Container>
    </section>
  );
}
