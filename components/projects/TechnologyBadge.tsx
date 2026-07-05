import { cn } from "@/lib/utils";

interface TechnologyBadgeProps {
  label: string;
  className?: string;
}

export function TechnologyBadge({ label, className }: TechnologyBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block bg-paper px-2.5 py-1 text-xs text-ink-muted border border-border",
        className,
      )}
    >
      {label}
    </span>
  );
}
