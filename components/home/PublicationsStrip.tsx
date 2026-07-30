import Link from "next/link";
import { EditorialContainer } from "@/components/design/EditorialContainer";
import { HomeSection } from "@/components/ui/HomeSection";
import { PlateKicker } from "@/components/ui/PlateKicker";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";

export interface HomePublicationItem {
  year: string;
  title: string;
  type: string;
  featured: boolean;
}

interface PublicationsStripProps {
  title: string;
  publications: HomePublicationItem[];
}

export function PublicationsStrip({ title, publications }: PublicationsStripProps) {
  return (
    <HomeSection id="publications" sectionId="publications" variant="default" anchored className="border-b border-border">
      <EditorialContainer narrow>
        <PlateKicker className="mb-[clamp(1.75rem,4vh,2.75rem)]">{title}</PlateKicker>
        <SectionTitle id="publications-heading" className="sr-only">
          {title}
        </SectionTitle>
        <Reveal>
          {publications.map((pub, i) => (
            <div
              key={`${pub.year}-${pub.title}`}
              className={cn(
                "grid items-baseline gap-x-[clamp(0.875rem,2.5vw,2rem)] border-t border-border py-5",
                "grid-cols-[60px_1fr_auto]",
                i === publications.length - 1 && "border-b",
              )}
            >
              <span className={cn("font-mono text-[11px]", pub.featured ? "text-oxblood" : "text-ink")}>{pub.year}</span>
              <h3 className="m-0 font-serif text-[clamp(1.125rem,1.9vw,1.5rem)] font-normal leading-snug">{pub.title}</h3>
              <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-gold">{pub.type}</span>
            </div>
          ))}
        </Reveal>
        <p className="mt-8">
          <Link href="/publications" className="text-link font-mono text-[10px] uppercase tracking-[0.14em]">
            Complete publications →
          </Link>
        </p>
      </EditorialContainer>
    </HomeSection>
  );
}
