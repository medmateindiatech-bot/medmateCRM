export function Honeypot({ value, onChange }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-10000px",
        top: "auto",
        width: "1px",
        height: "1px",
        overflow: "hidden",
      }}
    >
      <input
        aria-label="Company website"
        name="company-website"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(i) => onChange(i.target.value)}
      />
    </div>
  );
}
