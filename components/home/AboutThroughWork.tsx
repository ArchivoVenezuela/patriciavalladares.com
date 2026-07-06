import Link from "next/link";
import { EditorialContainer } from "@/components/design/EditorialContainer";
import { HomeSection } from "@/components/ui/HomeSection";
import { PlateKicker } from "@/components/ui/PlateKicker";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { biographyPanels, draftSectionTitles } from "@/content/homeDesign";
import { cn } from "@/lib/utils";

export function AboutThroughWork() {
  return (
    <HomeSection id="about" sectionId="about" variant="large" anchored className="border-b border-border">
      <EditorialContainer>
        <div className="mb-[clamp(2.5rem,7vh,5rem)] max-w-[52ch]">
          <PlateKicker className="mb-6">{draftSectionTitles.biography}</PlateKicker>
          <SectionTitle id="about-heading" className="font-light text-[clamp(1.875rem,4.6vw,4rem)] leading-[1.06]">
            {draftSectionTitles.biography}
          </SectionTitle>
        </div>

        <Reveal className="grid border-t-2 border-t-ink [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {biographyPanels.map((panel, i) => (
            <div
              key={`${panel.label}-${i}`}
              className={cn(
                "border-b border-border px-[1.375rem] py-[1.625rem]",
                i < biographyPanels.length - 1 && "md:border-r",
              )}
            >
              <p className="m-0 text-[15px] leading-relaxed text-ink-body">
                {panel.text}
              </p>
            </div>
          ))}
        </Reveal>

        <p className="mt-6">
          <Link href="/about" className="text-link font-mono text-[10px] uppercase tracking-[0.14em]">
            Biography →
          </Link>
        </p>
      </EditorialContainer>
    </HomeSection>
  );
}
