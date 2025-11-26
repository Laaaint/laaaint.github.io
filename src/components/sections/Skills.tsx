import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Data Science",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Matplotlib", "Seaborn", "Jupyter"],
  },
  {
    title: "Desenvolvimento Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Desenvolvimento Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "RESTful APIs", "GraphQL"],
  },
  {
    title: "Ferramentas & Mais",
    skills: ["Git", "Docker", "Linux", "VS Code", "Figma", "Agile/Scrum"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-primary leading-tight">
          Habilidades
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 border-4 border-primary/40 hover:border-primary transition-all duration-300 bg-card">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-secondary leading-relaxed">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge key={i} variant="outline" className="text-sm md:text-base py-2 px-4 border-2 hover:bg-primary hover:text-primary-foreground transition-all">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
