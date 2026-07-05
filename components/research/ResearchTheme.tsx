import type { ResearchTheme as ResearchThemeType } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Kicker } from "@/components/editorial/Kicker";

interface ResearchThemeProps {
  theme: ResearchThemeType;
  className?: string;
}

export function ResearchTheme({ theme, className }: ResearchThemeProps) {
  return (
    <article className={cn("flex gap-6", className)}>
      <span
        className="shrink-0 font-display text-sm tabular-nums text-gold"
        aria-hidden="true"
      >
        {theme.number}
      </span>
      <div className="min-w-0 flex-1 border-b border-border pb-8">
        <Kicker className="mb-2">Theme {theme.number}</Kicker>
        <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
          {theme.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
          {theme.description}
        </p>
      </div>
    </article>
  );
}
