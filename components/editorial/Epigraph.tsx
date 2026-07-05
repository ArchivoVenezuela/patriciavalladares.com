import { cn } from "@/lib/utils";

interface EpigraphProps {
  quote: string;
  attribution?: string;
  className?: string;
}

export function Epigraph({ quote, attribution, className }: EpigraphProps) {
  return (
    <figure className={cn("max-w-xl border-l-2 border-gold pl-6", className)}>
      <blockquote className="font-display text-lg italic leading-relaxed text-ink">
        {quote}
      </blockquote>
      {attribution && (
        <figcaption className="mt-3 text-sm text-ink-muted">
          — {attribution}
        </figcaption>
      )}
    </figure>
  );
}
