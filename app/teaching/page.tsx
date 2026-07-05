import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { teachingContent } from "@/content/teaching";

export const metadata = { title: "Teaching" };

export default function TeachingPage() {
  const { mentorship } = teachingContent;

  return (
    <Container className="py-12 md:py-16">
      <PageHeader
        kicker="Teaching"
        title="Teaching"
        description={teachingContent.statement}
        folioLabel="Teaching — 01"
      />

      <Section kicker="Mentorship" title="Graduate mentorship" number="01">
        <p className="max-w-3xl leading-relaxed text-ink-muted">
          {teachingContent.mentorshipStatement}
        </p>
        <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border border-border bg-surface p-4">
            <dt className="text-kicker">Dissertations directed</dt>
            <dd className="mt-2 font-display text-2xl text-ink">{mentorship.dissertationsDirected}</dd>
          </div>
          <div className="border border-border bg-surface p-4">
            <dt className="text-kicker">Committees</dt>
            <dd className="mt-2 font-display text-2xl text-ink">{mentorship.dissertationCommittees}</dd>
          </div>
          <div className="border border-border bg-surface p-4">
            <dt className="text-kicker">Presidential Fellows</dt>
            <dd className="mt-2 font-display text-2xl text-ink">{mentorship.presidentialFellows}</dd>
          </div>
          <div className="border border-border bg-surface p-4">
            <dt className="text-kicker">UG interns</dt>
            <dd className="mt-2 font-display text-2xl text-ink">{mentorship.undergraduateInterns}</dd>
          </div>
        </dl>
      </Section>

      <Section kicker="Digital Humanities" title="DH education & curriculum" number="02">
        <p className="max-w-3xl leading-relaxed text-ink-muted">
          Courses and program development connect classroom learning to archival projects, metadata practice, and critical engagement with digital tools—including the Graduate Certificate in Applied Digital Humanities and the AI Lab seminar.
        </p>
      </Section>

      <Section kicker="Courses" title="Current and recent courses" number="03">
        <ul className="space-y-8">
          {teachingContent.courses.map((course) => (
            <li key={course.id} className="border-b border-border pb-8">
              <h3 className="font-display text-xl font-semibold text-ink">{course.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">
                {course.code} · {course.semester}
              </p>
              <p className="mt-3 max-w-2xl text-ink-muted leading-relaxed">{course.description}</p>
            </li>
          ))}
        </ul>
      </Section>
    </Container>
  );
}
