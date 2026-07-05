import type { Metadata } from "next";
import { AboutThroughWork } from "@/components/home/AboutThroughWork";
import { ArchiveSection } from "@/components/home/ArchiveSection";
import { CorrespondenceFooter } from "@/components/home/CorrespondenceFooter";
import { CriticalAI } from "@/components/home/CriticalAI";
import { CurrentResearchQuestions } from "@/components/home/CurrentResearchQuestions";
import { HomeHeader } from "@/components/home/HomeHeader";
import { InstrumentsGraph } from "@/components/home/InstrumentsGraph";
import { InstrumentsIndex } from "@/components/home/InstrumentsIndex";
import { InterludeQuote } from "@/components/home/InterludeQuote";
import { Masthead } from "@/components/home/Masthead";
import { MigrationMap } from "@/components/home/MigrationMap";
import { ProgramTimeline } from "@/components/home/ProgramTimeline";
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
      <InterludeQuote />
      <InstrumentsGraph />
      <ArchiveSection />
      <MigrationMap />
      <CriticalAI />
      <CurrentResearchQuestions />
      <InstrumentsIndex />
      <ProgramTimeline />
      <PublicationsStrip />
      <AboutThroughWork />
      <CorrespondenceFooter />
    </div>
  );
}
