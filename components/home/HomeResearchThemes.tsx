import Link from "next/link";
import { EditorialContainer } from "@/components/design/EditorialContainer";
import { ThemeIndexItem } from "@/components/content/ThemeIndexItem";
import { HomeSection } from "@/components/ui/HomeSection";
import { PlateKicker } from "@/components/ui/PlateKicker";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { draftSectionTitles, draftThemes } from "@/content/draft";

export function HomeResearchThemes() {
  return (
    <HomeSection
      id="themes"
      sectionId="themes"
      variant="light"
      anchored
      ariaLabelledBy="themes-heading"
      className="border-b border-border"
    >
      <EditorialContainer>
        <div className="mb-[clamp(2rem,5vh,3.25rem)]">
          <PlateKicker>{draftSectionTitles.researchThemes}</PlateKicker>
          <SectionTitle id="themes-heading">{draftSectionTitles.researchThemes}</SectionTitle>
        </div>
        <Reveal className="space-y-2">
          {draftThemes.map((theme, index) => (
            <ThemeIndexItem
              key={theme.id}
              theme={{
                id: theme.id,
                number: String(index + 1).padStart(2, "0"),
                title: theme.title,
                description: theme.description,
              }}
            />
          ))}
        </Reveal>
        <p className="mt-10">
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
