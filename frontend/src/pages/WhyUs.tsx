import SectionHead from "../components/ui/SectionHead";

const reasons = [
  {
    n: "01",
    title: "Experienced Professionals",
    text: "A dedicated team with deep expertise in education, training, and institutional development — educators, trainers, and industry professionals who understand the evolving needs of students and institutions.",
  },
  {
    n: "02",
    title: "Personalized Guidance",
    text: "Customized solutions based on individual student needs and specific institutional goals. No one-size-fits-all approach — every plan is designed around your unique context.",
  },
  {
    n: "03",
    title: "Quality Services",
    text: "A strong commitment to delivering reliable and result-oriented services. We hold every programme, consultancy engagement, and training module to high professional standards.",
  },
  {
    n: "04",
    title: "Student-Centric Approach",
    text: "Focused on academic success and career development at every step. Every service we offer is designed with the student's best outcome as the primary measure of success.",
  },
];

export default function WhyUs() {
  return (
    <div className="page-wrap">

      <SectionHead
        title="Why Choose Us"
        subtitle="A dedicated, professional team that delivers personalized, result-oriented educational support for students and institutions alike."
      />

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.25rem",
        alignItems: "stretch",
      }}>
        {reasons.map(item => (
          <div key={item.n} style={{
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: 16,
            padding: "1.75rem",
            display: "flex",
            gap: "1.25rem",
            alignItems: "flex-start",
          }}>
            <div style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "rgba(30,58,95,0.08)",
              border: "1px solid rgba(30,58,95,0.22)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Oswald', sans-serif",
              fontSize: "1.1rem",
              color: "#1E3A5F",
              flexShrink: 0,
            }}>
              {item.n}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <h3 style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "1.1rem",
                color: "#1A2E45",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}>
                {item.title}
              </h3>
              <p style={{
                color: "#4B5563",
                fontSize: "0.825rem",
                lineHeight: 1.75,
              }}>
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}