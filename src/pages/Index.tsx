import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Social } from "@/components/sections/Social";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Social />
      
      <footer className="py-8 bg-secondary text-secondary-foreground text-center border-t-4 border-primary/40">
        <p className="text-base md:text-lg">&copy; {new Date().getFullYear()} Natália Rosa. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Index;
