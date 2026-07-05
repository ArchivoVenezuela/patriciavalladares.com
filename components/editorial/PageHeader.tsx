import { Kicker } from "./Kicker";
import { Rule } from "./Rule";

interface PageHeaderProps {
  kicker?: string;
  title: string;
  description?: string;
}

export function PageHeader({ kicker, title, description }: PageHeaderProps) {
  return (
    <header className="mb-12 max-w-3xl">
      {kicker && <Kicker className="mb-3">{kicker}</Kicker>}
      <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
      <Rule className="mt-8" />
    </header>
  );
}
