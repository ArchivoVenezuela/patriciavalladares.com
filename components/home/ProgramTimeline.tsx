import { EditorialContainer } from "@/components/design/EditorialContainer";
import { HomeSection } from "@/components/ui/HomeSection";
import { PlateKicker } from "@/components/ui/PlateKicker";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { draftSectionTitles, programTimeline } from "@/content/homeDesign";
import { cn, isPendingCopy } from "@/lib/utils";

export function ProgramTimeline() {
  const hasContent = programTimeline.some(
    (item) => !isPendingCopy(item.title) && !isPendingCopy(item.note),
  );

  if (!hasContent) {
    return null;
  }

  return (
    <HomeSection sectionId="timeline" variant="light" className="border-b border-border">
      <EditorialContainer narrow>
        <PlateKicker className="mb-[clamp(1.75rem,4vh,2.75rem)]">
          {draftSectionTitles.researchProgram}
        </PlateKicker>
        <SectionTitle id="timeline-heading" className="sr-only">
          {draftSectionTitles.researchProgram}
        </SectionTitle>
        <Reveal className="grid border-t-2 border-t-ink [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))]">
          {programTimeline.map((item, i) => (
            <div
              key={`${item.year}-${item.title}`}
              className={cn("px-4 py-[1.375rem]", i < programTimeline.length - 1 && "border-r border-border")}
            >
              <div className="mb-3 font-mono text-sm text-ink">{item.year}</div>
              <h3 className="font-serif text-[17px] font-normal leading-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] leading-snug text-ink-muted">{item.note}</p>
            </div>
          ))}
        </Reveal>
      </EditorialContainer>
    </HomeSection>
  );
}
