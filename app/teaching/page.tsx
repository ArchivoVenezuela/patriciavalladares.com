import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { teachingContent } from "@/content/teaching";
import { getTeachingContent } from "@/lib/content";

const teachingPage = getTeachingContent();

export const metadata = { title: "Teaching" };

export default function TeachingPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker={teachingPage.kicker}
        title={teachingPage.title}
        description={teachingContent.statement}
        folioLabel={teachingPage.folioLabel ?? "Teaching — 01"}
      />

      <Section kicker={teachingPage.kicker} title={teachingPage.title} number="01">
        <p className="max-w-3xl leading-relaxed text-ink-muted">
          {teachingContent.statement}
        </p>
      </Section>

      {teachingContent.courses.length > 0 && (
        <Section kicker="Courses" title="Courses" number="02">
          <ul className="space-y-8">
            {teachingContent.courses.map((course) => (
              <li key={course.id} className="border-b border-border pb-8">
                <h3 className="font-display text-xl font-semibold text-ink">
                  {course.title}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">
                  {course.code} · {course.semester}
                </p>
                <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
                  {course.description}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </Container>
  );
}
