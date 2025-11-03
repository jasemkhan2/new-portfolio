const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Jasem Khan. Built with passion for immersive experiences.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
