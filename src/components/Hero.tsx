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
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
      
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-6 animate-fade-in">
          <img src={racingIcon} alt="Racing icon" className="w-24 h-24 hover-scale" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-foreground">Natália Rosa</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
          Ciência de Dados & Desenvolvimento Fullstack
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            className="text-lg"
            onClick={() => scrollToSection('projetos')}
          >
            Ver Projetos
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg"
            onClick={() => scrollToSection('contato')}
          >
            Entre em Contato
          </Button>
        </div>
      </div>
    </section>
  );
};
