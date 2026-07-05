import { FolioMarker } from "./FolioMarker";
import { Kicker } from "./Kicker";
import { Rule } from "./Rule";

interface PageHeaderProps {
  kicker?: string;
  title: string;
  description?: string;
  folioLabel?: string;
}

export function PageHeader({
  kicker,
  title,
  description,
  folioLabel,
}: PageHeaderProps) {
  return (
    <header className="mb-12 max-w-3xl">
      <div className="mb-4 flex items-start justify-between gap-4">
        {kicker && <Kicker>{kicker}</Kicker>}
        {folioLabel && <FolioMarker label={folioLabel} />}
      </div>
      <h1 className="font-display text-display font-semibold text-ink">
        {title}
      </h1>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
      <Rule className="mt-8" variant="gold" />
    </header>
  );
}
