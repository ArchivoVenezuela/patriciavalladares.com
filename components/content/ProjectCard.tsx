import Link from "next/link";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Kicker } from "@/components/editorial/Kicker";

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
        "group flex flex-col border border-border bg-surface p-6 transition-colors",
        "hover:border-border-strong",
        featured && "md:col-span-2",
        className,
      )}
    >
      <Kicker>{project.category}</Kicker>
      <h3 className="mt-3 font-display text-xl font-semibold text-ink md:text-2xl">
        <Link
          href={`/projects/${project.slug}`}
          className="hover:text-oxblood"
        >
          {project.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm italic text-ink-muted">{project.tagline}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
        {project.summary}
      </p>
      <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-4">
        <span className="text-xs tracking-wide text-ink-faint uppercase">
          {project.status === "placeholder" ? "Status pending" : project.status}
        </span>
        <Link
          href={`/projects/${project.slug}`}
          className={cn(
            "text-sm font-medium",
            isFlagship ? "text-link" : "text-ink-muted hover:text-oxblood",
          )}
        >
          View {isFlagship ? "project" : "tool"} →
        </Link>
      </div>
    </article>
  );
}
