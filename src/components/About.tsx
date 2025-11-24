import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Sobre Mim
        </h2>
        
        <Card className="p-8 md:p-12 max-w-4xl mx-auto">
          <div className="space-y-6 text-lg text-foreground">
            <p>
              Olá! Sou <strong>Natália Rosa</strong>, estudante apaixonada por Ciência de Dados 
              e Desenvolvimento Fullstack. Minha jornada na tecnologia é impulsionada pela curiosidade 
              e pelo desejo constante de aprender e criar soluções inovadoras.
            </p>
            
            <p>
              Com foco em análise de dados e desenvolvimento web, busco unir o melhor dos dois mundos: 
              a capacidade de extrair insights valiosos dos dados e a habilidade de transformá-los em 
              aplicações funcionais e intuitivas.
            </p>
            
            <p>
              Estou sempre em busca de novos desafios que me permitam crescer profissionalmente e 
              contribuir com projetos que fazem a diferença. Acredito no poder da tecnologia para 
              transformar ideias em realidade.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
