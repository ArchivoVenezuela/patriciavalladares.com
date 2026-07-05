import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HomeSectionVariant = "default" | "large" | "interlude" | "forest" | "dark" | "light";

const variantClasses: Record<HomeSectionVariant, string> = {
  default: "section-y bg-paper",
  large: "section-y-lg bg-paper-light",
  interlude: "section-interlude bg-paper text-center",
  forest: "section-y bg-forest text-cream",
  dark: "section-y bg-[#211F1A] text-cream overflow-hidden",
  light: "section-y bg-paper-light",
};

interface HomeSectionProps {
  id?: string;
  sectionId?: string;
  children: ReactNode;
  className?: string;
  variant?: HomeSectionVariant;
  anchored?: boolean;
  ariaLabelledBy?: string;
}

export function HomeSection({
  id,
  sectionId,
  children,
  className,
  variant = "default",
  anchored = false,
  ariaLabelledBy,
}: HomeSectionProps) {
  return (
    <section
      id={id}
      data-section={sectionId}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "section-x",
        variantClasses[variant],
        anchored && "scroll-anchor",
        className,
      )}
    >
      {children}
    </section>
  );
}
