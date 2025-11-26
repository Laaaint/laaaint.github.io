import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-primary leading-tight">
          Sobre Mim
        </h2>
        
        <Card className="p-8 md:p-12 max-w-4xl mx-auto border-4 border-primary/40 bg-card hover:border-primary transition-all duration-300">
          <div className="space-y-6 text-base md:text-lg text-foreground leading-relaxed">
            <p>
              Olá! Sou <strong className="text-primary">Natália Rosa</strong>, uma estudante apaixonada 
              de Análise e Desenvolvimento de Sistemas no 4º semestre na UniAmérica Faculdade Descomplica e 
              Data Science, Desenvolvimento FullStack na HashTag Treinamentos no programa 'Comunidade Impressionadora'. 
              Minha jornada na tecnologia é impulsionada pela curiosidade e pelo desejo constante de aprender e 
              criar soluções inovadoras. Estou atualmente em transição de carreira da área de logística para 
              análise e desenvolvimento.
            </p>
            
            <p>
              Focando em análise de dados e desenvolvimento web, busco unir o melhor dos dois mundos: 
              a capacidade de extrair insights valiosos dos dados e a habilidade de transformá-los em 
              aplicações funcionais e intuitivas.
            </p>
            
            <p>
              Estou sempre em busca de novos desafios que me permitam crescer profissionalmente e 
              contribuir para projetos que fazem a diferença. Acredito no poder da tecnologia 
              para transformar ideias em realidade.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
