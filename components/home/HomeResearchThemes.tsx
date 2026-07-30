import Link from "next/link";
import { EditorialContainer } from "@/components/design/EditorialContainer";
import { ThemeIndexItem } from "@/components/content/ThemeIndexItem";
import { HomeSection } from "@/components/ui/HomeSection";
import { PlateKicker } from "@/components/ui/PlateKicker";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

interface HomeResearchThemesProps {
  kicker: string;
  title: string;
  themes: { id: string; title: string; description: string }[];
  tinaFields?: {
    kicker?: string;
    title?: string;
    themes?: string;
  };
}

export function HomeResearchThemes({
  kicker,
  title,
  themes,
  tinaFields,
}: HomeResearchThemesProps) {
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
          <div data-tina-field={tinaFields?.kicker}>
            <PlateKicker>{kicker}</PlateKicker>
          </div>
          <div data-tina-field={tinaFields?.title}>
            <SectionTitle id="themes-heading">{title}</SectionTitle>
          </div>
        </div>
        <div data-tina-field={tinaFields?.themes}>
          <Reveal className="space-y-2">
            {themes.map((theme, index) => (
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
        </div>
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
