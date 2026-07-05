import { cn } from "@/lib/utils";

type PlateTone = "gold" | "gold-light" | "oxblood";

const toneClasses: Record<PlateTone, string> = {
  gold: "plate-kicker-gold",
  "gold-light": "plate-kicker-gold-light",
  oxblood: "text-oxblood",
};

interface PlateKickerProps {
  children: React.ReactNode;
  tone?: PlateTone;
  className?: string;
}

export function PlateKicker({
  children,
  tone = "gold",
  className,
}: PlateKickerProps) {
  return (
    <p className={cn("plate-kicker mb-3.5", toneClasses[tone], className)}>
      {children}
    </p>
  );
}
