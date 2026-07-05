import { cn } from "@/lib/utils";

interface KickerProps {
  children: React.ReactNode;
  className?: string;
}

export function Kicker({ children, className }: KickerProps) {
  return (
    <p className={cn("text-kicker", className)}>{children}</p>
  );
}
