import * as React from "react";
import { useDemoDialog } from "../../components/DemoDialog";
import { SiteLayout } from "../../components/SiteLayout";
import { STORIES } from "../../content/stories";
import { StoriesCta } from "./StoriesCta";
import { StoryCard } from "./StoryCard";
import { StoryTabs } from "./StoryTabs";

export function StoriesPage() {
  const { openDemo } = useDemoDialog(),
    [s, i] = React.useState("all"),
    l = s === "all" ? STORIES : STORIES.filter((c) => c.tab === s);
  React.useEffect(() => {
    document.title = "Customer Stories | Namma MedMate Bengaluru";
  }, []);
  return (
    <SiteLayout>
      <section
        className="nl-sec"
        style={{
          background: "linear-gradient(180deg, #eef5f0, #fff)",
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
              Customer stories
            </span>
            <h1 className="nl-about-h1">Built for every kind of pharmacy</h1>
            <p>
              Video stories are being filmed with our early partners across Bengaluru. Until they're live,
              here's how different kinds of pharmacies put Namma MedMate to work every day.
            </p>
          </div>
        </div>
      </section>
      <section
        className="nl-sec"
        style={{
          background: "#fff",
          paddingTop: 20,
        }}
      >
        <div className="nl-wrap">
          <StoryTabs activeTab={s} onChange={i} />
          <div className="nl-story-grid">
            {l.map((c) => (
              <StoryCard story={c} key={c.id} />
            ))}
          </div>
        </div>
      </section>
      <StoriesCta onBookDemo={openDemo} />
    </SiteLayout>
  );
}
