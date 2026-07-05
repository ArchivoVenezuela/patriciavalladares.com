import { cn } from "@/lib/utils";

interface CatalogCaptionProps {
  title: string;
  subtitle?: string;
  meta?: string;
  className?: string;
}

/** Archival catalogue-card caption beneath images or folio entries */
export function CatalogCaption({
  title,
  subtitle,
  meta,
  className,
}: CatalogCaptionProps) {
  return (
    <figcaption className={cn("mt-3 border-t border-border pt-3", className)}>
      <p className="font-display text-sm font-medium text-ink">{title}</p>
      {subtitle && (
        <p className="mt-0.5 text-sm italic text-ink-muted">{subtitle}</p>
      )}
      {meta && (
        <p className="mt-1 text-xs tracking-wide text-ink-faint uppercase">
          {meta}
        </p>
      )}
    </figcaption>
  );
}
