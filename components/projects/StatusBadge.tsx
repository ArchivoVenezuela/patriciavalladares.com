import type { ProjectStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

const statusLabels: Record<ProjectStatus, string> = {
  active: "Active",
  "in-development": "In development",
  planned: "Planned",
  beta: "Beta",
  prototype: "Prototype",
  placeholder: "Status pending",
};

interface StatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block border border-border px-2 py-0.5 text-xs font-medium tracking-wide text-ink-muted uppercase",
        className,
      )}
    >
      {statusLabels[status]}
    </span>
  );
}
