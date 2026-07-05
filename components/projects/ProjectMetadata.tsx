import type { ProjectDetail } from "@/lib/types";
import { TechnologyBadge } from "./TechnologyBadge";

interface ProjectMetadataProps {
  project: ProjectDetail;
}

export function ProjectMetadata({ project }: ProjectMetadataProps) {
  return (
    <aside
      aria-label="Project metadata"
      className="border border-border bg-surface p-6"
    >
      <h2 className="text-kicker mb-4">Project details</h2>
      <dl className="space-y-4 text-sm">
        <div>
          <dt className="font-medium text-ink">Role</dt>
          <dd className="mt-1 text-ink-muted">{project.role}</dd>
        </div>
        <div>
          <dt className="font-medium text-ink">Collaborators</dt>
          <dd className="mt-1 text-ink-muted">
            <ul className="list-inside list-disc">
              {project.collaborators.map((name, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          </dd>
        </div>
        {project.tags.length > 0 && (
          <div>
            <dt className="mb-2 font-medium text-ink">Tags</dt>
            <dd className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <TechnologyBadge key={tag} label={tag} />
              ))}
            </dd>
          </div>
        )}
      </dl>
    </aside>
  );
}
