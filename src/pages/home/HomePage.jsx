import * as React from "react";
import { useLocation } from "react-router";
import { useDemoDialog } from "../../components/DemoDialog";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { ConsoleShowcase } from "./ConsoleShowcase";
import { DifferentSection } from "./DifferentSection";
import { EcosystemSection } from "./EcosystemSection";
import { FaqSection } from "./FaqSection";
import { FeaturesSection } from "./FeaturesSection";
import { HomeCta } from "./HomeCta";
import { HomeHero } from "./HomeHero";
import { PricingSection } from "./PricingSection";
import { PromoPill } from "./PromoPill";
import { StepsSection } from "./StepsSection";
import { StoriesSection } from "./StoriesSection";
import { ToolsSection } from "./ToolsSection";

export function HomePage() {
  const { openDemo } = useDemoDialog(),
    [s, i] = React.useState("monthly");
  return (
    <div className="nl-root">
      <div id="top">
        <PromoPill />
        <div className="nl-announce">
          {"🚀 Now onboarding neighbourhood chemists across "}
          <b>Bengaluru</b>
          {" — "}
          <a
            href="#book-demo"
            onClick={(l) => {
              l.preventDefault();
              openDemo();
            }}
          >
            book a free demo →
          </a>
        </div>
        <SiteHeader fragmentPrefix="" onBookDemo={openDemo} />
        <HomeHero onBookDemo={openDemo} />
        <ConsoleShowcase />
        <FeaturesSection />
        <ToolsSection />
        <StepsSection />
        <DifferentSection />
        <PricingSection billing={s} setBilling={i} openDemo={openDemo} />
        <StoriesSection />
        <EcosystemSection />
        <FaqSection />
        <HomeCta onBookDemo={openDemo} />
        <SiteFooter fragmentPrefix="" onBookDemo={openDemo} />
      </div>
    </div>
  );
}
export function HomeRoute() {
  const { hash } = useLocation();
  React.useEffect(() => {
    if (!hash) return;
    const s = hash.replace(/^#/, ""),
      i = document.getElementById(s);
    if (!i) return;
    const l = requestAnimationFrame(() => {
      i.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
    return () => cancelAnimationFrame(l);
  }, [hash]);
  return <HomePage />;
}
