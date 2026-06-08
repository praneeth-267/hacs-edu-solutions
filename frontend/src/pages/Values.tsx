import SectionHead from "../components/ui/SectionHead";

const values = [
  { icon: "🛡️", title: "Integrity" },
  { icon: "⭐", title: "Excellence" },
  { icon: "💡", title: "Innovation" },
  { icon: "🤝", title: "Commitment" },
  { icon: "📚", title: "Continuous Learning" },
];

export default function Values() {
  return (
    <div className="page-wrap">

      <SectionHead
        title="Our Core Values"
        subtitle="These five values guide every interaction, service, and decision at HACS Edu Solutions."
      />

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        gap: "1.25rem",
      }}>
        {values.map(v => (
          <div key={v.title} style={{
            background: "#0a2b34",
            border: "1px solid rgba(83,209,230,0.14)",
            borderRadius: 16,
            padding: "2rem 1.25rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.875rem",
            textAlign: "center",
          }}>
            <span style={{ fontSize: "2rem" }}>{v.icon}</span>
            <h3 style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "1rem",
              color: "#edf9fb",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}>
              {v.title}
            </h3>
          </div>
        ))}
      </section>

    </div>
  );
}