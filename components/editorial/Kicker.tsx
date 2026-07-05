import { cn } from "@/lib/utils";

interface KickerProps {
  children: React.ReactNode;
  className?: string;
}

export function Kicker({ children, className }: KickerProps) {
  return (
    <p
      className={cn(
        "text-xs font-medium uppercase tracking-[0.12em] text-ink-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}
