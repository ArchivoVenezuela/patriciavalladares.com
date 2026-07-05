import Link from "next/link";
import type { ProjectDetail } from "@/lib/types";
import { courses } from "@/content/teaching";
import { allPublications } from "@/content/publications";
import { publicHumanitiesItems } from "@/content/publicHumanities";
import { ProjectHero } from "./ProjectHero";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectMetadata } from "./ProjectMetadata";
import { ProjectSection } from "./ProjectSection";
import { TechnologyBadge } from "./TechnologyBadge";

interface ProjectDetailTemplateProps {
  project: ProjectDetail;
}

export function ProjectDetailTemplate({ project }: ProjectDetailTemplateProps) {
  const relatedPublications = allPublications.filter((p) =>
    project.relatedPublicationIds.includes(p.id),
  );
  const relatedCourses = courses.filter((c) =>
    project.relatedCourseIds.includes(c.id),
  );
  const relatedPublicHumanities = publicHumanitiesItems.filter((p) =>
    project.relatedPublicHumanitiesIds.includes(p.id),
  );

  return (
    <article>
      <ProjectHero project={project} />

      <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
        <div>
          <ProjectSection title="Problem">
            <p>{project.problem}</p>
          </ProjectSection>

          <ProjectSection title="Why it matters">
            <p>{project.whyItMatters}</p>
          </ProjectSection>

          <ProjectSection title="Research questions" kicker="Inquiry">
            <ul className="list-none space-y-4 pl-0">
              {project.researchQuestions.map((q, i) => (
                <li
                  key={i}
                  className="border-l-2 border-gold pl-4 font-display text-ink"
                >
                  {q}
                </li>
              ))}
            </ul>
          </ProjectSection>

          <ProjectSection title="Methodology">
            <p>{project.methodology}</p>
          </ProjectSection>

          <ProjectSection title="Technologies" kicker="Tools">
            <ul className="flex flex-wrap gap-2 list-none pl-0">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <TechnologyBadge label={tech} />
                </li>
              ))}
            </ul>
          </ProjectSection>

          <ProjectSection title="Outcomes">
            <ul className="list-disc pl-5 space-y-2">
              {project.outcomes.map((outcome, i) => (
                <li key={i}>{outcome}</li>
              ))}
            </ul>
          </ProjectSection>

          <ProjectSection title="Related publications">
            {relatedPublications.length > 0 ? (
              <ul className="space-y-2">
                {relatedPublications.map((pub) => (
                  <li key={pub.id}>
                    <span className="text-ink">{pub.title}</span>
                    <span className="text-ink-muted"> — {pub.venue}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm">Related publications pending.</p>
            )}
          </ProjectSection>

          <ProjectSection title="Related teaching">
            {relatedCourses.length > 0 ? (
              <ul className="space-y-2">
                {relatedCourses.map((course) => (
                  <li key={course.id}>{course.title}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm">Related teaching pending.</p>
            )}
          </ProjectSection>

          <ProjectSection title="Related public humanities">
            {relatedPublicHumanities.length > 0 ? (
              <ul className="space-y-2">
                {relatedPublicHumanities.map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm">Related public humanities work pending.</p>
            )}
          </ProjectSection>

          <ProjectSection title="External links">
            <ProjectLinks links={project.links} />
          </ProjectSection>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <ProjectMetadata project={project} />
          <p className="mt-6">
            <Link href="/projects" className="text-link text-sm">
              ← All projects
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
