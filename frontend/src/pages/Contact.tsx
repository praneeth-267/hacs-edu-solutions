import SectionHead from "../components/ui/SectionHead";

const contactItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#53d1e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.4 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.45 5.45l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
      </svg>
    ),
    label: "Phone",
    value: "+917981324880",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#53d1e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M22 7l-10 7L2 7"/>
      </svg>
    ),
    label: "Email",
    value: "Hacsap2025@gmail.com",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#53d1e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    label: "Website",
    value: "www.hacsedusolutions.com",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#53d1e6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Address",
    value: "2nd floor, Jagannath mansion, opp Axis bank, venkat nagar, Kakinada - 533003",
  },
];

export default function Contact() {
  return (
    <div className="page-wrap">

      <SectionHead
        title="Contact Us"
        />

      {/* ── CTA Banner ── */}
      <section style={{
        background: "#0a2b34",
        border: "1px solid rgba(83,209,230,0.15)",
        borderRadius: 20,
        padding: "3rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.25rem",
        textAlign: "center",
      }}>

        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.3rem 0.875rem",
          borderRadius: 999,
          border: "1px solid rgba(83,209,230,0.25)",
          background: "rgba(83,209,230,0.06)",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#53d1e6" }} />
          <span style={{ fontSize: "0.65rem", color: "#a8d9e4", textTransform: "uppercase", letterSpacing: "0.2em" }}>
            Reach Out Today
          </span>
        </div>

        <h2 style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          color: "#edf9fb",
          textTransform: "uppercase",
          letterSpacing: "0.03em",
          lineHeight: 1.1,
        }}>
          Let's Build Something Together
        </h2>

        <p style={{
          color: "#a8d9e4",
          fontSize: "0.9rem",
          lineHeight: 1.75,
          maxWidth: 560,
        }}>
          Whether you are a student seeking guidance or an institution looking for
          professional educational support, HACS Edu Solutions is here to help.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href="tel:+917981324880"
            style={{
              padding: "0.7rem 1.75rem",
              borderRadius: 999,
              background: "#53d1e6",
              color: "#071e25",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              boxShadow: "0 0 24px rgba(83,209,230,0.2)",
            }}
          >
            Call Us Now
          </a>
          <a
            href="mailto:Hacsap2025@gmail.com"
            style={{
              padding: "0.7rem 1.75rem",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            Send an Email
          </a>
        </div>

        <p style={{
          fontFamily: "'Oswald', sans-serif",
          color: "#53d1e6",
          fontSize: "1rem",
          fontStyle: "italic",
          letterSpacing: "0.04em",
          marginTop: "0.5rem",
        }}>
          "Building Futures Through Education."
        </p>
      </section>

      {/* ── Contact Info Cards ── */}
<section style={{
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "1.25rem",
  alignItems: "stretch",
}}>
  {contactItems.map(item => (
    <div key={item.label} style={{
      background: "#0a2b34",
      border: "1px solid rgba(83,209,230,0.14)",
      borderRadius: 16,
      padding: "1.5rem",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    }}>
      <div style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: "rgba(83,209,230,0.08)",
        border: "1px solid rgba(83,209,230,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        {item.icon}
      </div>
      <div>
        <p style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: "0.75rem",
          color: "#53d1e6",
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          marginBottom: "0.375rem",
        }}>
          {item.label}
        </p>
        <p style={{ color: "#edf9fb", fontSize: "0.95rem", lineHeight: 1.6 }}>
          {item.value}
        </p>
      </div>
    </div>
  ))}
</section>

    </div>
  );
}