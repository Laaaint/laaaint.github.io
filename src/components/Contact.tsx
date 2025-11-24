import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    email: "",
    message: "",
  });
  const [attachment, setAttachment] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const emailData = {
        ...formData,
        attachment: attachment ? {
          name: attachment.name,
          type: attachment.type,
          size: attachment.size,
        } : null,
      };

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: emailData,
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({
        firstName: "",
        lastName: "",
        city: "",
        state: "",
        email: "",
        message: "",
      });
      setAttachment(null);
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error sending",
        description: "An error occurred while sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 leading-tight">
          Get In Touch
        </h2>
        
        <Card className="p-8 max-w-2xl mx-auto border-2 border-primary/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-xs md:text-sm">First Name *</Label>
                <Input
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  placeholder="Your first name"
                  className="text-xs md:text-sm"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-xs md:text-sm">Last Name *</Label>
                <Input
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  placeholder="Your last name"
                  className="text-xs md:text-sm"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city" className="text-xs md:text-sm">City *</Label>
                <Input
                  id="city"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Your city"
                  className="text-xs md:text-sm"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="state" className="text-xs md:text-sm">State *</Label>
                <Input
                  id="state"
                  required
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  placeholder="Your state"
                  className="text-xs md:text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs md:text-sm">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                className="text-xs md:text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-xs md:text-sm">Message *</Label>
              <Textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message here..."
                rows={6}
                className="text-xs md:text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="attachment" className="text-xs md:text-sm">Attachment (optional)</Label>
              <Input
                id="attachment"
                type="file"
                onChange={(e) => setAttachment(e.target.files?.[0] || null)}
                className="text-xs md:text-sm"
              />
              {attachment && (
                <p className="text-xs text-muted-foreground">
                  Selected file: {attachment.name}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full text-xs md:text-sm" size="lg" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};
