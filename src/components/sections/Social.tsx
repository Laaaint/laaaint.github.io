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
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 leading-tight">
          Social Media
        </h2>
        
        <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Connect with me on social media and follow my projects and updates
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
                className={`transition-colors text-xs md:text-sm ${social.color}`}
              >
                <a 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
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
