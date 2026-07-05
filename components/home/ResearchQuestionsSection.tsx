import { researchQuestions } from "@/content/themes";
import { ResearchQuestion } from "@/components/research/ResearchQuestion";
import { Kicker } from "@/components/editorial/Kicker";
import { Rule } from "@/components/editorial/Rule";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ResearchQuestionsSection() {
  return (
    <section
      className="border-y border-border bg-surface py-section md:py-section-lg"
      aria-labelledby="current-research-questions"
    >
      <Container>
        <Reveal>
          <Kicker className="mb-2">Inquiry</Kicker>
          <h2
            id="current-research-questions"
            className="font-display text-section font-medium text-ink"
          >
            Current Research Questions
          </h2>
          <Rule className="mt-5 max-w-xs" />
        </Reveal>
        <div className="mt-12 space-y-8 max-w-3xl">
          {researchQuestions.map((item, index) => (
            <Reveal key={item.id}>
              <ResearchQuestion item={item} index={index + 1} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
