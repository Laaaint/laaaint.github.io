import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";
import minhaFoto from "@/assets/natalia-rosa.jpg";
import { Section } from "lucide-react";

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
    {/* Camada de fundo */}
    <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />

    {/* Conteúdo principal */}
    <div className="relative z-10 flex flex-col items-center text-center">

      <div className="flex justify-center mb-6">
        <img
          src={minhaFoto}
          alt="Foto de Natália Rosa"
          className="w-32 h-32 rounded-full object-cover border-4 border-accent shadow-lg mx-auto"
        />
      </div>

    <p className="text-5xl md:text-7xl font-arcade text-red-500 text-center mb-8 tracking-wider drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] animate-flicker">
      ★ Natália Rosa ★
    </p>



      <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-10 animate-fade-in leading-relaxed max-w-2xl mx-auto">
        Data Science & Fullstack Development
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
        <Button 
          size="lg" 
          className="pixel-button border-4 border-primary hover:bg-primary text-xs md:text-sm gap-2"
          onClick={() => scrollToSection('projects')}
        >
          View Projects
        </Button>

        <Button asChild
          size="lg" 
          variant="outline"
          className="pixel-button border-4 border-primary hover:bg-primary text-xs md:text-sm gap-2"
        >
          <a href="/CV_Natalia_Rosa.pdf" download>
            Download CV
          </a>
        </Button>
      </div>

    </div>
  </section>
);
};
