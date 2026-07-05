import { draftHero, mastheadTagline } from "@/content/homeDesign";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Masthead() {
  return (
    <section
      id="top"
      data-section="hero"
      className="section-x flex min-h-[calc(100vh-58px)] scroll-anchor-hero flex-col justify-between border-b border-border pb-[clamp(1.75rem,4vh,2.75rem)] pt-[clamp(1.875rem,5vh,3.25rem)]"
    >
      <div className="flex items-baseline justify-between plate-kicker plate-kicker-gold">
        <span>{draftHero.plate}</span>
        <span className="text-ink-muted">{draftHero.plateMeta}</span>
      </div>

      <div className="editorial-container !px-0">
        <p className="mb-[clamp(1.125rem,3vh,1.875rem)] font-mono text-[11px] uppercase tracking-[0.24em] text-oxblood">
          {draftHero.kicker}
        </p>
        <SectionTitle as="h1" size="display">
          How is cultural knowledge preserved when institutions{" "}
          <span className="italic text-forest">collapse</span>, communities{" "}
          <span className="italic text-forest">migrate</span>, while political
          power, and digital technologies increasingly mediate what is{" "}
          <span className="italic text-oxblood">remembered</span> and how?
        </SectionTitle>
        <p className="mt-[clamp(1.25rem,3vh,2rem)] max-w-[52ch] text-[clamp(1rem,1.4vw,1.1875rem)] leading-relaxed text-ink-body">
          {draftHero.lede}
        </p>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-5 border-t border-border pt-5">
        <p className="m-0 max-w-[44ch] text-[clamp(1rem,1.4vw,1.1875rem)] leading-normal text-ink-body">
          {mastheadTagline}
        </p>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
          {draftHero.scrollHint}
        </span>
      </div>
    </section>
  );
}
