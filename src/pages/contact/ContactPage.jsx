import * as React from "react";
import { SiteLayout } from "../../components/SiteLayout";
import { ContactFormSection } from "./ContactFormSection";
import { DepartmentsSection } from "./DepartmentsSection";
import { OfficesSection } from "./OfficesSection";

export function ContactPage() {
  React.useEffect(() => {
    document.title = "Contact Us | Namma MedMate Bengaluru";
  }, []);
  return (
    <SiteLayout>
      <section
        className="nl-sec"
        style={{
          background: "var(--surface)",
          paddingBottom: 40,
        }}
      >
        <div className="nl-wrap">
          <div className="nl-sec-head">
            <span
              className="nl-eyebrow"
              style={{
                justifyContent: "center",
              }}
            >
              Real humans. Real fast.
            </span>
            <h2>Pick the right inbox</h2>
            <p>
              We read every email. For live help with an order, the in-app chat is the fastest way to reach
              us.
            </p>
          </div>
        </div>
      </section>
      <DepartmentsSection />
      <ContactFormSection />
      <OfficesSection />
    </SiteLayout>
  );
}
