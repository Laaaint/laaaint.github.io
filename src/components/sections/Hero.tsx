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

      <div className="flex justify-center mb-8">
        <img
          src={minhaFoto}
          alt="Foto de Natália Rosa"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary shadow-lg mx-auto animate-pulse"
        />
      </div>

    <h1 className="text-4xl md:text-6xl lg:text-7xl font-arcade text-primary text-center mb-8 tracking-wider drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] animate-flicker">
      ★ Natália Rosa ★
    </h1>



      <p className="text-xl md:text-2xl lg:text-3xl text-secondary font-bold mb-12 animate-fade-in leading-relaxed max-w-3xl">
        Data Science & Desenvolvimento FullStack
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
        <Button 
          size="lg" 
          className="pixel-button border-4 border-primary bg-primary hover:bg-primary/80 text-primary-foreground text-base md:text-lg px-8 py-6"
          onClick={() => scrollToSection('projects')}
        >
          Ver Projetos
        </Button>

        <Button asChild
          size="lg" 
          variant="outline"
          className="pixel-button border-4 border-secondary bg-secondary/20 hover:bg-secondary hover:text-secondary-foreground text-secondary text-base md:text-lg px-8 py-6"
        >
          <a href="/CV_Natalia_Organizado.pdf" download>
            Baixar CV
          </a>
        </Button>
      </div>

    </div>
  </section>
);
};
