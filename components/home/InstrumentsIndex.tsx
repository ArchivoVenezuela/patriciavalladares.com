import Link from "next/link";
import { EditorialContainer } from "@/components/design/EditorialContainer";
import { EditorialRow } from "@/components/ui/EditorialRow";
import { HomeSection } from "@/components/ui/HomeSection";
import { PlateKicker } from "@/components/ui/PlateKicker";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { draftSectionTitles, instrumentIndex } from "@/content/homeDesign";

export function InstrumentsIndex() {
  return (
    <HomeSection id="projects" sectionId="projects" variant="default" anchored className="border-b border-border">
      <EditorialContainer>
        <div className="mb-[clamp(2rem,5vh,3.25rem)]">
          <PlateKicker>{draftSectionTitles.researchProjects}</PlateKicker>
          <SectionTitle id="projects-heading">{draftSectionTitles.researchProjects}</SectionTitle>
        </div>
        <Reveal>
          {instrumentIndex.map((item, i) => (
            <EditorialRow
              key={item.slug}
              index={item.number}
              featured={item.featured}
              borderBottom={i === instrumentIndex.length - 1}
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
