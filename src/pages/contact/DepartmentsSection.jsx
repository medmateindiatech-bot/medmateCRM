import { MailIcon, PhoneIcon } from "../../components/icons";
import { DEPARTMENTS } from "../../content/contact";

export function DepartmentsSection() {
  return (
    <section
      className="nl-sec"
      style={{
        background: "#fff",
        paddingTop: 0,
      }}
    >
      <div className="nl-wrap">
        <div className="nl-feat-grid nl-grid-2">
          {DEPARTMENTS.map((n) => (
            <div className="nl-dept" key={n.title}>
              <h3>{n.title}</h3>
              <p className="purpose">{n.purpose}</p>
              <div className="nl-dept-row">
                <MailIcon /> <a href={`mailto:${n.email}`}>{n.email}</a>
              </div>
              <div className="nl-dept-row">
                <PhoneIcon /> <a href={`tel:${n.tel}`}>{n.phone}</a>
              </div>
              <div className="nl-dept-hours">{n.hours}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
