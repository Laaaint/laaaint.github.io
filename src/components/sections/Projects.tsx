import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Análise de Dados de Vendas",
    description: "Dashboard interativo para análise de dados de vendas com Python e visualizações em tempo real.",
    tags: ["Python", "Pandas", "Plotly", "Streamlit"],
    github:"https://github.com/Laaaint/Sales-Data-Analysis",
    demo: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-primary leading-tight">
          Projetos
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 border-4 border-primary/40 hover:border-primary transition-all duration-300 hover:scale-105 bg-card">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-secondary leading-tight">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="outline" className="text-xs md:text-sm py-1.5 px-3 border-2">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="flex-1 border-2 border-primary hover:bg-primary hover:text-primary-foreground text-sm md:text-base"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="flex-1 border-2 border-secondary hover:bg-secondary hover:text-secondary-foreground text-sm md:text-base"
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
