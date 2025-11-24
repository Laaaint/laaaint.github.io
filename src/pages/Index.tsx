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
      
      <footer className="py-8 bg-secondary text-secondary-foreground text-center border-t-2 border-primary/20">
        <p className="text-xs md:text-sm">&copy; {new Date().getFullYear()} Natália Rosa. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
