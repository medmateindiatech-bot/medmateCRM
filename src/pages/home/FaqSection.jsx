import { PlusIcon } from "../../components/icons";
import { FAQS } from "../../content/site";

export function FaqItem({ question, answer }) {
  return (
    <details className="nl-faq">
      <summary>
        {question}
        <span className="plus">
          <PlusIcon />
        </span>
      </summary>
      <div className="nl-faq-body">{answer}</div>
    </details>
  );
}
export function FaqSection() {
  return (
    <section
      className="nl-sec"
      style={{
        background: "#fff",
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
            Questions
          </span>
          <h2>Everything you might ask</h2>
        </div>
        <div className="nl-faq-wrap">
          {FAQS.map((n) => (
            <FaqItem question={n.q} answer={n.a} key={n.q} />
          ))}
        </div>
      </div>
    </section>
  );
}
