import { TERMS_OF_SERVICE } from "../../content/legal";
import { LegalPage } from "./LegalPage";

export function TermsPage() {
  return (
    <LegalPage
      title={TERMS_OF_SERVICE.title}
      lastUpdated={TERMS_OF_SERVICE.lastUpdated}
      sections={TERMS_OF_SERVICE.sections}
    />
  );
}
