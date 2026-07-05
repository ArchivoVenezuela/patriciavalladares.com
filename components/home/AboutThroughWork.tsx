import Link from "next/link";
import { EditorialContainer } from "@/components/design/EditorialContainer";
import { HomeSection } from "@/components/ui/HomeSection";
import { PlateKicker } from "@/components/ui/PlateKicker";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { aboutClosing, aboutPanels } from "@/content/homeDesign";
import { cn } from "@/lib/utils";

export function AboutThroughWork() {
  return (
    <HomeSection id="about" sectionId="about" variant="large" anchored className="border-b border-border">
      <EditorialContainer>
        <div className="mb-[clamp(2.5rem,7vh,5rem)] max-w-[26ch]">
          <PlateKicker className="mb-6">Pl. 04 — The scholar, through the work</PlateKicker>
          <SectionTitle id="about-heading" className="font-light text-[clamp(1.875rem,4.6vw,4rem)] leading-[1.06]">
            She does not appear here.{" "}
            <span className="italic text-oxblood">Her questions do.</span>
          </SectionTitle>
        </div>

        <Reveal className="grid border-t-2 border-t-ink [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
          {aboutPanels.map((panel, i) => (
            <div
              key={panel.label}
              className={cn(
                "border-b border-border px-[1.375rem] py-[1.625rem]",
                i < aboutPanels.length - 1 && "md:border-r",
              )}
            >
              <div className="mb-3.5 font-mono text-[9.5px] uppercase tracking-[0.18em] text-gold">{panel.label}</div>
              <p className={cn("m-0 text-[15px] leading-relaxed text-ink-body", panel.serif && "font-serif text-lg leading-snug text-ink")}>
                {panel.text}
              </p>
            </div>
          ))}
        </Reveal>

        <p className="mt-[clamp(1.75rem,4vh,2.75rem)] max-w-[60ch] font-serif text-[clamp(1.0625rem,1.6vw,1.3125rem)] italic leading-snug text-ink-muted">
          {aboutClosing}
        </p>

        <p className="mt-6">
          <Link href="/about" className="text-link font-mono text-[10px] uppercase tracking-[0.14em]">
            Full biography →
          </Link>
        </p>
      </EditorialContainer>
    </HomeSection>
  );
}
