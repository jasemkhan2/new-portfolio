import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Graduate Certificate in Information Technology: Gaming, AR & VR",
      school: "Algoma University",
      location: "Brampton, Canada",
      period: "2023 - 2025",
      highlights: [
        "Specialized in developing interactive experiences using industry-standard tools like Unity and Unreal Engine, focusing on C# scripting, level design, and system architecture.",
        "Gained hands-on expertise in AR/VR development, mastering SDKs like the XR Interaction Toolkit (XRI) and Meta Quest SDK to build immersive applications from the ground up.",
        "Mastered the 3D content pipeline, including asset optimization, material creation, lighting techniques, and post-processing.",
        "Capstone Project: Led a team to design, develop, and deliver a fully functional VR game prototype."
      ]
    },
    {
      degree: "Bachelor of Technology in Electrical & Electronic Engineering",
      school: "Mahindra University",
      location: "Hyderabad, India",
      period: "2018 - 2022",
      highlights: [
        "Developed a strong foundation in software development through core coursework in Data Structures, Algorithms, and Object-Oriented Programming using C++ and Python.",
        "Specialized in Data Systems, gaining proficiency in SQL database management and data analysis.",
        "Studied low-level systems through courses in Computer Architecture and Digital Logic.",
        "Completed extensive project-based labs applying theoretical engineering principles to solve practical challenges."
      ]
    }
  ];

  const certifications = [
    {
      title: "Unity Pro Training",
      issuer: "Unity Engine",
      year: "2025",
      skills: ["Advanced C# Scripting", "Editor Scripting", "Performance Profiling", "URP/HDRP", "Multiplayer Networking"]
    },
    {
      title: "The Ultimate Guide to VR with Unity",
      issuer: "Udemy",
      year: "2024",
      skills: ["Visual Scripting for XR", "XR Interaction Toolkit", "VR-Centric UI/UX", "Cross-Platform VR"]
    },
    {
      title: "Python Programming Fundamentals",
      issuer: "Udemy",
      year: "2020",
      skills: ["Core Programming Concepts", "Data Structures", "Functions", "OOP"]
    },
    {
      title: "Performance Optimization Using C",
      issuer: "Udemy",
      year: "2019",
      skills: ["Memory Management", "Performance Analysis", "Compiler Optimization", "Algorithm Complexity"]
    }
  ];

  return (
    <section id="education" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
            <span className="text-gradient">Education & Certifications</span>
          </h2>

          <div className="space-y-16">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-primary" />
                <span className="text-foreground">Education</span>
              </h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-card p-8 rounded-xl card-glow transition-all duration-300 hover:scale-[1.01]"
                  >
                    <div className="mb-6">
                      <h4 className="text-xl font-display font-bold text-foreground mb-2">
                        {edu.degree}
                      </h4>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-muted-foreground">
                        <span className="text-primary font-medium">{edu.school}</span>
                        <span>• {edu.location}</span>
                        <span>• {edu.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex gap-3 text-foreground/80 text-sm">
                          <span className="text-primary mt-1 flex-shrink-0">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-primary" />
                <span className="text-foreground">Certifications</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-xl card-glow transition-all duration-300 hover:scale-[1.02]"
                  >
                    <h4 className="text-lg font-display font-bold text-foreground mb-2">
                      {cert.title}
                    </h4>
                    <div className="flex gap-2 text-sm text-muted-foreground mb-4">
                      <span className="text-primary font-medium">{cert.issuer}</span>
                      <span>• {cert.year}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
