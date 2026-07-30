import Link from "next/link";
import type {
  Course,
  ProjectDetail,
  Publication,
  PublicHumanitiesItem,
} from "@/lib/types";
import { isPendingCopy } from "@/lib/utils";
import { ProjectHero } from "./ProjectHero";
import { ProjectLinks } from "./ProjectLinks";
import { ProjectMetadata } from "./ProjectMetadata";
import { ProjectSection } from "./ProjectSection";
import { TechnologyBadge } from "./TechnologyBadge";

interface ProjectDetailTemplateProps {
  project: ProjectDetail;
  relatedPublications?: Publication[];
  relatedCourses?: Course[];
  relatedPublicHumanities?: PublicHumanitiesItem[];
  /** Optional Tina contextual-editing field paths for the hero block */
  heroTinaFields?: {
    title?: string;
    subtitle?: string;
    summary?: string;
  };
}

export function ProjectDetailTemplate({
  project,
  relatedPublications = [],
  relatedCourses = [],
  relatedPublicHumanities = [],
  heroTinaFields,
}: ProjectDetailTemplateProps) {
  return (
    <article>
      <ProjectHero project={project} tinaFields={heroTinaFields} />

      <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
        <div>
          {!isPendingCopy(project.problem) && (
            <ProjectSection title="Problem">
              <p>{project.problem}</p>
            </ProjectSection>
          )}

          {!isPendingCopy(project.whyItMatters) && (
            <ProjectSection title="Context">
              <p>{project.whyItMatters}</p>
            </ProjectSection>
          )}

          {project.researchQuestions.length > 0 && (
            <ProjectSection title="Research questions">
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
          )}

          {!isPendingCopy(project.methodology) && (
            <ProjectSection title="Methods">
              <p>{project.methodology}</p>
            </ProjectSection>
          )}

          {project.technologies.length > 0 && (
            <ProjectSection title="Technologies">
              <ul className="flex flex-wrap gap-2 list-none pl-0">
                {project.technologies.map((tech) => (
                  <li key={tech}>
                    <TechnologyBadge label={tech} />
                  </li>
                ))}
              </ul>
            </ProjectSection>
          )}

          {project.outcomes.some((o) => !isPendingCopy(o)) && (
            <ProjectSection title="Outcomes">
              <ul className="list-disc pl-5 space-y-2">
                {project.outcomes.map((outcome, i) => (
                  <li key={i}>{outcome}</li>
                ))}
              </ul>
            </ProjectSection>
          )}

          {relatedPublications.length > 0 && (
            <ProjectSection title="Related publications">
              <ul className="space-y-2">
                {relatedPublications.map((pub) => (
                  <li key={pub.id}>
                    <span className="text-ink">{pub.title}</span>
                    <span className="text-ink-muted"> — {pub.venue}</span>
                  </li>
                ))}
              </ul>
            </ProjectSection>
          )}

          {relatedCourses.length > 0 && (
            <ProjectSection title="Related teaching">
              <ul className="space-y-2">
                {relatedCourses.map((course) => (
                  <li key={course.id}>{course.title}</li>
                ))}
              </ul>
            </ProjectSection>
          )}

          {relatedPublicHumanities.length > 0 && (
            <ProjectSection title="Related public humanities">
              <ul className="space-y-2">
                {relatedPublicHumanities.map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </ul>
            </ProjectSection>
          )}

          {project.links.length > 0 && (
            <ProjectSection title="Links">
              <ProjectLinks links={project.links} />
            </ProjectSection>
          )}
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
