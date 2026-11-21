import * as React from "react";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { OWNER_ANNOUNCE, OWNER_META } from "../../content/pharmacyOwner";
import { JoinSection } from "./JoinSection";
import { OwnerCitiesSection } from "./OwnerCitiesSection";
import { OwnerConsoleSection } from "./OwnerConsoleSection";
import { OwnerHero } from "./OwnerHero";
import { OwnerOnlineSection } from "./OwnerOnlineSection";
import { OwnerPricingSection } from "./OwnerPricingSection";
import { OwnerStatusSection } from "./OwnerStatusSection";
import { OwnerStepsSection } from "./OwnerStepsSection";
import { WhyEarlySection } from "./WhyEarlySection";

export function scrollToJoinForm() {
  var n;
  (n = document.getElementById("demo")) == null ||
    n.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
}
export function PharmacyOwnerPage() {
  React.useEffect(() => {
    document.title = OWNER_META.title;
  }, []);
  return (
    <div className="nl-root">
      <div id="top">
        <div className="nl-announce">
          {"🟢 "}
          {OWNER_ANNOUNCE.before}
          <b>{OWNER_ANNOUNCE.city}</b>
          {OWNER_ANNOUNCE.after}
          <a
            href="#demo"
            onClick={(n) => {
              n.preventDefault();
              scrollToJoinForm();
            }}
          >
            {OWNER_ANNOUNCE.link}
          </a>
        </div>
        <SiteHeader fragmentPrefix="/" onBookDemo={scrollToJoinForm} />
        <OwnerHero />
        <OwnerStatusSection />
        <OwnerConsoleSection />
        <OwnerOnlineSection />
        <OwnerStepsSection />
        <WhyEarlySection />
        <OwnerPricingSection />
        <OwnerCitiesSection />
        <JoinSection />
        <SiteFooter fragmentPrefix="/" onBookDemo={scrollToJoinForm} />
      </div>
    </div>
  );
}
