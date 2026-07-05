import type { Book } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CatalogCaption } from "@/components/editorial/CatalogCaption";

interface BookCardProps {
  book: Book;
  className?: string;
}

export function BookCard({ book, className }: BookCardProps) {
  return (
    <figure className={cn("max-w-xs", className)}>
      <div
        className="flex aspect-[2/3] items-center justify-center border border-border bg-surface"
        role="img"
        aria-label={`Cover placeholder for ${book.title}`}
      >
        <span className="px-4 text-center text-xs tracking-wide text-ink-faint uppercase">
          Cover pending
        </span>
      </div>
      <CatalogCaption
        title={book.title}
        subtitle={book.publisher}
        meta={book.year !== "—" ? book.year : undefined}
      />
    </figure>
  );
}
