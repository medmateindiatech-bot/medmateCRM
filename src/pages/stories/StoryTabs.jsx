import { STORY_TABS } from "../../content/stories";

export function StoryTabs({ activeTab, onChange }) {
  return (
    <div className="nl-story-tabs" role="tablist" aria-label="Filter stories">
      {STORY_TABS.map((i) => (
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === i.id}
          className={`nl-story-tab${activeTab === i.id ? " active" : ""}`}
          onClick={() => onChange(i.id)}
          key={i.id}
        >
          {i.label}
        </button>
      ))}
    </div>
  );
}
