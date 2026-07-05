import Link from "next/link";
import type { ResearchTheme } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ThemeIndexItemProps {
  theme: ResearchTheme;
  href?: string;
  className?: string;
}

export function ThemeIndexItem({ theme, href, className }: ThemeIndexItemProps) {
  const content = (
    <>
      <span
        className="shrink-0 font-display text-sm tabular-nums text-gold"
        aria-hidden="true"
      >
        {theme.number}
      </span>
      <div className="min-w-0 flex-1 border-b border-border pb-6">
        <h3 className="font-display text-xl font-semibold text-ink">
          {theme.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          {theme.description}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "group flex items-start gap-6 transition-colors hover:text-oxblood",
          className,
        )}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={cn("flex items-start gap-6", className)}>{content}</div>
  );
}
