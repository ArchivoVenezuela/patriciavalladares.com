import { cn } from "@/lib/utils";
import { Kicker } from "./Kicker";
import { Rule } from "./Rule";

interface SectionProps {
  id?: string;
  kicker?: string;
  title?: string;
  number?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "ink";
}

export function Section({
  id,
  kicker,
  title,
  number,
  children,
  className,
  variant = "default",
}: SectionProps) {
  const isInk = variant === "ink";

  return (
    <section
      id={id}
      className={cn(
        "py-section md:py-section-lg",
        isInk && "bg-ink-band text-paper",
        className,
      )}
    >
      {(kicker || title || number) && (
        <div className="mb-10 flex items-start gap-6">
          {number && (
            <span
              className={cn(
                "shrink-0 font-display text-sm tabular-nums",
                isInk ? "text-gold" : "text-gold",
              )}
              aria-hidden="true"
            >
              {number}
            </span>
          )}
          <div className="min-w-0 flex-1">
            {kicker && (
              <Kicker className={cn("mb-2", isInk && "text-paper/60")}>
                {kicker}
              </Kicker>
            )}
            {title && (
              <h2
                className={cn(
                  "font-display text-section font-semibold",
                  isInk ? "text-paper" : "text-ink",
                )}
              >
                {title}
              </h2>
            )}
            <Rule
              className="mt-5 max-w-xs"
              variant={isInk ? "gold" : "default"}
            />
          </div>
        </div>
      )}
      {children}
    </section>
  );
}
