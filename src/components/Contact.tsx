import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          
          <p className="text-xl text-foreground/80 mb-12 leading-relaxed">
            If you're building something in XR, immersive media, or creative tech, let's connect. 
            I'm always up for pushing boundaries, one headset at a time!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-glow transition-all duration-300 w-full sm:w-auto"
              asChild
            >
              <a href="mailto:jasem@example.com">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-semibold w-full sm:w-auto"
              asChild
            >
              <a href="https://linkedin.com/in/jasemkhan" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-semibold w-full sm:w-auto"
              asChild
            >
              <a href="https://github.com/jasemkhan" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
