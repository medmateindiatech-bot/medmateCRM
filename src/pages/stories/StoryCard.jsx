import { PlayIcon, TickIcon } from "../../components/icons";

export function StoryCard({ story }) {
  return (
    <article className="nl-story">
      <figure className="nl-video">
        <button
          type="button"
          className="nl-video-thumb is-soon"
          style={{
            aspectRatio: "16 / 9",
          }}
          aria-label="Video — story coming soon"
        >
          <span className="nl-video-avatar" aria-hidden>
            {story.avatar}
          </span>
          <span className="nl-video-play" aria-hidden>
            <PlayIcon />
          </span>
          <span className="nl-video-soon">Story coming soon</span>
        </button>
      </figure>
      <div className="nl-story-body">
        <span className="nl-story-type">{story.type}</span>
        <h3>{story.title}</h3>
        <p className="nl-story-chal">{story.challenge}</p>
        <ul className="nl-story-uses">
          {story.uses.map((s) => (
            <li key={s}>
              <TickIcon />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
