import { NavLink, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const goToService = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/services");
      setTimeout(() => {
        const target = document.getElementById(sectionId);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  const colHead: React.CSSProperties = {
    fontFamily: "'Oswald', sans-serif",
    fontSize: "0.7rem",
    color: "#53d1e6",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    marginBottom: "1rem",
  };

  const linkStyle: React.CSSProperties = {
    display: "block",
    color: "#7fbfcc",
    fontSize: "0.8rem",
    textDecoration: "none",
    marginBottom: "0.6rem",
    transition: "color 0.15s",
  };

  const btnLink: React.CSSProperties = {
    display: "block",
    background: "none",
    border: "none",
    padding: 0,
    color: "#7fbfcc",
    fontSize: "0.8rem",
    textAlign: "left",
    cursor: "pointer",
    marginBottom: "0.6rem",
    transition: "color 0.15s",
  };

  return (
    <footer style={{
      background: "#0E333D",
      borderTop: "1px solid rgba(83,209,230,0.1)",
      marginTop: "auto",
    }}>

      {/* ── Main Grid ── */}
      <div style={{
        width: "min(calc(100% - 3rem), 1160px)",
        margin: "0 auto",
        padding: "3.5rem 0 2.5rem",
        display: "grid",
        gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
        gap: "2.5rem",
        alignItems: "start",
      }}>

        {/* Col 1 — Brand */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <NavLink
            to="/"
            style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none" }}
          >
            <div style={{
              width: 36, height: 36, borderRadius: 10, flexShrink: 0,
              background: "linear-gradient(135deg,#edf9fb,#53d1e6)",
              color: "#071e25", display: "flex", alignItems: "center",
              justifyContent: "center", fontFamily: "'Oswald',sans-serif",
              fontWeight: 700, fontSize: "1.1rem",
            }}>H</div>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{
                fontFamily: "'Oswald',sans-serif", fontSize: "0.95rem",
                color: "#edf9fb", fontWeight: 700,
              }}>
                HACS Edu Solutions
              </div>
              <div style={{ fontSize: "0.6rem", color: "#5aabb8", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Munuru Group OPC Pvt Ltd
              </div>
            </div>
          </NavLink>

          <p style={{ color: "#7fbfcc", fontSize: "0.8rem", lineHeight: 1.75, maxWidth: 280 }}>
            Empowering Education, Enabling Success. A trusted education
            consultancy providing academic support, career guidance, skill
            development, and institutional services.
          </p>
        </div>

        {/* Col 2 — Student Services */}
        <div>
          <p style={colHead}>Student Services</p>
          {[
            "Career Counseling",
            "Admission Guidance",
            "Competitive Exam Coaching",
            "Skill Development Programs",
            "Academic Mentoring",
            "Scholarship Guidance",
          ].map(s => (
            <button
              key={s}
              style={btnLink}
              onClick={() => goToService("student")}
              onMouseEnter={e => (e.currentTarget.style.color = "#edf9fb")}
              onMouseLeave={e => (e.currentTarget.style.color = "#7fbfcc")}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Col 3 — Institutional */}
        <div>
          <p style={colHead}>Institutional</p>
          {[
            "Faculty Development",
            "Academic Audits",
            "Training & Workshops",
            "Curriculum Development",
            "Accreditation Assistance",
            "NABARD DPR",
          ].map(s => (
            <button
              key={s}
              style={btnLink}
              onClick={() => goToService("institutional")}
              onMouseEnter={e => (e.currentTarget.style.color = "#edf9fb")}
              onMouseLeave={e => (e.currentTarget.style.color = "#7fbfcc")}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Col 4 — Quick Links */}
        <div>
          <p style={colHead}>Quick Links</p>
          {([
            ["Home", "/"],
            ["About Us", "/about"],
            ["Why Choose Us", "/why-us"],
            ["Our Values", "/values"],
            ["Contact Us", "/contact"],
          ] as [string, string][]).map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              style={linkStyle}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#edf9fb")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#7fbfcc")}
            >
              {label}
            </NavLink>
          ))}
          <a
            href="https://www.hacsedusolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#edf9fb")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#7fbfcc")}
          >
            www.hacsedusolutions.com
          </a>
        </div>
      </div>

      {/* ── Bottom Bar — full width background ── */}
      <div style={{
        width: "100%",
        background: "#071e27",
        borderTop: "1px solid rgba(83,209,230,0.1)",
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
          <p style={{ color: "#4a8a97", fontSize: "0.72rem" }}>
            © 2026 HACS Edu Solutions · Munuru Group OPC Pvt Ltd · All rights reserved
          </p>
          <p style={{ color: "#4a8a97", fontSize: "0.72rem", fontStyle: "italic" }}>
            "Building Futures Through Education."
          </p>
        </div>
      </div>

    </footer>
  );
}