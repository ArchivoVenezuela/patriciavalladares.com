import type { InfrastructureStage } from "@/lib/types";

interface EvolutionTimelineProps {
  stages: InfrastructureStage[];
}

export function EvolutionTimeline({ stages }: EvolutionTimelineProps) {
  return (
    <ol className="space-y-0" aria-label="Evolution of digital scholarship infrastructure">
      {stages.map((stage, index) => (
        <li key={stage.id} className="relative flex gap-6 pb-10 last:pb-0">
          {index < stages.length - 1 && (
            <span
              className="absolute left-[1.125rem] top-10 bottom-0 w-px bg-gold"
              aria-hidden="true"
            />
          )}
          <span
            className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center border border-gold bg-paper font-display text-sm text-gold"
            aria-hidden="true"
          >
            {index + 1}
          </span>
          <div className="min-w-0 flex-1 pt-1">
            <h3 className="font-display text-xl font-semibold text-ink">
              {stage.label}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-base">
              {stage.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
