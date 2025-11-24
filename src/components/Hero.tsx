import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import racingIcon from "@/assets/racing-icon.png";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
      
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-8 animate-fade-in">
          <img src={racingIcon} alt="Racing icon" className="w-20 h-20 hover-scale" />
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in leading-tight">
          <span className="text-foreground">Natália Rosa</span>
        </h1>
        
        <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-10 animate-fade-in leading-relaxed max-w-2xl mx-auto">
          Data Science & Fullstack Development
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            className="text-xs md:text-sm"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-xs md:text-sm"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};
