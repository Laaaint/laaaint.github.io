import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: data,
      });

      if (error) throw error;

      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei em breve!",
      });

      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente ou entre em contato por email diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-primary leading-tight">
          Contato
        </h2>
        
        <Card className="p-8 md:p-12 max-w-2xl mx-auto border-4 border-primary/40 hover:border-primary transition-all duration-300 bg-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-base md:text-lg font-bold mb-2 text-foreground">
                Nome
              </label>
              <Input
                id="name"
                name="name"
                required
                className="w-full border-2 border-muted text-base md:text-lg py-6"
                placeholder="Seu nome"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-base md:text-lg font-bold mb-2 text-foreground">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border-2 border-muted text-base md:text-lg py-6"
                placeholder="seu@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-base md:text-lg font-bold mb-2 text-foreground">
                Mensagem
              </label>
              <Textarea
                id="message"
                name="message"
                required
                className="w-full min-h-[150px] border-2 border-muted text-base md:text-lg"
                placeholder="Sua mensagem aqui..."
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full pixel-button border-4 border-primary bg-primary hover:bg-primary/80 text-base md:text-lg py-6"
            >
              {isLoading ? "Enviando..." : "Enviar Mensagem"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};
