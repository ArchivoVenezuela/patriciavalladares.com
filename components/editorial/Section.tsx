import { cn } from "@/lib/utils";
import { Kicker } from "./Kicker";

interface SectionProps {
  id?: string;
  kicker?: string;
  title?: string;
  number?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({
  id,
  kicker,
  title,
  number,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-12 md:py-16", className)}>
      {(kicker || title) && (
        <div className="mb-8 flex items-baseline gap-4">
          {number && (
            <span className="font-display text-sm text-gold" aria-hidden="true">
              {number}
            </span>
          )}
          <div>
            {kicker && <Kicker className="mb-2">{kicker}</Kicker>}
            {title && (
              <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
                {title}
              </h2>
            )}
          </div>
        </div>
      )}
      {children}
    </section>
  );
}
