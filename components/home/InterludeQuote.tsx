import { draftInterlude } from "@/content/homeDesign";
import { HomeSection } from "@/components/ui/HomeSection";
import { PlateKicker } from "@/components/ui/PlateKicker";
import { Reveal } from "@/components/ui/Reveal";

export function InterludeQuote() {
  return (
    <HomeSection sectionId="interludeA" variant="interlude" ariaLabelledBy="interlude-heading">
      <Reveal className="mx-auto max-w-[20ch]">
        <PlateKicker className="mb-[2.125rem]">Interlude</PlateKicker>
        <p
          id="interlude-heading"
          className="m-0 font-serif text-[clamp(1.75rem,4.6vw,4rem)] font-light italic leading-[1.16] tracking-[-0.01em] text-forest"
        >
          {draftInterlude}
        </p>
      </Reveal>
    </HomeSection>
  );
}
