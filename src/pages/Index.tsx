import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Social } from "@/components/Social";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Social />
      <Contact />
      
      <footer className="py-8 bg-secondary text-secondary-foreground text-center border-t-2 border-primary/20">
        <p className="text-xs md:text-sm">&copy; {new Date().getFullYear()} Natália Rosa. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
