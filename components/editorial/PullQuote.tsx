import type { PullQuote as PullQuoteType } from "@/lib/types";
import { cn } from "@/lib/utils";

interface PullQuoteProps {
  quote: PullQuoteType;
  className?: string;
}

export function PullQuote({ quote, className }: PullQuoteProps) {
  return (
    <figure className={cn("my-10 max-w-2xl", className)}>
      <blockquote className="font-display text-xl leading-relaxed text-ink md:text-2xl">
        {quote.text}
      </blockquote>
      {quote.attribution && (
        <figcaption className="mt-4 text-sm text-ink-muted">
          — {quote.attribution}
        </figcaption>
      )}
    </figure>
  );
}
