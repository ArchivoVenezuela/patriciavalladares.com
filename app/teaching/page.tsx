import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { TODO } from "@/content/draft";
import { teachingContent } from "@/content/teaching";

export const metadata = { title: "Teaching" };

export default function TeachingPage() {
  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker="Teaching"
        title="Teaching"
        description={teachingContent.statement}
        folioLabel="Teaching — 01"
      />

      <Section kicker="Teaching" title="Teaching" number="01">
        <p className="max-w-3xl leading-relaxed text-ink-muted">
          {teachingContent.statement}
        </p>
      </Section>

      <Section kicker="Mentorship" title="Graduate mentorship" number="02">
        <p className="max-w-3xl leading-relaxed text-ink-muted">
          {teachingContent.mentorshipStatement}
        </p>
      </Section>

      <Section kicker="Courses" title="Courses" number="03">
        {teachingContent.courses.length > 0 ? (
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
        ) : (
          <p className="max-w-3xl text-sm text-ink-muted">{TODO}</p>
        )}
      </Section>
    </Container>
  );
}
