import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "XR Developer/Researcher",
      company: "Confidential Client",
      location: "Toronto, Canada",
      period: "Jan 2025 – Aug 2025",
      highlights: [
        "Spearheaded the end-to-end creation of an interactive 3D/XR environment in Spatial.io for a confidential institution, translating their vision into an immersive and navigable virtual space.",
        "Designed and implemented real-time interaction logic for objects and exhibits, enabling users to engage with the environment in meaningful ways that drive spatial storytelling.",
        "Built modular architectural layouts and user flow systems, ensuring the virtual space was intuitive to navigate and could be easily scaled or modified for future updates.",
        "Managed the complete 3D asset pipeline, from integrating models and textures to optimizing them for the WebXR platform, ensuring smooth performance across desktop and standalone VR headsets.",
        "Collaborated daily in a cross-functional team of artists, designers, and stakeholders, participating in agile sprints and feedback loops to deliver a polished and performance-optimized final product."
      ]
    },
    {
      title: "Data Analyst",
      company: "Amazon IN",
      location: "Hyderabad, India",
      period: "Sep 2022 - Sep 2023",
      highlights: [
        "Analyzed User Behaviour Funnels: Deconstructed complex customer purchase funnels to identify user drop-off points and friction in the user journey.",
        "A/B Testing and Iterative Design: Designed and executed rigorous A/B tests for product listings and promotional campaigns to measure impact on user engagement.",
        "User Segmentation and Archetyping: Segmented large-scale user datasets into distinct behavioural archetypes based on purchasing habits and engagement patterns.",
        "KPI Dashboarding for Live Operations: Built and maintained performance dashboards to provide stakeholders with actionable insights into product performance.",
        "Predictive Modelling and Forecasting: Developed data-driven projections based on historical user data to forecast future trends.",
        "Collaborated with Cross-Functional Teams: Worked with diverse teams to interpret datasets and drive iterative improvements."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
            <span className="text-gradient">Experience</span>
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl card-glow transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-medium mb-2">
                      <Briefcase className="w-5 h-5" />
                      <span>{exp.company}</span>
                      <span className="text-muted-foreground">• {exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-5 h-5" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 text-foreground/80">
                      <span className="text-primary mt-1.5 flex-shrink-0">▸</span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
