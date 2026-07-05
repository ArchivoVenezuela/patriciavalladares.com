"use client";

import { useCallback, useState } from "react";
import { EditorialContainer } from "@/components/design/EditorialContainer";
import { HomeSection } from "@/components/ui/HomeSection";
import { PlateKicker } from "@/components/ui/PlateKicker";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { archiveLede, archiveSpecimens, archiveStats } from "@/content/homeDesign";
import { cn } from "@/lib/utils";

export function ArchiveSection() {
  const [active, setActive] = useState(0);
  const specimen = archiveSpecimens[active];

  const onSpecimenKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setActive((i) => Math.min(i + 1, archiveSpecimens.length - 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setActive((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActive(index);
      }
    },
    [],
  );

  return (
    <HomeSection id="archive" sectionId="archive" variant="default" anchored className="border-b border-border">
      <EditorialContainer>
        <div className="mb-[clamp(2.25rem,5vh,3.75rem)] grid items-end gap-[clamp(1.5rem,4vw,4rem)] md:grid-cols-2">
          <div>
            <PlateKicker>Pl. 01 — The Flagship Archive</PlateKicker>
            <SectionTitle id="archive-heading" size="archive">
              Archivo Venezuela
            </SectionTitle>
          </div>
          <p className="m-0 max-w-[40ch] text-[clamp(1rem,1.5vw,1.25rem)] leading-normal text-ink-body">
            {archiveLede}
          </p>
        </div>

        <div className="mb-[clamp(2rem,5vh,3.25rem)] grid border-b border-border border-t-2 border-t-ink [grid-template-columns:repeat(auto-fit,minmax(130px,1fr))]">
          {archiveStats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn("px-4 py-[1.125rem]", i < archiveStats.length - 1 && "border-r border-border")}
            >
              <div className={cn("font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-none", stat.accent === "oxblood" ? "text-oxblood" : "text-forest")}>
                {stat.value}
              </div>
              <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-ink-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        <Reveal className="grid items-start gap-[clamp(1.5rem,4vw,3.25rem)] lg:grid-cols-[minmax(0,1.4fr)_minmax(260px,1fr)]">
          <div>
            <p className="mb-4 font-mono text-[9.5px] uppercase tracking-[0.2em] text-gold">
              The drawer — select a specimen
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5" role="listbox" aria-label="Archive specimens">
              {archiveSpecimens.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="option"
                  aria-selected={active === i}
                  aria-label={`Specimen ${s.id}, ${s.year}`}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onSpecimenKeyDown(e, i)}
                  className={cn(
                    "drawer-pattern relative aspect-[3/4] cursor-pointer border p-0 transition-colors",
                    active === i ? "border-2 border-oxblood" : "border border-border-strong/60",
                  )}
                >
                  <span className="absolute bottom-1.5 left-1.5 font-mono text-[8px] tracking-wide text-ink-muted">{s.year}</span>
                </button>
              ))}
            </div>
            <p className="mt-4 font-mono text-[9.5px] leading-[1.7] tracking-[0.1em] text-ink-muted">
              Five specimens. Periodicals · oral testimony · posters · photographs · born-digital records.
            </p>
          </div>

          <article className="border border-ink bg-paper-light" aria-live="polite">
            <div className="bg-forest px-[1.125rem] py-2.5 font-mono text-[9px] uppercase tracking-[0.2em] text-paper">
              Catalog record
            </div>
            <div className="px-5 py-5">
              <div className="mb-3 font-mono text-[11px] tracking-wide text-oxblood">{specimen.id}</div>
              <h3 className="mb-4 font-serif text-[22px] font-normal italic leading-tight text-ink">{specimen.title}</h3>
              <dl className="border-t border-border pt-3 font-mono text-[11px] leading-8 text-ink-body">
                {specimen.meta.map(([label, value]) => (
                  <div key={label}>
                    <dt className="inline text-gold">{label}&nbsp;&nbsp;&nbsp;&nbsp;</dt>
                    <dd className="inline">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 border-t border-border pt-3.5 font-serif text-base italic leading-snug text-forest">{specimen.note}</p>
            </div>
          </article>
        </Reveal>
      </EditorialContainer>
    </HomeSection>
  );
}
