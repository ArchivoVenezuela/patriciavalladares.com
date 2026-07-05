import type { Publication } from "@/lib/types";
import { cn } from "@/lib/utils";

interface PublicationEntryProps {
  publication: Publication;
  className?: string;
}

export function PublicationEntry({
  publication,
  className,
}: PublicationEntryProps) {
  const { title, authors, venue, year, type, url, volume, pages } = publication;

  const citation = (
    <>
      <span className="font-display text-ink">{title}</span>
      {authors && <span className="text-ink-muted">. {authors}</span>}
      <span className="text-ink-muted">
        . <em>{venue}</em>
        {volume && `, ${volume}`}
        {year !== "—" && ` (${year})`}
        {pages && `, ${pages}`}
        {type === "forthcoming" && ". Forthcoming"}
        .
      </span>
    </>
  );

  return (
    <article className={cn("publication-entry text-sm leading-relaxed", className)}>
      {url ? (
        <a href={url} className="text-link" target="_blank" rel="noopener noreferrer">
          {citation}
        </a>
      ) : (
        citation
      )}
    </article>
  );
}
