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

export const metadata = { title: "Publications" };

export default function PublicationsPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker="Publications"
        title="Publications"
        description="Monographs and peer-reviewed scholarship on Latin American and Caribbean cultural production, migration, film, and diaspora studies."
        folioLabel="Publications — 01"
      />

      <Section kicker="Featured" title="Featured Publications" number="01">
        <div className="max-w-3xl space-y-4">
          {featuredPublications.map((pub) => (
            <PublicationEntry key={pub.id} publication={pub} />
          ))}
        </div>
      </Section>

      <Section kicker="Monographs" title="Books" number="02">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </Section>

      <Section kicker="Articles" title="Selected Articles" number="03">
        <div className="max-w-3xl space-y-4">
          {selectedArticles.map((pub) => (
            <PublicationEntry key={pub.id} publication={pub} />
          ))}
        </div>
      </Section>

      <Section kicker="Complete" title="Complete Publications" number="04">
        <PublicationsFilter publications={allPublications} />
      </Section>
    </Container>
  );
}
