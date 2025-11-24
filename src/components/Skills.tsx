import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Data Science",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Matplotlib", "Seaborn", "Jupyter"],
  },
  {
    title: "Frontend Dev",
    skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Backend Dev",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "RESTful APIs", "GraphQL"],
  },
  {
    title: "Tools & More",
    skills: ["Git", "Docker", "Linux", "VS Code", "Figma", "Agile/Scrum"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 leading-tight">
          Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 border-2 border-primary/20">
              <h3 className="text-base md:text-lg font-bold mb-4 text-primary leading-relaxed">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge key={i} variant="outline" className="text-[10px] md:text-xs py-1.5 px-3">
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
