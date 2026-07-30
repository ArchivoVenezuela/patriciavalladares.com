import Link from "next/link";
import { EditorialContainer } from "@/components/design/EditorialContainer";
import { EditorialRow } from "@/components/ui/EditorialRow";
import { HomeSection } from "@/components/ui/HomeSection";
import { PlateKicker } from "@/components/ui/PlateKicker";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

export interface InstrumentIndexItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  featured: boolean;
  slug: string;
  italic: boolean;
}

interface InstrumentsIndexProps {
  heading: string;
  items: InstrumentIndexItem[];
  tinaFields?: {
    heading?: string;
  };
}

export function InstrumentsIndex({
  heading,
  items,
  tinaFields,
}: InstrumentsIndexProps) {
  return (
    <HomeSection id="projects" sectionId="projects" variant="default" anchored className="border-b border-border">
      <EditorialContainer>
        <div
          className="mb-[clamp(2rem,5vh,3.25rem)]"
          data-tina-field={tinaFields?.heading}
        >
          <PlateKicker>{heading}</PlateKicker>
          <SectionTitle id="projects-heading">{heading}</SectionTitle>
        </div>
        <Reveal>
          {items.map((item, i) => (
            <EditorialRow
              key={item.slug}
              index={item.number}
              featured={item.featured}
              borderBottom={i === items.length - 1}
              title={
                item.italic ? (
                  <em>{item.title}</em>
                ) : (
                  <Link href={`/projects/${item.slug}`} className="no-underline hover:text-oxblood">
                    {item.title}
                  </Link>
                )
              }
              subtitle={item.subtitle}
              description={item.description}
            />
          ))}
        </Reveal>
      </EditorialContainer>
    </HomeSection>
  );
}
