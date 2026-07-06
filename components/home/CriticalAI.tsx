"use client";

import { useState } from "react";
import { EditorialContainer } from "@/components/design/EditorialContainer";
import { HomeSection } from "@/components/ui/HomeSection";
import { PlateKicker } from "@/components/ui/PlateKicker";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { criticalAiDemo, criticalAiSection } from "@/content/homeDesign";
import { cn } from "@/lib/utils";

type ReadingMode = "machine" | "community";

export function CriticalAI() {
  const [mode, setMode] = useState<ReadingMode>("machine");
  const demo = criticalAiDemo;
  const section = criticalAiSection;

  return (
    <HomeSection id="ai" sectionId="ai" variant="light" anchored className="border-b border-border">
      <EditorialContainer>
        <div className="mb-[clamp(2rem,5vh,3.25rem)] max-w-[60ch]">
          <PlateKicker>{section.title}</PlateKicker>
          <SectionTitle id="ai-heading" className="mb-4">
            {section.title}
          </SectionTitle>
          <p className="m-0 text-[clamp(1rem,1.4vw,1.1875rem)] leading-snug text-ink-body">
            {section.description}
          </p>
        </div>

        <div
          role="group"
          aria-label="Reading mode"
          className="mb-[clamp(1.5rem,4vh,2.5rem)] inline-flex border border-ink font-mono text-[10px] uppercase tracking-[0.16em]"
        >
          {(["machine", "community"] as const).map((m) => (
            <button
              key={m}
              type="button"
              aria-pressed={mode === m}
              onClick={() => setMode(m)}
              className={cn(
                "cursor-pointer border-none px-[1.125rem] py-2.5",
                mode === m ? "bg-ink text-paper" : "bg-transparent text-ink",
              )}
            >
              {m === "machine" ? "Computational description" : "Humanistic description"}
            </button>
          ))}
        </div>

        <div className="grid items-stretch gap-[clamp(1.125rem,2.5vw,2.25rem)] md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="drawer-pattern flex min-h-[280px] flex-col justify-between border border-ink p-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-oxblood">{demo.objectId}</span>
            <span className="whitespace-pre-line font-mono text-[10px] uppercase leading-snug tracking-[0.12em] text-ink-muted">
              {demo.objectLabel}
            </span>
          </div>

          <div
            aria-hidden={mode !== "machine"}
            className={cn(
              "border border-border-strong bg-paper p-[1.375rem] transition-opacity duration-400",
              mode !== "machine" && "opacity-30",
            )}
          >
            <div className="mb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-muted">
              <span>Computational description</span>
            </div>
            {demo.machineTags.length > 0 && (
              <div className="mb-[1.125rem] flex flex-wrap gap-2">
                {demo.machineTags.map((tag) => (
                  <span key={tag} className="border border-border-strong px-2.5 py-1 font-mono text-[11px] text-ink-body">{tag}</span>
                ))}
              </div>
            )}
            <p className="m-0 text-[15px] leading-snug text-ink-muted">{section.machineReading}</p>
          </div>

          <div
            aria-hidden={mode !== "community"}
            className={cn(
              "border border-forest bg-forest p-[1.375rem] text-cream transition-opacity duration-400",
              mode !== "community" && "opacity-30",
            )}
          >
            <div className="mb-4 font-mono text-[9px] uppercase tracking-[0.2em] text-gold-light">
              Humanistic description
            </div>
            <p className="mb-4 font-serif text-[clamp(1.0625rem,1.6vw,1.3125rem)] leading-snug text-paper">{section.communityReading}</p>
            <p className="m-0 text-sm leading-relaxed text-cream-muted">{demo.communityNote}</p>
          </div>
        </div>

        <p className="mt-[clamp(1.25rem,3vh,2rem)] text-sm leading-relaxed text-ink-muted" aria-live="polite">
          {mode === "machine" ? section.captionMachine : section.captionCommunity}
        </p>
      </EditorialContainer>
    </HomeSection>
  );
}
