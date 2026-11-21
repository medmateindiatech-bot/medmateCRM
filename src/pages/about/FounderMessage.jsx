import { PlayIcon } from "../../components/icons";

export function FounderMessage() {
  return (
    <section
      className="nl-sec"
      style={{
        background: "#fff",
        paddingTop: 0,
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
            In his words
          </span>
          <h2>A message from our founder</h2>
          <p>
            Roni on why Namma MedMate exists — and what he wants it to mean for every neighbourhood chemist.
          </p>
        </div>
        <div className="nl-founder-video">
          <figure className="nl-video">
            <button
              type="button"
              className="nl-video-thumb is-soon"
              style={{
                aspectRatio: "16 / 9",
              }}
              aria-label="Why we built Namma MedMate — video coming soon"
            >
              <span className="nl-video-play" aria-hidden>
                <PlayIcon />
              </span>
              <span className="nl-video-soon">Video coming soon</span>
            </button>
            <figcaption className="nl-video-cap">
              <span className="nl-video-kicker">Founder story</span>
              <b>Why we built Namma MedMate</b>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
