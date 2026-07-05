import type { NewsItem as NewsItemType } from "@/lib/types";
import { cn, formatDate } from "@/lib/utils";

interface NewsItemProps {
  item: NewsItemType;
  className?: string;
}

export function NewsItem({ item, className }: NewsItemProps) {
  return (
    <article
      className={cn(
        "grid gap-2 border-b border-border py-5 sm:grid-cols-[8rem_1fr]",
        className,
      )}
    >
      <time
        dateTime={item.date}
        className="text-xs font-medium tracking-wide text-ink-faint uppercase tabular-nums"
      >
        {formatDate(item.date)}
      </time>
      <div>
        {item.url ? (
          <a href={item.url} className="text-link font-display text-base">
            {item.title}
          </a>
        ) : (
          <h3 className="font-display text-base font-medium text-ink">
            {item.title}
          </h3>
        )}
        <p className="mt-1 text-sm text-ink-muted">{item.summary}</p>
      </div>
    </article>
  );
}
