import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 leading-tight">
          About Me
        </h2>
        
        <Card className="p-8 md:p-12 max-w-4xl mx-auto border-2 border-primary/20">
          <div className="space-y-6 text-sm md:text-base text-foreground leading-relaxed">
            <p>
              Hi! I'm <strong className="text-primary">Natália Rosa</strong>, a passionate student 
              in Systems Analysis and Development student in my 4th semester at UniAmérica Faculdade Descomplica and Data Science, FullStack Development in HashTag Treinamento 'Comunidade Impressionadora' program. My tech journey is driven by curiosity 
              and the constant desire to learn and create innovative solutions.I’m currently transitioning my career from the logistics field to analysis and development.
            </p>
            
            <p>
              Focusing on data analysis and web development, I aim to unite the best of both worlds: 
              the ability to extract valuable insights from data and the skill to transform them into 
              functional and intuitive applications.
            </p>
            
            <p>
              I'm always seeking new challenges that allow me to grow professionally and 
              contribute to projects that make a difference. I believe in technology's power 
              to transform ideas into reality.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
