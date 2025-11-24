import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  email: string;
  message: string;
  attachment?: {
    name: string;
    type: string;
    size: number;
  };
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, city, state, email, message, attachment }: ContactEmailRequest = await req.json();

    console.log("Processing contact form from:", email);

    const emailHtml = `
      <h2>Nova Mensagem de Contato - Portfolio Natália Rosa</h2>
      <p><strong>Nome:</strong> ${firstName} ${lastName}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Localização:</strong> ${city}, ${state}</p>
      <hr />
      <h3>Mensagem:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      ${attachment ? `<p><strong>Anexo:</strong> ${attachment.name} (${attachment.type}, ${Math.round(attachment.size / 1024)}KB)</p>` : ''}
    `;

    const emailResponse = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["nataliaresmaciel@outlook.com"],
      replyTo: email,
      subject: `Contato de ${firstName} ${lastName} - Portfolio`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
