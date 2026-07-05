import { cn } from "@/lib/utils";

interface FolioMarkerProps {
  label: string;
  className?: string;
}

/** Marginal folio-style page or section marker */
export function FolioMarker({ label, className }: FolioMarkerProps) {
  return (
    <span
      className={cn(
        "font-display text-xs tracking-wide text-gold uppercase",
        className,
      )}
      aria-hidden="true"
    >
      {label}
    </span>
  );
}
