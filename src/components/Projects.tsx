import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Don't Move VR",
      subtitle: "Unreal Engine",
      role: "Environment Design, Technical Design, Storywriting",
      description: "A psychological VR experience where players must resist movement as their environment becomes increasingly unsettling. Designed stylized modular environments, implemented post-processing, lighting cues, and ambient sound to deliver narrative tension.",
      tags: ["Unreal Engine", "VR", "Blueprints", "Level Design"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Olympics VR",
      subtitle: "Multi-Sport VR Game",
      role: "Gameplay Development, Technical Arts",
      description: "Developed a multi-sport VR game simulating Olympic-style events with realistic physics and player interactions. Created immersive levels, fine-tuned physics-driven gameplay (throwing, shooting, hurdling), and built stylized assets optimized for Oculus/Meta Quest performance.",
      tags: ["Unity", "VR", "Physics", "Meta Quest"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Virtual Campus Tour",
      subtitle: "Educational VR Experience",
      role: "Environment Arts, Interaction Design",
      description: "Created a detailed digital replica of the university's floor plan. Designed architectural elements and classroom layouts based on real-world measurements. Implemented interactive points of interest for prospective students to explore and navigate the campus in VR.",
      tags: ["VR", "Architecture", "Interactive Design", "Education"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
            <span className="text-gradient">Projects & Work</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card p-8 rounded-xl card-glow transition-all duration-300 hover:scale-[1.02] flex flex-col"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">{project.subtitle}</p>
                  <p className="text-sm text-muted-foreground italic mb-4">{project.role}</p>
                  <p className="text-foreground/80 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 text-foreground hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
