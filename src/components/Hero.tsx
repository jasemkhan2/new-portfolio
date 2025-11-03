import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dual-toned animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/40 to-primary/10" />
      
      {/* Dual-toned glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-tl from-accent/30 to-primary/20 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Mouse-following spotlight */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-opacity duration-300 opacity-0 hover:opacity-100"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, hsl(var(--accent) / 0.1) 30%, transparent 70%)',
          filter: 'blur(40px)',
          opacity: mousePosition.x > 0 ? 1 : 0,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
            <span className="text-gradient">Jasem Khan</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            XR Developer | Game Developer | Unreal Engine & Unity | VR Interaction Design
          </p>

          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            An XR designer, game developer and creative technologist specializing in immersive experiences 
            that blur the line between digital and physical worlds.
          </p>

          <div className="flex items-center justify-center gap-4 pt-8">
            <Button 
              variant="default" 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-glow transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8">
            <a 
              href="https://github.com/jasemkhan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/jasemkhan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:jasem@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
