import type { ReactNode } from "react";

interface PullQuoteProps {
  attribution?: string;
  children?: ReactNode;
}

export function PullQuote({ attribution, children }: PullQuoteProps) {
  return (
    <blockquote className="my-8 border-l-2 border-gold py-1 pl-5">
      <p className="font-serif text-[clamp(1.25rem,2vw,1.5rem)] leading-snug text-ink">
        {children}
      </p>
      {attribution && (
        <cite className="mt-3 block font-mono text-[10px] not-italic uppercase tracking-[0.14em] text-ink-muted">
          {attribution}
        </cite>
      )}
    </blockquote>
  );
}
