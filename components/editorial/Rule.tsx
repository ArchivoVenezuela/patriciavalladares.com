import { cn } from "@/lib/utils";

interface RuleProps {
  className?: string;
  variant?: "default" | "gold";
}

export function Rule({ className, variant = "default" }: RuleProps) {
  return (
    <hr
      className={cn(
        "border-0 h-px w-full",
        variant === "gold" ? "bg-gold" : "bg-border",
        className,
      )}
      aria-hidden="true"
    />
  );
}
