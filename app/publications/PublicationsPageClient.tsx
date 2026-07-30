"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import { Container } from "@/components/layout/Container";
import { BookCard } from "@/components/content/BookCard";
import { PublicationEntry } from "@/components/content/PublicationEntry";
import { PublicationsFilter } from "@/components/content/PublicationsFilter";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import type { Book, Publication } from "@/lib/types";
import type { PublicationsQuery } from "@/tina/__generated__/types";

interface PublicationsPageClientProps {
  query: string;
  variables: { relativePath: string };
  data: PublicationsQuery;
}

type TinaBook = NonNullable<
  NonNullable<PublicationsQuery["publications"]["books"]>[number]
>;
type TinaArticle = NonNullable<
  NonNullable<PublicationsQuery["publications"]["articles"]>[number]
>;

function toPublicationType(
  type: string | null | undefined,
  fallback: Publication["type"],
): Publication["type"] {
  if (type === "book" || type === "article" || type === "chapter" || type === "forthcoming") {
    return type;
  }
  return fallback;
}

function bookToBook(b: TinaBook): Book {
  return {
    id: b.id,
    title: b.title,
    subtitle: b.subtitle ?? undefined,
    venue: b.venue ?? b.publisher ?? "—",
    publisher: b.publisher ?? "—",
    year: b.year,
    type: "book",
    featured: b.featured ?? undefined,
    description: b.description ?? undefined,
    coverImage: b.coverImage ?? undefined,
  };
}

function articleToPublication(a: TinaArticle): Publication {
  return {
    id: a.id,
    title: a.title,
    venue: a.venue,
    year: a.year,
    type: toPublicationType(a.type, "article"),
    topic: a.topic ?? undefined,
    pages: a.pages ?? undefined,
    volume: a.volume ?? undefined,
    featured: a.featured ?? undefined,
  };
}

export function PublicationsPageClient(props: PublicationsPageClientProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const doc = data.publications;

  const books: Book[] = (doc.books ?? [])
    .filter((b): b is TinaBook => Boolean(b))
    .map(bookToBook);
  const articles: Publication[] = (doc.articles ?? [])
    .filter((a): a is TinaArticle => Boolean(a))
    .map(articleToPublication);

  const featuredPublications: Publication[] = [
    ...books.filter((b) => b.featured),
    ...articles.filter((a) => a.featured),
  ];

  const selectedArticles = articles.filter(
    (a) => a.featured || a.year === "2023" || a.year === "2022",
  );

  const allPublications: Publication[] = [...books, ...articles];

  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker={doc.kicker}
        title={doc.title}
        description={doc.intro ?? undefined}
        folioLabel={doc.folioLabel ?? "Publications — 01"}
        tinaFields={{
          kicker: tinaField(doc, "kicker"),
          title: tinaField(doc, "title"),
          description: tinaField(doc, "intro"),
          folioLabel: tinaField(doc, "folioLabel"),
        }}
      />

      <Section kicker={doc.kicker} title={doc.kicker} number="01">
        <div className="max-w-3xl space-y-4">
          {featuredPublications.map((pub) => (
            <PublicationEntry key={pub.id} publication={pub} />
          ))}
        </div>
      </Section>

      <Section
        kicker={doc.booksSectionTitle}
        title={doc.booksSectionTitle}
        number="02"
      >
        <div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          data-tina-field={tinaField(doc, "books")}
        >
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </Section>

      <Section
        kicker={doc.articlesSectionTitle}
        title={doc.articlesSectionTitle}
        number="03"
      >
        <div
          className="max-w-3xl space-y-4"
          data-tina-field={tinaField(doc, "articles")}
        >
          {selectedArticles.map((pub) => (
            <PublicationEntry key={pub.id} publication={pub} />
          ))}
        </div>
      </Section>

      <Section
        kicker={doc.filterSectionTitle}
        title={doc.filterSectionTitle}
        number="04"
      >
        <PublicationsFilter publications={allPublications} />
      </Section>
    </Container>
  );
}
