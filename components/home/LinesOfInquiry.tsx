import Link from "next/link";
import { researchThemes } from "@/content/themes";
import { ThemeIndexItem } from "@/components/content/ThemeIndexItem";
import { Kicker } from "@/components/editorial/Kicker";
import { Rule } from "@/components/editorial/Rule";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export function LinesOfInquiry() {
  return (
    <section className="py-section md:py-section-lg" aria-labelledby="lines-of-inquiry">
      <Container>
        <Reveal>
          <Kicker className="mb-2">Research Program</Kicker>
          <h2
            id="lines-of-inquiry"
            className="font-display text-section font-medium text-ink"
          >
            Lines of Inquiry
          </h2>
          <Rule className="mt-5 max-w-xs" />
        </Reveal>
        <div className="mt-12 space-y-2">
          {researchThemes.map((theme) => (
            <Reveal key={theme.id}>
              <ThemeIndexItem theme={theme} href="/research" />
            </Reveal>
          ))}
        </div>
        <p className="mt-10">
          <Link href="/research" className="text-link text-sm font-medium">
            View Research Program →
          </Link>
        </p>
      </Container>
    </section>
  );
}
