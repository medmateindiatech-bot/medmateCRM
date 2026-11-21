import * as React from "react";
import { useDemoDialog } from "../../components/DemoDialog";
import { SiteLayout } from "../../components/SiteLayout";
import { AboutCta } from "./AboutCta";
import { AboutIntro } from "./AboutIntro";
import { FounderMessage } from "./FounderMessage";
import { FounderStory } from "./FounderStory";
import { TeamSection } from "./TeamSection";
import { ValuesSection } from "./ValuesSection";

export function AboutPage() {
  const { openDemo } = useDemoDialog();
  React.useEffect(() => {
    document.title = "About Us — Our Story & Founder | Namma MedMate Bengaluru";
  }, []);
  return (
    <SiteLayout>
      <AboutIntro />
      <FounderStory />
      <FounderMessage />
      <ValuesSection />
      <TeamSection />
      <AboutCta onBookDemo={openDemo} />
    </SiteLayout>
  );
}
