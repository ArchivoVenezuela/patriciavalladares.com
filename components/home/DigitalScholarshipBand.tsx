import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeContent } from "@/content/home";
import { Kicker } from "@/components/editorial/Kicker";
import { Rule } from "@/components/editorial/Rule";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/ui/Reveal";

export function DigitalScholarshipBand() {
  const { digitalScholarshipBand } = homeContent;

  return (
    <section
      className="bg-ink-band py-section text-paper md:py-section-lg"
      aria-labelledby="digital-scholarship-band"
    >
      <Container>
        <Reveal>
          <Kicker className="mb-2 text-paper/60">Methods</Kicker>
          <h2
            id="digital-scholarship-band"
            className="font-display text-section font-medium text-paper"
          >
            {digitalScholarshipBand.title}
          </h2>
          <Rule className="mt-5 max-w-xs" variant="gold" />
          <p className="mt-8 max-w-3xl text-base leading-relaxed text-paper/80">
            {digitalScholarshipBand.summary}
          </p>
          <p className="mt-8">
            <Link
              href="/digital-scholarship"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold-light no-underline transition-colors hover:text-paper"
            >
              Digital Scholarship &amp; Research Infrastructure
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
