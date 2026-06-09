import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { studentServices, institutionalServices, consultancyServices } from "../../constants/navLinks";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    setDropOpen(false);
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

  const navLinkStyle = (isActive: boolean): React.CSSProperties => ({
    fontSize: "0.8rem",
    fontWeight: 500,
    padding: "0.375rem 0.875rem",
    borderRadius: 8,
    whiteSpace: "nowrap",
    transition: "all 0.15s",
    color: isActive ? "#edf9fb" : "#a8d9e4",
    background: isActive ? "rgba(255,255,255,0.1)" : "transparent",
    textDecoration: "none",
    display: "inline-block",
  });

  const dropItemStyle: React.CSSProperties = {
    display: "block",
    padding: "0.3rem 0.625rem",
    fontSize: "0.75rem",
    color: "#a8d9e4",
    borderRadius: 6,
    transition: "all 0.15s",
    textDecoration: "none",
    background: "none",
    border: "none",
    width: "100%",
    textAlign: "left",
    cursor: "pointer",
  };

  const sectionLabel: React.CSSProperties = {
    fontSize: "0.58rem",
    color: "#5aabb8",
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    padding: "0.3rem 0.625rem",
    display: "block",
  };

  const hoverOn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.color = "#edf9fb";
    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
  };

  const hoverOff = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.color = "#a8d9e4";
    e.currentTarget.style.background = "transparent";
  };

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(7,30,37,0.96)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(83,209,230,0.1)",
    }}>
      <div style={{
        width: "min(calc(100% - 3rem), 1160px)",
        margin: "0 auto",
        height: "3.75rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
      }}>

        {/* ── Logo ── */}
        <NavLink
          to="/"
          style={{ display: "flex", alignItems: "center", gap: "0.625rem", flexShrink: 0, textDecoration: "none" }}
        >
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg,#edf9fb,#53d1e6)",
            color: "#071e25", display: "flex", alignItems: "center",
            justifyContent: "center", fontFamily: "'Oswald',sans-serif",
            fontWeight: 700, fontSize: "1.1rem",
          }}>H</div>
          <div style={{ lineHeight: 1 }}>
            <div style={{
              fontFamily: "'Oswald',sans-serif", fontSize: "0.88rem",
              color: "#edf9fb", letterSpacing: "0.04em", textTransform: "uppercase",
            }}>
              HACS Edu Solutions
            </div>
            <div style={{
              fontSize: "0.58rem", color: "#5aabb8",
              letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 2,
            }}>
              Empowering Education
            </div>
          </div>
        </NavLink>

        {/* ── Desktop Nav ── */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.125rem", flex: 1, justifyContent: "center" }}>
          <NavLink to="/" style={({ isActive }) => navLinkStyle(isActive)}>Home</NavLink>
          <NavLink to="/about" style={({ isActive }) => navLinkStyle(isActive)}>About Us</NavLink>

          {/* Services Dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <NavLink
              to="/services"
              style={({ isActive }) => ({
                ...navLinkStyle(isActive),
                display: "inline-flex",
                alignItems: "center",
                gap: 4,
              })}
            >
              Services
              <span style={{ fontSize: "0.55rem", opacity: 0.6 }}>▾</span>
            </NavLink>

            {/* Invisible bridge — prevents gap from closing dropdown */}
            {dropOpen && (
              <div style={{
                position: "absolute",
                top: "100%",
                left: 0,
                width: "100%",
                height: 10,
                background: "transparent",
              }} />
            )}

            {dropOpen && (
              <div style={{
                position: "absolute",
                top: "calc(100% + 10px)",
                left: 0,
                width: 240,
                background: "#0a2b34",
                border: "1px solid rgba(83,209,230,0.15)",
                borderRadius: 16,
                padding: "0.75rem",
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                zIndex: 99,
                maxHeight: "80vh",
                overflowY: "auto",
              }}>

                {/* Student */}
                <span style={sectionLabel}>Student</span>
                {studentServices.map(s => (
                  <button
                    key={s}
                    style={dropItemStyle}
                    onClick={() => scrollToSection("student")}
                    onMouseEnter={hoverOn}
                    onMouseLeave={hoverOff}
                  >
                    {s}
                  </button>
                ))}

                <hr style={{ border: "none", borderTop: "1px solid rgba(83,209,230,0.1)", margin: "0.5rem 0" }} />

                {/* Institutional */}
                <span style={sectionLabel}>Institutional</span>
                {institutionalServices.map(s => (
                  <button
                    key={s}
                    style={dropItemStyle}
                    onClick={() => scrollToSection("institutional")}
                    onMouseEnter={hoverOn}
                    onMouseLeave={hoverOff}
                  >
                    {s}
                  </button>
                ))}

                <hr style={{ border: "none", borderTop: "1px solid rgba(83,209,230,0.1)", margin: "0.5rem 0" }} />

                {/* Consultancy */}
                <span style={sectionLabel}>Consultancy</span>
                {consultancyServices.map(s => (
                  <button
                    key={s}
                    style={dropItemStyle}
                    onClick={() => scrollToSection("consultancy")}
                    onMouseEnter={hoverOn}
                    onMouseLeave={hoverOff}
                  >
                    {s}
                  </button>
                ))}

              </div>
            )}
          </div>

          <NavLink to="/why-us" style={({ isActive }) => navLinkStyle(isActive)}>Why Choose Us</NavLink>
          <NavLink to="/values" style={({ isActive }) => navLinkStyle(isActive)}>Our Values</NavLink>
          <NavLink to="/contact" style={({ isActive }) => navLinkStyle(isActive)}>Contact Us</NavLink>
        </nav>

        {/* ── CTA + Hamburger ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              width: 36, height: 36, borderRadius: 8,
              border: "1px solid rgba(83,209,230,0.2)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: 5, background: "transparent", cursor: "pointer",
            }}
          >
            <span style={{ display: "block", width: 18, height: 2, background: "#edf9fb", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ display: "block", width: 18, height: 2, background: "#edf9fb", borderRadius: 2, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: 18, height: 2, background: "#edf9fb", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div style={{
          background: "#0a2b34",
          borderTop: "1px solid rgba(83,209,230,0.1)",
          padding: "1rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}>
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
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.625rem 1rem",
                borderRadius: 10,
                color: "#a8d9e4",
                fontSize: "1rem",
                borderBottom: "1px solid rgba(83,209,230,0.07)",
                textDecoration: "none",
              }}
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 12,
              padding: "0.625rem",
              borderRadius: 999,
              background: "#53d1e6",
              color: "#071e25",
              fontWeight: 700,
              fontSize: "1rem",
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            Get in Touch
          </NavLink>
        </div>
      )}
    </header>
  );
}