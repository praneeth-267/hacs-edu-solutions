export type ServiceCategory = "student" | "institutional" | "consultancy";

export interface Service {
  title: string;
  description: string;
  items: string[];
  category: ServiceCategory;
}

export const allServices: Service[] = [
  // ── Student Services ──
  {
    category: "student",
    title: "Career Counseling",
    description:
      "Professional guidance to help students identify their strengths, choose the right academic stream, and plan a successful career pathway.",
    items: [
      "Stream selection guidance",
      "Career path mapping",
      "One-on-one counseling sessions",
      "Industry insights and awareness",
    ],
  },
  {
    category: "student",
    title: "Admission Guidance",
    description:
      "Expert support for school, college, and university admissions — from shortlisting institutions to preparing applications.",
    items: [
      "Institution shortlisting",
      "Application preparation",
      "Document checklist guidance",
      "Interview preparation",
    ],
  },
  {
    category: "student",
    title: "Competitive Exam Coaching Support",
    description:
      "Structured coaching support for competitive entrance exams covering subject matter, test strategy, and performance improvement.",
    items: [
      "Subject-wise coaching",
      "Test-taking strategy",
      "Mock tests and analysis",
      "Performance review sessions",
    ],
  },
  {
    category: "student",
    title: "Skill Development Programs",
    description:
      "Industry-relevant skill programs designed to bridge the gap between academic learning and professional employability requirements.",
    items: [
      "Technical skill building",
      "Soft skills training",
      "Communication development",
      "Industry readiness programs",
    ],
  },
  {
    category: "student",
    title: "Academic Mentoring",
    description:
      "One-on-one and group academic mentoring sessions to support students in improving performance, study habits, and subject understanding.",
    items: [
      "Personalized study planning",
      "Subject-specific support",
      "Group mentoring sessions",
      "Progress tracking",
    ],
  },
  {
    category: "student",
    title: "Scholarship Guidance",
    description:
      "Helping students identify, apply for, and secure scholarships from government, institutional, and private sources.",
    items: [
      "Scholarship search and match",
      "Application support",
      "Essay and SOP guidance",
      "Follow-up and tracking",
    ],
  },

  // ── Institutional Services ──
  {
    category: "institutional",
    title: "Faculty Development Programs",
    description:
      "Structured training programs for teaching staff covering modern pedagogy, technology integration, and academic best practices.",
    items: [
      "Modern pedagogy training",
      "Technology integration",
      "Assessment best practices",
      "Classroom management",
    ],
  },
  {
    category: "institutional",
    title: "Academic Audits",
    description:
      "Comprehensive reviews of institutional academic processes, curriculum delivery, assessment systems, and educational outcomes.",
    items: [
      "Curriculum review",
      "Outcome analysis",
      "Gap identification",
      "Actionable recommendations",
    ],
  },
  {
    category: "institutional",
    title: "Training & Workshops",
    description:
      "Customized training events and workshops for institutional staff, faculty, and administrators on relevant academic topics.",
    items: [
      "Custom workshop design",
      "Staff and faculty training",
      "Leadership development",
      "Online and offline sessions",
    ],
  },
  {
    category: "institutional",
    title: "Curriculum Development Support",
    description:
      "Support for designing and updating academic curricula aligned with current standards, industry requirements, and regulatory guidelines.",
    items: [
      "Needs and gap analysis",
      "Content and syllabus design",
      "Regulatory alignment",
      "Implementation support",
    ],
  },
  {
    category: "institutional",
    title: "Accreditation Assistance",
    description:
      "End-to-end support for institutions seeking NAAC, NBA, or other accreditation — documentation, self-study reports, and compliance.",
    items: [
      "NAAC and NBA support",
      "Self-study report preparation",
      "Documentation management",
      "Compliance preparation",
    ],
  },
  {
    category: "institutional",
    title: "Project and Research Support",
    description:
      "Guidance and support for academic research projects, institutional publications, and educational grant applications.",
    items: [
      "Research project guidance",
      "Publication support",
      "Grant writing assistance",
      "Institutional project reports",
    ],
  },

  // ── Consultancy Services ──
  {
    category: "consultancy",
    title: "Educational Project Reports",
    description:
      "Professional preparation of detailed project reports for educational initiatives, infrastructure projects, and academic development proposals.",
    items: [
      "DPR writing and formatting",
      "Feasibility reports",
      "Proposal preparation",
      "Financial projections",
    ],
  },
  {
    category: "consultancy",
    title: "NABARD DPR Preparation",
    description:
      "Specialized Detailed Project Report preparation for NABARD-funded educational and rural development projects.",
    items: [
      "NABARD format compliance",
      "Rural education projects",
      "Complete documentation",
      "Submission support",
    ],
  },
  {
    category: "consultancy",
    title: "Skill Training Project Consultancy",
    description:
      "Strategic consultancy for organizations planning and implementing skill training projects under government and private sector frameworks.",
    items: [
      "Project planning and design",
      "Government framework alignment",
      "Partner coordination",
      "Monitoring and reporting",
    ],
  },
  {
    category: "consultancy",
    title: "Entrepreneurship Development Programs",
    description:
      "Structured programs to develop entrepreneurial thinking, business planning skills, and startup readiness among students.",
    items: [
      "Business plan development",
      "Ideation workshops",
      "Startup mentoring",
      "Pitch preparation",
    ],
  },
  {
    category: "consultancy",
    title: "Educational Event Management",
    description:
      "Planning and management of educational conferences, seminars, workshops, career fairs, and academic events from concept to completion.",
    items: [
      "End-to-end event planning",
      "Coordination and logistics",
      "Speaker and vendor management",
      "Post-event reports",
    ],
  },
];

// ── All named exports used across pages ──
export const services = allServices;

export const studentServicesList = allServices.filter(
  (s) => s.category === "student"
);

export const institutionalServicesList = allServices.filter(
  (s) => s.category === "institutional"
);

export const consultancyServicesList = allServices.filter(
  (s) => s.category === "consultancy"
);