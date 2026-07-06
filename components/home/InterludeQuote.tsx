import { TODO, draftInterlude } from "@/content/draft";
import { HomeSection } from "@/components/ui/HomeSection";
import { Reveal } from "@/components/ui/Reveal";

export function InterludeQuote() {
  if (draftInterlude === TODO) {
    return null;
  }

  return (
    <HomeSection sectionId="interludeA" variant="interlude" ariaLabelledBy="interlude-heading">
      <Reveal className="mx-auto max-w-[52ch]">
        <p
          id="interlude-heading"
          className="m-0 text-[clamp(1rem,1.4vw,1.125rem)] leading-relaxed text-ink-body"
        >
          {draftInterlude}
        </p>
      </Reveal>
    </HomeSection>
  );
}
