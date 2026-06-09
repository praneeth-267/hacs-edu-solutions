import SectionHead from "../components/ui/SectionHead";

export default function About() {

  const card: React.CSSProperties = {
    background: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: 16,
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.625rem",
  };

  return (
    <div className="page-wrap">

      <SectionHead
        title="About Us"
        subtitle="Who we are, what drives us, and why education is at the heart of everything we do."
      />

      {/* ── Who We Are + Mission/Vision ── */}
      <section style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "3rem",
        alignItems: "start",
      }}>

        {/* Left — Who We Are */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <h2 style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "1.6rem",
            color: "#1A2E45",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}>
            Who We Are
          </h2>
          {[ 
            "HACS Edu Solutions is committed to transforming education through expert guidance, academic support, training programs, and consultancy services. Our team consists of experienced educators, trainers, and industry professionals who understand the evolving needs of students and educational institutions.",
            "We believe that education is the foundation of personal and professional success, and our goal is to make quality educational support accessible to all.",
             ].map((para, i) => (
            <p key={i} style={{ color: "#4B5563", fontSize: "0.875rem", lineHeight: 1.8 }}>
              {para}
            </p>
          ))}
        </div>

        {/* Right — Mission & Vision */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div style={card}>
            <p style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.65rem",
              color: "#1E3A5F",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}>
              Our Mission
            </p>
            <p style={{ color: "#4B5563", fontSize: "0.875rem", lineHeight: 1.75 }}>
              To provide innovative educational solutions that help students achieve
              their academic goals and institutions enhance their educational standards.
            </p>
          </div>

          <div style={card}>
            <p style={{
              fontFamily: "'Oswald', sans-serif",
              fontSize: "0.65rem",
              color: "#1E3A5F",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}>
              Our Vision
            </p>
            <p style={{ color: "#4B5563", fontSize: "0.875rem", lineHeight: 1.75 }}>
              To become a leading education service provider recognized for quality,
              integrity, and excellence.
            </p>
          </div>
        </div>
      </section>


    </div>
  );
}