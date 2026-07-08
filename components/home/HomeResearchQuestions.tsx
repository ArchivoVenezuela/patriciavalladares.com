import Link from "next/link";
import { EditorialContainer } from "@/components/design/EditorialContainer";
import { HomeSection } from "@/components/ui/HomeSection";
import { PlateKicker } from "@/components/ui/PlateKicker";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { getResearchQuestionsContent, sectionTitles } from "@/lib/content";
import { cn } from "@/lib/utils";

export function HomeResearchQuestions() {
  const { questions } = getResearchQuestionsContent();
  return (
    <HomeSection
      id="inquiry"
      sectionId="inquiry"
      variant="default"
      anchored
      ariaLabelledBy="inquiry-heading"
      className="border-b border-border"
    >
      <EditorialContainer>
        <div className="mb-[clamp(2rem,5vh,3.25rem)]">
          <PlateKicker>{sectionTitles.researchProgram}</PlateKicker>
          <SectionTitle id="inquiry-heading">
            Current Research Questions
          </SectionTitle>
        </div>
        <Reveal>
          <ol className="m-0 list-none border-t-2 border-t-ink p-0">
            {questions.map((question, index) => (
              <li
                key={question}
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
                <p className="m-0 max-w-[60ch] font-serif text-[clamp(1.125rem,1.8vw,1.375rem)] leading-snug text-ink">
                  {question}
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
