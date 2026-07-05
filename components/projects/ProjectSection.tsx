import { cn } from "@/lib/utils";
import { Kicker } from "@/components/editorial/Kicker";

interface ProjectSectionProps {
  id?: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
  className?: string;
}

export function ProjectSection({
  id,
  title,
  kicker,
  children,
  className,
}: ProjectSectionProps) {
  return (
    <section id={id} className={cn("py-8 border-b border-border last:border-0", className)}>
      {kicker && <Kicker className="mb-2">{kicker}</Kicker>}
      <h2 className="font-display text-2xl font-semibold text-ink">{title}</h2>
      <div className="mt-4 max-w-3xl text-ink-muted leading-relaxed">{children}</div>
    </section>
  );
}
