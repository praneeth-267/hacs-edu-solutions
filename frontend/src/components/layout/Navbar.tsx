import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { studentServices, institutionalServices, consultancyServices } from "../../constants/navLinks";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const isMobile = window.innerWidth <= 768;

  const navLinkStyle = (isActive: boolean): React.CSSProperties => ({
    fontSize: "0.8rem",
    fontWeight: 500,
    padding: "0.375rem 0.875rem",
    borderRadius: 8,
    whiteSpace: "nowrap",
    transition: "all 0.15s",
    color: "#FAFAF7",
    background: isActive ? "rgba(30,58,95,0.04)" : "transparent",
    textDecoration: "none",
    display: "inline-block",
  });

  const dropItemStyle: React.CSSProperties = {
    display: "block",
    padding: "0.3rem 0.625rem",
    fontSize: "0.75rem",
    color: "#1E3A5F",
    borderRadius: 6,
    transition: "all 0.15s",
    textDecoration: "none",
    background: "transparent",
    border: "none",
    width: "100%",
    textAlign: "left",
    cursor: "pointer",
  };

  const sectionLabel: React.CSSProperties = {
    fontSize: "0.58rem",
      color: "#B8860B",
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    padding: "0.3rem 0.625rem",
    display: "block",
  };

  const hoverOn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "#1E3A5F";
    e.currentTarget.style.background = "rgba(30,58,95,0.08)";
  };

  const hoverOff = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "#1E3A5F";
    e.currentTarget.style.background = "transparent";
  };

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(30, 58, 95, 1.0)",
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
            background: "linear-gradient(135deg,#FAFAF7,#1E3A5F)",
            color: "#1A2E45", display: "flex", alignItems: "center",
            justifyContent: "center", fontFamily: "'Oswald',sans-serif",
            fontWeight: 700, fontSize: "1.1rem",
          }}>H</div>
          <div style={{ lineHeight: 1 }}>
            <div style={{
              fontFamily: "'Oswald',sans-serif", fontSize: "0.88rem",
                color: "#FAFAF7", letterSpacing: "0.04em", textTransform: "uppercase",
            }}>
              HACS Edu Solutions
            </div>
            <div style={{
                fontSize: "0.58rem", color: "#B8860B",
              letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 2,
            }}>
              Empowering Education
            </div>
          </div>
        </NavLink>

        {/* ── Desktop Nav ── */}
        <nav
    style={{
      display: isMobile ? "none" : "flex",
      alignItems: "center",
      gap: "0.125rem",
      flex: 1,
      justifyContent: "center",
    }}
  >
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
                background: "#FFFFFF",
                border: "1px solid rgba(30,58,95,0.15)",
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
                  <Link
                    key={s}
                    to="/services"
                    state={{ section: "student" }}
                    style={dropItemStyle}
                    onClick={() => setDropOpen(false)}
                    onMouseEnter={hoverOn}
                    onMouseLeave={hoverOff}
                  >
                    {s}
                  </Link>
                ))}

                <hr style={{ border: "none", borderTop: "1px solid rgba(83,209,230,0.1)", margin: "0.5rem 0" }} />

                {/* Institutional */}
                <span style={sectionLabel}>Institutional</span>
                {institutionalServices.map(s => (
                  <Link
                    key={s}
                    to="/services"
                    state={{ section: "institutional" }}
                    style={dropItemStyle}
                    onClick={() => setDropOpen(false)}
                    onMouseEnter={hoverOn}
                    onMouseLeave={hoverOff}
                  >
                    {s}
                  </Link>
                ))}

                <hr style={{ border: "none", borderTop: "1px solid rgba(83,209,230,0.1)", margin: "0.5rem 0" }} />

                {/* Consultancy */}
                <span style={sectionLabel}>Consultancy</span>
                {consultancyServices.map(s => (
                  <Link
                    key={s}
                    to="/services"
                    state={{ section: "consultancy" }}
                    style={dropItemStyle}
                    onClick={() => setDropOpen(false)}
                    onMouseEnter={hoverOn}
                    onMouseLeave={hoverOff}
                  >
                    {s}
                  </Link>
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
    display: isMobile ? "flex" : "none",
    flexDirection: "column",
    alignItems: "center", justifyContent: "center",
    gap: 5, background: "transparent", cursor: "pointer",
  }}
>
            <span style={{ display: "block", width: 18, height: 2, background: "#FAFAF7", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ display: "block", width: 18, height: 2, background: "#FAFAF7", borderRadius: 2, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: 18, height: 2, background: "#FAFAF7", borderRadius: 2, transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
{menuOpen && (
    <div style={{
    background: "#FFFFFF",
    borderTop: "1px solid rgba(30,58,95,0.1)",
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
        onClick={() => { setMenuOpen(false); window.scrollTo(0, 0); }}
        style={{
          display: "block",
          padding: "0.625rem 1rem",
          borderRadius: 10,
          color: "#4B5563",
          fontSize: "1rem",
          borderBottom: "1px solid rgba(30,58,95,0.07)",
          textDecoration: "none",
          background: "#FFFFFF",
        }}
      >
        {label}
      </NavLink>
    ))}
    <NavLink
      to="/contact"
      onClick={() => { setMenuOpen(false); window.scrollTo(0, 0); }}
      style={{
        marginTop: 12,
        padding: "0.625rem",
        borderRadius: 999,
        background: "#1E3A5F",
        color: "#FFFFFF",
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