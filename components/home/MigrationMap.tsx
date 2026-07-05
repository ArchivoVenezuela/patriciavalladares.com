"use client";

import { useState } from "react";
import { EditorialContainer } from "@/components/design/EditorialContainer";
import { HomeSection } from "@/components/ui/HomeSection";
import { PlateKicker } from "@/components/ui/PlateKicker";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { migrationCities, migrationFlowPaths } from "@/lib/home/migrationData";
import { cn } from "@/lib/utils";

export function MigrationMap() {
  const [selected, setSelected] = useState("Caracas");
  const active = migrationCities.find((c) => c.name === selected) ?? migrationCities[0];

  return (
    <HomeSection id="migration" sectionId="migration" variant="dark">
      <EditorialContainer>
        <div className="mb-[clamp(1.5rem,3vh,2.5rem)] flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <PlateKicker tone="gold-light">Fig. 02 — Dispersal</PlateKicker>
            <SectionTitle className="font-light text-paper">
              Memory travels
              <br />
              with its people.
            </SectionTitle>
          </div>
          <div className="text-right" aria-live="polite">
            <div className="font-serif text-[clamp(1.25rem,2.4vw,1.875rem)] leading-tight text-gold-light">{active.name}</div>
            <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">{active.count}</div>
          </div>
        </div>

        <Reveal className="w-full">
          <svg viewBox="0 0 1000 480" className="block w-full overflow-visible" role="img" aria-label="Migration dispersal map">
            <g fill="none" stroke="#7A6A4A" strokeWidth={1.4} strokeDasharray="3 7">
              {migrationFlowPaths.map((d, i) => (
                <path key={d} d={d} className={cn("flow-dash", `flow-dash-${i}`)} />
              ))}
            </g>
            {migrationCities.map((city) => {
              const isActive = selected === city.name;
              return (
                <g
                  key={city.name}
                  tabIndex={city.isOrigin ? -1 : 0}
                  className={cn(!city.isOrigin && "cursor-pointer")}
                  onMouseEnter={() => setSelected(city.name)}
                  onFocus={() => setSelected(city.name)}
                  onKeyDown={(e) => {
                    if ((e.key === "Enter" || e.key === " ") && !city.isOrigin) {
                      e.preventDefault();
                      setSelected(city.name);
                    }
                  }}
                  role={city.isOrigin ? undefined : "button"}
                  aria-label={`${city.name}, ${city.count}`}
                >
                  {city.isOrigin ? (
                    <>
                      <circle cx={city.cx} cy={city.cy} r={8} fill="var(--color-gold-light)" />
                      <circle cx={city.cx} cy={city.cy} r={15} fill="none" stroke="var(--color-gold-light)" strokeWidth={1} opacity={0.5} />
                    </>
                  ) : (
                    <circle cx={city.cx} cy={city.cy} r={6} fill={isActive ? "var(--color-gold-light)" : "#8FA08E"} />
                  )}
                  <text x={city.cx} y={city.labelY} textAnchor="middle" fill={city.isOrigin ? "var(--color-cream)" : "#9AA398"} fontSize={city.isOrigin ? 11 : 10} letterSpacing={city.isOrigin ? 0.5 : 0}>
                    {city.name.toUpperCase()}
                  </text>
                </g>
              );
            })}
          </svg>
        </Reveal>

        <p className="mt-[clamp(1rem,3vh,1.75rem)] max-w-[56ch] font-mono text-[10px] leading-[1.8] tracking-[0.12em] text-ink-faint">
          Each line is a collection carried out of the country by hand, by phone, by memory — then described and reconnected in the archive. Hover a city.
        </p>
      </EditorialContainer>
    </HomeSection>
  );
}
