import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Sales Data Analysis",
    description: "Interactive dashboard for sales data analysis with Python and real-time visualizations.",
    tags: ["Python", "Pandas", "Plotly", "Streamlit"],
    github: "#",
    url:"https://github.com/Laaaint/Sales-Data-Analysis",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "Fullstack application for task management with authentication and cloud sync.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "ML Prediction Model",
    description: "Predictive model for data classification using machine learning algorithms.",
    tags: ["Python", "Scikit-learn", "TensorFlow", "Jupyter"],
    github: "#",
    demo: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 leading-tight">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="hover-scale transition-all duration-300 border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-sm md:text-base leading-relaxed">{project.title}</CardTitle>
                <CardDescription className="text-xs md:text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-[10px]">{tag}</Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-[10px] md:text-xs text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-3 h-3" />
                    GitHub
                  </a>
                  <a 
                    href={project.demo} 
                    className="flex items-center gap-2 text-[10px] md:text-xs text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3 h-3" />
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
