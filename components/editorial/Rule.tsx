import { cn } from "@/lib/utils";

interface RuleProps {
  className?: string;
  variant?: "default" | "gold" | "strong";
}

export function Rule({ className, variant = "default" }: RuleProps) {
  return (
    <hr
      className={cn(
        "h-px w-full border-0",
        variant === "gold" && "bg-gold",
        variant === "strong" && "bg-border-strong",
        variant === "default" && "bg-border",
        className,
      )}
      aria-hidden="true"
    />
  );
}
