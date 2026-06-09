import { Link } from "react-router-dom";
import Card from "../components/ui/Card";
import SectionHead from "../components/ui/SectionHead";
import { services } from "../constants/services";

const howWeWork = [
  {
    n: "01",
    title: "Design",
    text: "Transforming ideas into clear and effective visuals and educational solutions tailored to every student and institution.",
  },
  {
    n: "02",
    title: "Develop",
    text: "Refining details to ensure quality and consistency across every program, guidance plan, and consultancy framework.",
  },
  {
    n: "03",
    title: "Deliver",
    text: "Understanding goals, challenges, and target audiences — then executing with full professional commitment.",
  },
];

const serviceGroups = [
  {
    category: "Student Services",
    sectionId: "student",
    items: [
      "Career Counseling",
      "Admission Guidance",
      "Competitive Exam Coaching",
      "Skill Development Programs",
      "Academic Mentoring",
      "Scholarship Guidance",
    ],
  },
  {
    category: "Institutional Services",
    sectionId: "institutional",
    items: [
      "Faculty Development Programs",
      "Academic Audits",
      "Training & Workshops",
      "Curriculum Development",
      "Accreditation Assistance",
      "Project & Research Support",
    ],
  },
  {
    category: "Consultancy Services",
    sectionId: "consultancy",
    items: [
      "Educational Project Reports",
      "NABARD DPR Preparation",
      "Skill Training Consultancy",
      "Entrepreneurship Development",
      "Educational Event Management",
    ],
  },
];

export default function Home() {
  const card: React.CSSProperties = {
    background: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: 20,
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.875rem",
  };

  const grid2: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.25rem",
  };

  const grid3: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.25rem",
  };

  const section: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  };

  const cardTitle: React.CSSProperties = {
    fontFamily: "'Oswald', sans-serif",
    fontSize: "1.3rem",
    color: "#1A2E45",
    textTransform: "uppercase",
    letterSpacing: "0.03em",
  };

  const cardText: React.CSSProperties = {
    color: "#4B5563",
    fontSize: "0.875rem",
    lineHeight: 1.7,
  };

  return (
    <div className="page-wrap">

      {/* ── Hero ── */}
      <section style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>

        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          width: "fit-content",
          padding: "0.375rem 1rem",
          borderRadius: 999,
          border: "1px solid rgba(30,58,95,0.2)",
          background: "rgba(30,58,95,0.06)",
        }}>
          <span style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#1E3A5F",
            flexShrink: 0,
          }} />
          <span style={{
            fontSize: "0.7rem",
            color: "#B8860B",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
          }}>
            Trusted Education Consultancy & Academic Support
          </span>
        </div>

        <h1 style={{
          fontFamily: "'Oswald', sans-serif",
          fontSize: "clamp(2.6rem, 5.5vw, 5rem)",
          textTransform: "uppercase",
          letterSpacing: "0.02em",
          lineHeight: 1.03,
          color: "#1A2E45",
          maxWidth: "900px",
        }}>
          Empowering{" "}
          <span style={{ color: "#B8860B" }}>Education,</span>
          <br />
          Enabling Success
        </h1>

        <p style={{
          color: "#4B5563",
          fontSize: "1rem",
          lineHeight: 1.75,
          maxWidth: 600,
        }}>
          HACS Edu Solutions is a trusted education consultancy and academic
          support organization dedicated to providing quality educational
          services, skill development programs, career guidance, and
          institutional support. We work closely with students, educational
          institutions, and organizations to create opportunities for academic
          excellence and professional growth.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", paddingTop: "0.25rem" }}>
          <Link
            to="/contact"
            style={{
              padding: "0.7rem 1.75rem",
              borderRadius: 999,
              background: "#1E3A5F",
              color: "#FFFFFF",
              fontWeight: 700,
              fontSize: "0.8rem",
              boxShadow: "0 0 24px rgba(30,58,95,0.12)",
              textDecoration: "none",
            }}
          >
            Get in Touch
          </Link>
          <Link
            to="/services"
            style={{
              padding: "0.7rem 1.75rem",
              borderRadius: 999,
              border: "1px solid rgba(30,58,95,0.22)",
              color: "#4B5563",
              fontSize: "0.8rem",
              textDecoration: "none",
            }}
          >
            Explore Services →
          </Link>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section style={grid2}>
        {[
          {
            label: "Our Mission",
            text: "To provide innovative educational solutions that help students achieve their academic goals and institutions enhance their educational standards.",
          },
          {
            label: "Our Vision",
            text: "To become a leading education service provider recognized for quality, integrity, and excellence.",
          },
        ].map(item => (
          <div key={item.label} style={card}>
            <h3 style={cardTitle}>{item.label}</h3>
            <p style={cardText}>{item.text}</p>
          </div>
        ))}
      </section>

      {/* ── Services at a Glance ── */}
      <section style={section}>
        <SectionHead
          title="Our Services at a Glance"
          subtitle="Comprehensive educational support across three key areas."
        />
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {serviceGroups.map(group => (
            <div key={group.category}>
              <p style={{
                fontSize: "0.68rem",
                color: "#1E3A5F",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                fontFamily: "'Oswald', sans-serif",
                marginBottom: "0.75rem",
              }}>
                {group.category}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {group.items.map(item => (
                  <Link
                    key={item}
                    to="/services"
                    state={{ section: group.sectionId }}
                    onMouseEnter={e => {
  (e.currentTarget as HTMLElement).style.background = "rgba(30,58,95,0.12)";
  (e.currentTarget as HTMLElement).style.color = "#1E3A5F";
  (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,58,95,0.5)";
}}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(30,58,95,0.04)";
                      (e.currentTarget as HTMLElement).style.color = "#4B5563";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(30,58,95,0.2)";
                    }}
                    style={{
                      padding: "0.375rem 0.875rem",
                      borderRadius: 999,
                      border: "1px solid rgba(30,58,95,0.2)",
                      background: "rgba(30,58,95,0.04)",
                      color: "#4B5563",
                      fontSize: "0.78rem",
                      cursor: "pointer",
                      transition: "all 0.15s",
                      textDecoration: "none",
                      display: "inline-block",
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link
            to="/services"
            style={{
              padding: "0.625rem 1.5rem",
              borderRadius: 999,
              border: "1px solid rgba(30,58,95,0.2)",
              color: "#4B5563",
              fontSize: "0.8rem",
              textDecoration: "none",
            }}
          >
            View All Services →
          </Link>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section style={section}>
        <SectionHead
          title="Our Values"
          subtitle=""
        />
        <div style={{
          background: "#FFFFFF",
          border: "1px solid #E5E7EB",
          borderRadius: 20,
          padding: "2.5rem",
          maxWidth: 680,
        }}>
          <p style={{
            color: "#4B5563",
            fontSize: "1.05rem",
            lineHeight: 1.85,
            textAlign: "center",
          }}>
            We believe in creativity with purpose. Every idea is developed with
            honesty, collaboration, and a strong commitment to quality. We value
            clear communication and long-term partnerships.
          </p>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section style={section}>
        <SectionHead
          title="Our Approach"
          subtitle="Three focused steps — from design to delivery — ensuring quality outcomes every time."
        />
        <div style={grid3}>
          {howWeWork.map(item => (
            <div key={item.n} style={card}>
              <div style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "rgba(30,58,95,0.08)",
                border: "1px solid rgba(30,58,95,0.22)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Oswald', sans-serif",
                fontSize: "1.1rem",
                color: "#1E3A5F",
              }}>
                {item.n}
              </div>
              <h3 style={cardTitle}>{item.title}</h3>
              <p style={cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
