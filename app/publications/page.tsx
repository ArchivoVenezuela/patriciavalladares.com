import { Container } from "@/components/layout/Container";
import { BookCard } from "@/components/content/BookCard";
import { PublicationEntry } from "@/components/content/PublicationEntry";
import { PublicationsFilter } from "@/components/content/PublicationsFilter";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import {
  allPublications,
  books,
  featuredPublications,
  selectedArticles,
} from "@/content/publications";
import { draftSectionTitles, TODO } from "@/content/draft";

export const metadata = { title: "Publications" };

export default function PublicationsPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker={draftSectionTitles.publications}
        title={draftSectionTitles.publications}
        description={TODO}
        folioLabel="Publications — 01"
      />

      <Section kicker={draftSectionTitles.publications} title={draftSectionTitles.publications} number="01">
        <div className="max-w-3xl space-y-4">
          {featuredPublications.map((pub) => (
            <PublicationEntry key={pub.id} publication={pub} />
          ))}
        </div>
      </Section>

      <Section kicker="Books" title="Books" number="02">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </Section>

      <Section kicker="Articles" title="Articles" number="03">
        <div className="max-w-3xl space-y-4">
          {selectedArticles.map((pub) => (
            <PublicationEntry key={pub.id} publication={pub} />
          ))}
        </div>
      </Section>

      <Section kicker={draftSectionTitles.publications} title={draftSectionTitles.publications} number="04">
        <PublicationsFilter publications={allPublications} />
      </Section>
    </Container>
  );
}
