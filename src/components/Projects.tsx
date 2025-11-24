import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Análise de Dados de Vendas",
    description: "Dashboard interativo para análise de dados de vendas com Python e visualizações em tempo real.",
    tags: ["Python", "Pandas", "Plotly", "Streamlit"],
    github: "#",
    demo: "#",
  },
  {
    title: "App de Gestão de Tarefas",
    description: "Aplicação fullstack para gerenciamento de tarefas com autenticação e sincronização em nuvem.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Modelo de Machine Learning",
    description: "Modelo preditivo para classificação de dados utilizando algoritmos de aprendizado de máquina.",
    tags: ["Python", "Scikit-learn", "TensorFlow", "Jupyter"],
    github: "#",
    demo: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projetos" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Projetos
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover-scale transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a 
                    href={project.demo} 
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
