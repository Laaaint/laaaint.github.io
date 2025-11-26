import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/laaaint",
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/natresmaciel",
    color: "hover:text-primary",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/_laaaint",
    color: "hover:text-accent-foreground",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:nataliaresmaciel@outlook.com",
    color: "hover:text-destructive",
  },
];

export const Social = () => {
  return (
    <section id="social" className="py-20 bg-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-primary leading-tight">
          Redes Sociais
        </h2>
        
        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Conecte-se comigo nas redes sociais e acompanhe meus projetos e atualizações
        </p>
        
        <div className="flex justify-center gap-4 flex-wrap">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Button
                key={social.name}
                variant="outline"
                size="lg"
                asChild
                className={`transition-all text-sm md:text-base border-4 hover:scale-110 px-6 py-6 ${social.color}`}
              >
                <a 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Icon className="w-5 h-5" />
                  {social.name}
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
