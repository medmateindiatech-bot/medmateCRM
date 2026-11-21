import { PRIVACY_POLICY } from "../../content/legal";
import { LegalPage } from "./LegalPage";

export function PrivacyPage() {
  return (
    <LegalPage
      title={PRIVACY_POLICY.title}
      lastUpdated={PRIVACY_POLICY.lastUpdated}
      sections={PRIVACY_POLICY.sections}
    />
  );
}
