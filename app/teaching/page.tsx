import { PageHeader } from "@/components/editorial/PageHeader";
import { Section } from "@/components/editorial/Section";
import { courses, teachingStatement } from "@/content/teaching";

export const metadata = { title: "Teaching" };

export default function TeachingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <PageHeader
        kicker="Teaching"
        title="Teaching"
        description={teachingStatement}
      />
      <Section title="Courses">
        <ul className="space-y-6">
          {courses.map((course) => (
            <li key={course.id} className="border-b border-border pb-6">
              <h3 className="font-display text-xl text-ink">{course.title}</h3>
              {course.code && (
                <p className="text-sm text-ink-muted">{course.code}</p>
              )}
              <p className="mt-2 text-ink-muted">{course.description}</p>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
