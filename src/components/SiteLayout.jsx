import { useDemoDialog } from "./DemoDialog";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteLayout({ children }) {
  const { openDemo } = useDemoDialog();
  return (
    <div className="nl-root">
      <div id="top">
        <SiteHeader fragmentPrefix="/" onBookDemo={openDemo} />
        {children}
        <SiteFooter fragmentPrefix="/" onBookDemo={openDemo} />
      </div>
    </div>
  );
}
