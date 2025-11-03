import { Brain, Code, Gamepad2, Headset, Users, Zap } from "lucide-react";

const About = () => {
  const focusAreas = [
    {
      icon: Headset,
      title: "Spatial Storytelling",
      description: "User experience in VR/MR environments"
    },
    {
      icon: Code,
      title: "Interaction Systems",
      description: "Blueprint/C# scripting & custom mechanics"
    },
    {
      icon: Gamepad2,
      title: "Real-time 3D",
      description: "Unreal Engine, Unity, Twinmotion, Spatial.io"
    },
    {
      icon: Zap,
      title: "Performance Design",
      description: "Optimized for Oculus/Meta Quest & WebXR"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Cross-functional team prototyping"
    },
    {
      icon: Brain,
      title: "Creative Tech",
      description: "Emotion, interaction, and impact"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
            <span className="text-gradient">About Me</span>
          </h2>

          <div className="space-y-12">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-foreground/90 leading-relaxed">
                <strong className="text-foreground">I'm an XR designer, game developer and creative technologist specializing in immersive experiences that blur the line between digital and physical worlds.</strong> I've completed a graduate degree in Information Technology spec. Gaming, AR and VR at Algoma University, with hands-on experience building games and experiences for Console, VR, MR, and real-time 3D.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I design virtual worlds that aren't just seen, they're felt. From high-intensity VR sports simulations to psychological experiences where motion itself is a mechanic, I love exploring how space, sound, interaction, and story come together in immersive design.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I've built projects ranging from Olympic VR games to ambient tension-based simulations to confidential Spatial.io experiences; all with an eye toward emotion, interaction, and impact. If you're building something in XR, immersive media, or creative tech, let's connect. I'm always up for pushing boundaries, one headset at a time!
              </p>
              <p className="text-base text-muted-foreground italic mt-6">
                In my free time, I enjoy playing soccer, going to the gym, and exploring restaurants & cafes around Toronto.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-display font-semibold mb-8 text-center text-foreground">
                What I Focus On
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {focusAreas.map((area, index) => (
                  <div
                    key={index}
                    className="group bg-card p-6 rounded-xl card-glow transition-all duration-300 hover:scale-105"
                  >
                    <area.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-semibold mb-2 text-foreground">{area.title}</h4>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
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

export default About;
