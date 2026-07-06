import type { Metadata } from "next";
import { ArchiveSection } from "@/components/home/ArchiveSection";
import { CorrespondenceFooter } from "@/components/home/CorrespondenceFooter";
import { CriticalAI } from "@/components/home/CriticalAI";
import { HomeHeader } from "@/components/home/HomeHeader";
import { HomeResearchQuestions } from "@/components/home/HomeResearchQuestions";
import { HomeResearchThemes } from "@/components/home/HomeResearchThemes";
import { InstrumentsIndex } from "@/components/home/InstrumentsIndex";
import { Masthead } from "@/components/home/Masthead";
import { PublicationsStrip } from "@/components/home/PublicationsStrip";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = createPageMetadata({
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <div className="min-h-screen bg-paper">
      <HomeHeader />
      <Masthead />
      <InstrumentsIndex />
      <HomeResearchThemes />
      <HomeResearchQuestions />
      <ArchiveSection />
      <CriticalAI />
      <PublicationsStrip />
      <CorrespondenceFooter />
    </div>
  );
}
