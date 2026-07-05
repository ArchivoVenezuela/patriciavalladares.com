import type { ProjectDetail } from "@/lib/types";
import { Kicker } from "@/components/editorial/Kicker";
import { Rule } from "@/components/editorial/Rule";
import { StatusBadge } from "./StatusBadge";

interface ProjectHeroProps {
  project: ProjectDetail;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <header className="mb-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_min(320px,40%)] lg:items-start">
        <div>
          <Kicker>{project.category}</Kicker>
          <h1 className="mt-3 font-display text-display font-semibold text-ink">
            {project.title}
          </h1>
          <p className="mt-3 text-lg italic text-ink-muted">{project.subtitle}</p>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink-muted">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} />
          </div>
          <Rule className="mt-8" variant="gold" />
        </div>
        <figure className="order-first lg:order-last">
          <div
            className="flex aspect-[4/3] items-center justify-center border border-border bg-surface"
            role="img"
            aria-label={`${project.title} — project image pending`}
          >
            <span className="px-4 text-center text-xs tracking-wide text-ink-faint uppercase">
              Image pending
            </span>
          </div>
        </figure>
      </div>
    </header>
  );
}
