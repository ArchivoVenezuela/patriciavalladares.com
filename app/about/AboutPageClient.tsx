"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Container } from "@/components/layout/Container";
import { FolioMarker } from "@/components/editorial/FolioMarker";
import { Kicker } from "@/components/editorial/Kicker";
import { Rule } from "@/components/editorial/Rule";
import { Section } from "@/components/editorial/Section";
import { sectionTitles, TODO } from "@/lib/content/constants";
import { extractParagraphTexts } from "@/lib/tina/richText";
import type { BiographyQuery } from "@/tina/__generated__/types";

interface AboutPageClientProps {
  query: string;
  variables: { relativePath: string };
  data: BiographyQuery;
}

/**
 * Visual-editing client shell for /about.
 * Mirrors the previous PageHeader + Section layout exactly.
 */
export function AboutPageClient(props: AboutPageClientProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const doc = data.biography;
  const paragraphs = extractParagraphTexts(doc.body);
  const description = paragraphs[1];

  return (
    <Container className="py-12 md:py-16">
      <header className="mb-12 max-w-3xl">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div data-tina-field={tinaField(doc, "kicker")}>
            <Kicker>{doc.kicker}</Kicker>
          </div>
          <div data-tina-field={tinaField(doc, "folioLabel")}>
            <FolioMarker label={doc.folioLabel ?? "Biography — 01"} />
          </div>
        </div>
        <h1
          className="font-display text-display font-semibold text-ink"
          data-tina-field={tinaField(doc, "title")}
        >
          {doc.title}
        </h1>
        {description && (
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            {description}
          </p>
        )}
        <Rule className="mt-8" variant="gold" />
      </header>

      <Section kicker={sectionTitles.biography} title={sectionTitles.biography} number="01">
        <div
          className="max-w-3xl space-y-6 leading-relaxed text-ink-muted [&_a]:text-link [&_p]:m-0 [&_p]:leading-relaxed"
          data-tina-field={tinaField(doc, "body")}
        >
          <TinaMarkdown content={doc.body} />
        </div>
      </Section>

      <Section kicker="Languages" title="Languages" number="02">
        <p className="max-w-3xl text-sm text-ink-muted">{TODO}</p>
      </Section>

      <Section kicker="Education" title="Education" number="03">
        <p className="max-w-3xl text-sm text-ink-muted">{TODO}</p>
      </Section>
    </Container>
  );
}
