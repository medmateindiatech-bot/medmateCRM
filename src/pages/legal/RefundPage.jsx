import { REFUND_POLICY } from "../../content/legal";
import { LegalPage } from "./LegalPage";

export function RefundPage() {
  return (
    <LegalPage
      title={REFUND_POLICY.title}
      lastUpdated={REFUND_POLICY.lastUpdated}
      sections={REFUND_POLICY.sections}
    />
  );
}
