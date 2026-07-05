import Link from "next/link";
import { EditorialContainer } from "@/components/design/EditorialContainer";
import { HomeSection } from "@/components/ui/HomeSection";
import { PlateKicker } from "@/components/ui/PlateKicker";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { researchQuestions } from "@/content/themes";
import { cn } from "@/lib/utils";

export function CurrentResearchQuestions() {
  return (
    <HomeSection
      id="inquiry"
      sectionId="inquiry"
      variant="light"
      anchored
      ariaLabelledBy="inquiry-heading"
      className="border-b border-border"
    >
      <EditorialContainer>
        <div className="mb-[clamp(2rem,5vh,3.25rem)]">
          <PlateKicker>Pl. 01 — Inquiry</PlateKicker>
          <SectionTitle id="inquiry-heading">
            Current Research Questions
          </SectionTitle>
        </div>

        <Reveal>
          <ol className="m-0 list-none border-t-2 border-t-ink p-0">
            {researchQuestions.map((item, index) => (
              <li
                key={item.id}
                className={cn(
                  "grid gap-4 border-b border-border py-6",
                  "md:grid-cols-[3.5rem_minmax(0,1fr)] md:items-baseline",
                )}
              >
                <span
                  className="font-mono text-[11px] tabular-nums text-gold"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="m-0 font-serif text-[clamp(1.125rem,2vw,1.5rem)] leading-snug text-ink">
                  {item.question}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        <p className="mt-8">
          <Link
            href="/research"
            className="text-link font-mono text-[10px] uppercase tracking-[0.14em]"
          >
            Research Program →
          </Link>
        </p>
      </EditorialContainer>
    </HomeSection>
  );
}
