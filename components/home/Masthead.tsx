import { EditorialContainer } from "@/components/design/EditorialContainer";
import { draftLandingHero } from "@/content/draft";

export function Masthead() {
  const hero = draftLandingHero;

  return (
    <section
      id="top"
      data-section="hero"
      className="section-x border-b border-border bg-paper-light py-[clamp(3rem,8vh,5.5rem)]"
    >
      <EditorialContainer>
        <div className="mb-[clamp(2rem,5vh,3.5rem)] flex items-baseline justify-between gap-6 border-b border-border pb-5">
          <p className="plate-kicker plate-kicker-gold m-0">{hero.label}</p>
          <p className="m-0 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
            {hero.figureLabel}
          </p>
        </div>

        <div className="grid items-start gap-[clamp(2.5rem,6vw,5rem)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-x-[clamp(2rem,5vw,4rem)]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h1 className="hero-name m-0 max-w-[14ch] text-ink">
              {hero.name}
            </h1>
            <div className="mt-8 max-w-[28ch] border-t border-border pt-6">
              <p className="m-0 font-serif text-[clamp(1.0625rem,1.5vw,1.25rem)] leading-snug text-ink">
                {hero.titleLine}
              </p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                {hero.institution}
              </p>
            </div>
          </div>

          <div className="max-w-[65ch] space-y-6 text-[1.0625rem] leading-[1.75] text-ink-body">
            {hero.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="m-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </EditorialContainer>
    </section>
  );
}
