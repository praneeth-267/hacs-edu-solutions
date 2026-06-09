import { NavLink, Link } from "react-router-dom";

export default function Footer() {
  const colHead: React.CSSProperties = {
    fontFamily: "'Oswald', sans-serif",
    fontSize: "0.7rem",
    color: "#FAFAF7",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    marginBottom: "1rem",
  };

  const linkStyle: React.CSSProperties = {
    display: "block",
    color: "#FAFAF7",
    fontSize: "0.8rem",
    textDecoration: "none",
    marginBottom: "0.6rem",
    transition: "color 0.15s",
  };

  const tagStyle: React.CSSProperties = {
    display: "inline-block",
    padding: "0.2rem 0.6rem",
    borderRadius: 999,
    border: "1px solid rgba(30,58,95,0.15)",
    color: "#FAFAF7",
    fontSize: "0.72rem",
    marginBottom: "0.4rem",
    marginRight: "0.4rem",
  };

  return (
    <footer style={{
      background: "#1E3A5F",
      borderTop: "1px solid rgba(30,58,95,0.1)",
      marginTop: "auto",
    }}>

      {/* ── Main Grid ── */}
      <div className="footer-grid" style={{
        width: "min(calc(100% - 3rem), 1160px)",
        margin: "0 auto",
        padding: "3.5rem 0 2.5rem",
        display: "grid",
        gridTemplateColumns: "1.7fr 1fr 1fr",
        gap: "2.5rem",
        alignItems: "start",
      }}>

        {/* Col 1 — Company */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <NavLink
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none" }}
          >
            <div style={{
              width: 36, height: 36, borderRadius: 10, flexShrink: 0,
              background: "linear-gradient(135deg,#FAFAF7,#1E3A5F)",
              color: "#1A2E45", display: "flex", alignItems: "center",
              justifyContent: "center", fontFamily: "'Oswald',sans-serif",
              fontWeight: 700, fontSize: "1.1rem",
            }}>H</div>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{
                fontFamily: "'Oswald',sans-serif", fontSize: "0.95rem",
                color: "#FAFAF7", fontWeight: 700,
              }}>
                HACS Edu Solutions
              </div>
              <div style={{ fontSize: "0.6rem", color: "#B8860B", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Munuru Group OPC Pvt Ltd
              </div>
            </div>
          </NavLink>

          <p style={{ color: "#FAFAF7", fontSize: "0.8rem", lineHeight: 1.75, maxWidth: 280 }}>
            Empowering Education, Enabling Success.
          </p>

          <div>
            {["Academic Support", "Career Guidance", "Skill Development", "Institutional Services"].map(tag => (
              <span key={tag} style={tagStyle}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Col 2 — Services */}
        <div>
          <p style={colHead}>Services</p>
          {[
            { label: "Student Services", section: "student" },
{ label: "Institutional Services", section: "institutional" },
{ label: "Consultancy Services", section: "consultancy" },
{ label: "Training & Workshops", section: "institutional" },
{ label: "Academic Mentoring", section: "student" },
          ].map(s => (
            <Link
  key={s.label}
  to="/services"
  state={{ section: s.section }}
  style={linkStyle}
  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#FAFAF7")}
  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#FAFAF7")}
>
  {s.label}
</Link>
          ))}
        </div>

        {/* Col 3 — Quick Links */}
        <div>
          <p style={colHead}>Quick Links</p>
          {([
            ["Home", "/"],
            ["About Us", "/about"],
            ["Services", "/services"],
            ["Why Choose Us", "/why-us"],
            ["Our Values", "/values"],
            ["Contact Us", "/contact"],
          ] as [string, string][]).map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => window.scrollTo(0, 0)}
              style={linkStyle}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#FAFAF7")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#FAFAF7")}
            >
              {label}
            </NavLink>
          ))}
        </div>

      </div>

      {/* ── Bottom Bar ── */}
      <div style={{
        width: "100%",
        background: "#1E3A5F",
        borderTop: "1px solid rgba(30,58,95,0.1)",
      }}>
        <div style={{
          width: "min(calc(100% - 3rem), 1160px)",
          margin: "0 auto",
          padding: "1.25rem 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}>
            <p style={{ color: "#FAFAF7", fontSize: "0.72rem" }}>
            © 2026 HACS Edu Solutions. All Rights Reserved.
          </p>
            <p style={{ color: "#FAFAF7", fontSize: "0.72rem", fontStyle: "italic" }}>
            "Building Futures Through Education."
          </p>
        </div>
      </div>

    </footer>
  );
}