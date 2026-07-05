import Link from "next/link";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Kicker } from "@/components/editorial/Kicker";
import { StatusBadge } from "@/components/projects/StatusBadge";
import { TechnologyBadge } from "@/components/projects/TechnologyBadge";

interface ProjectCardProps {
  project: Project;
  className?: string;
  featured?: boolean;
}

export function ProjectCard({
  project,
  className,
  featured = false,
}: ProjectCardProps) {
  const isFlagship = project.tier === "flagship";

  return (
    <article
      className={cn(
        "group flex flex-col border border-border bg-surface transition-colors",
        "hover:border-border-strong",
        featured && "md:col-span-2",
        className,
      )}
    >
      <div
        className="flex aspect-[16/9] items-center justify-center border-b border-border bg-paper"
        role="img"
        aria-label={`${project.title} — image pending`}
      >
        <span className="text-xs tracking-wide text-ink-faint uppercase">
          Image pending
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <Kicker>{project.category}</Kicker>
          <StatusBadge status={project.status} />
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold text-ink md:text-2xl">
          <Link
            href={`/projects/${project.slug}`}
            className="hover:text-oxblood"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm italic text-ink-muted">{project.subtitle}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
          {project.summary}
        </p>
        <dl className="mt-4 space-y-2 text-xs text-ink-muted">
          <div>
            <dt className="inline font-medium text-ink">Role: </dt>
            <dd className="inline">{project.role}</dd>
          </div>
          <div>
            <dt className="font-medium text-ink">Collaborators</dt>
            <dd className="mt-0.5">{project.collaborators.join(", ")}</dd>
          </div>
        </dl>
        {project.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <TechnologyBadge key={tag} label={tag} />
            ))}
          </div>
        )}
        <div className="mt-6 border-t border-border pt-4">
          <Link
            href={`/projects/${project.slug}`}
            className={cn(
              "text-sm font-medium",
              isFlagship ? "text-link" : "text-ink-muted hover:text-oxblood",
            )}
          >
            View {isFlagship ? "project" : "infrastructure"} →
          </Link>
        </div>
      </div>
    </article>
  );
}
