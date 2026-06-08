import SectionHead from "../components/ui/SectionHead";
import {
  studentServicesList,
  institutionalServicesList,
  consultancyServicesList,
} from "../constants/services";

const sections = [
  { id: "student",       label: "Student Services",       data: studentServicesList },
  { id: "institutional", label: "Institutional Services", data: institutionalServicesList },
  { id: "consultancy",   label: "Consultancy Services",   data: consultancyServicesList },
];

export default function Services() {
  return (
    <div className="page-wrap">
      <SectionHead
        title="Our Services"
        subtitle="Three categories of services covering every dimension of educational and professional support."
      />

      {sections.map(section => (
        <section
          key={section.id}
          id={section.id}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <h3 style={{
            fontFamily: "'Oswald', sans-serif",
            fontSize: "1.4rem",
            color: "#53d1e6",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            paddingBottom: "0.75rem",
            borderBottom: "1px solid rgba(83,209,230,0.12)",
          }}>
            {section.label}
          </h3>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            alignItems: "stretch",   // ← makes all cards same height
          }}>
            {section.data.map(service => (
              <div key={service.title} style={{
                background: "#0a2b34",
                border: "1px solid rgba(83,209,230,0.14)",
                borderRadius: 16,
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}>
                <h4 style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "1rem",
                  color: "#edf9fb",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}>
                  {service.title}
                </h4>

                <p style={{
                  color: "#a8d9e4",
                  fontSize: "0.8rem",
                  lineHeight: 1.7,
                }}>
                  {service.description}
                </p>

                {service.items && service.items.length > 0 && (
                  <ul style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem",
                    marginTop: "auto",   // ← pushes list to bottom of card
                  }}>
                    {service.items.map(item => (
                      <li key={item} style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                        fontSize: "0.72rem",
                        color: "#7fbfcc",
                      }}>
                        <span style={{
                          marginTop: 5,
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: "#53d1e6",
                          flexShrink: 0,
                        }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}