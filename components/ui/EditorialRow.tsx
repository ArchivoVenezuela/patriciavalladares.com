import { cn } from "@/lib/utils";

interface EditorialRowProps {
  index: string;
  title: React.ReactNode;
  subtitle?: string;
  description: string;
  tags?: string;
  featured?: boolean;
  className?: string;
  borderBottom?: boolean;
}

export function EditorialRow({
  index,
  title,
  subtitle,
  description,
  tags,
  featured,
  className,
  borderBottom,
}: EditorialRowProps) {
  return (
    <div
      className={cn(
        "grid items-baseline gap-x-[clamp(0.875rem,2.5vw,2.25rem)] border-t border-border py-6",
        "grid-cols-1 md:grid-cols-[56px_minmax(0,1.4fr)_minmax(0,1.6fr)_auto]",
        borderBottom && "border-b",
        className,
      )}
    >
      <span
        className={cn(
          "font-mono text-[11px]",
          featured ? "text-oxblood" : "text-ink",
        )}
      >
        {index}
      </span>
      <div>
        <h3 className="m-0 font-serif text-[clamp(1.375rem,2.4vw,2rem)] font-normal leading-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-gold">
            {subtitle}
          </p>
        )}
      </div>
      <p className="m-0 max-w-[44ch] text-[15px] leading-snug text-ink-muted">
        {description}
      </p>
      {tags && (
        <span className="hidden whitespace-nowrap font-mono text-[9.5px] uppercase tracking-[0.1em] text-ink-muted md:inline">
          {tags}
        </span>
      )}
    </div>
  );
}
