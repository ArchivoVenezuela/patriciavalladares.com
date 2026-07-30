"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { extractParagraphTexts } from "@/lib/tina/richText";
import type { ResearchMethodsQuery } from "@/tina/__generated__/types";

interface DigitalScholarshipPageClientProps {
  query: string;
  variables: { relativePath: string };
  data: ResearchMethodsQuery;
}

export function DigitalScholarshipPageClient(
  props: DigitalScholarshipPageClientProps,
) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const doc = data.researchMethods;
  const paragraphs = extractParagraphTexts(doc.body);
  const intro = paragraphs[0];
  const closing = paragraphs[1];
  const methods = (doc.methods ?? []).filter(
    (m): m is string => Boolean(m),
  );

  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker={doc.kicker}
        title={doc.title}
        description={intro}
        folioLabel={doc.folioLabel ?? "Methods — 01"}
        tinaFields={{
          kicker: tinaField(doc, "kicker"),
          title: tinaField(doc, "title"),
          folioLabel: tinaField(doc, "folioLabel"),
        }}
      />

      <Section kicker={doc.kicker} title={doc.title} number="01">
        {intro && (
          <p
            className="max-w-3xl leading-relaxed text-ink-muted"
            data-tina-field={tinaField(doc, "body")}
          >
            {intro}
          </p>
        )}
        <ul
          className="mt-8 max-w-3xl list-disc space-y-2 pl-5 text-ink-muted"
          data-tina-field={tinaField(doc, "methods")}
        >
          {methods.map((method) => (
            <li key={method}>{method}</li>
          ))}
        </ul>
        {closing && (
          <p className="mt-8 max-w-3xl leading-relaxed text-ink-muted">
            {closing}
          </p>
        )}
      </Section>
    </Container>
  );
}
