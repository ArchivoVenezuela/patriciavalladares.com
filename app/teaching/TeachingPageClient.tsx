"use client";

import { useTina, tinaField } from "tinacms/dist/react";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { extractParagraphTexts } from "@/lib/tina/richText";
import type { TeachingQuery } from "@/tina/__generated__/types";

interface TeachingPageClientProps {
  query: string;
  variables: { relativePath: string };
  data: TeachingQuery;
}

export function TeachingPageClient(props: TeachingPageClientProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const doc = data.teaching;
  const statement = extractParagraphTexts(doc.body)[0];
  const courses = (doc.courses ?? []).filter(
    (c): c is NonNullable<typeof c> => Boolean(c),
  );

  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker={doc.kicker}
        title={doc.title}
        description={statement}
        folioLabel={doc.folioLabel ?? "Teaching — 01"}
        tinaFields={{
          kicker: tinaField(doc, "kicker"),
          title: tinaField(doc, "title"),
          folioLabel: tinaField(doc, "folioLabel"),
        }}
      />

      <Section kicker={doc.kicker} title={doc.title} number="01">
        {statement && (
          <p
            className="max-w-3xl leading-relaxed text-ink-muted"
            data-tina-field={tinaField(doc, "body")}
          >
            {statement}
          </p>
        )}
      </Section>

      {courses.length > 0 && (
        <Section
          kicker={doc.mentorshipTitle ?? "Courses"}
          title="Courses"
          number="02"
        >
          <ul className="space-y-8" data-tina-field={tinaField(doc, "courses")}>
            {courses.map((course) => (
              <li key={course.id} className="border-b border-border pb-8">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {course.title}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">
                  {course.code} · {course.semester}
                </p>
                {course.description && (
                  <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
                    {course.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </Section>
      )}
    </Container>
  );
}
