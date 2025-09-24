import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validación de campos requeridos
    if (!data?.email || !data?.name) {
      return new Response(
        JSON.stringify({ error: "Faltan campos requeridos: name y email" }),
        {
          status: 400,
          headers: { "content-type": "application/json" },
        }
      );
    }

    // Log para debugging
    console.log("Nuevo lead recibido:", {
      name: data.name,
      email: data.email,
      timestamp: new Date().toISOString(),
    });

    // Verificar si está configurado Resend
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY no configurada - usando modo simulación");

      return new Response(
        JSON.stringify({
          ok: true,
          message:
            "Formulario recibido (modo simulación - configura RESEND_API_KEY para envío real)",
          data: {
            name: data.name,
            email: data.email,
            phone: data.phone,
            company: data.company,
            message: data.message,
          },
        }),
        {
          status: 200,
          headers: { "content-type": "application/json" },
        }
      );
    }

    // Enviar email usando Resend
    const emailResult = await resend.emails.send({
      from: "Alpha Landing <onboarding@resend.dev>",
      to: ["contacto.ia.alpha@gmail.com"], // Email registrado en Resend
      subject: `🚀 Nuevo contacto desde la web: ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🚀 Nuevo Contacto</h1>
            <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Alpha Landing Page</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #333; margin-bottom: 20px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Información del Contacto</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555; width: 30%;">👤 Nombre:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${
                  data.name
                }</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">📧 Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">
                  <a href="mailto:${
                    data.email
                  }" style="color: #667eea; text-decoration: none;">${
        data.email
      }</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">📱 Teléfono:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">
                  ${
                    data.phone
                      ? `<a href="tel:${data.phone}" style="color: #667eea; text-decoration: none;">${data.phone}</a>`
                      : "No proporcionado"
                  }
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">🏢 Empresa:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${
                  data.company || "No proporcionado"
                }</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">🕒 Fecha:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #333;">${new Date().toLocaleString(
                  "es-MX",
                  { timeZone: "America/Mexico_City" }
                )}</td>
              </tr>
            </table>
            
            ${
              data.message
                ? `
              <div style="margin-top: 25px;">
                <h3 style="color: #333; margin-bottom: 15px; font-size: 18px;">💬 Mensaje:</h3>
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; font-style: italic; line-height: 1.6;">
                  "${data.message}"
                </div>
              </div>
            `
                : ""
            }
            
            <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; text-align: center;">
              <p style="color: white; margin: 0; font-weight: bold;">🎯 ¡Responde rápido para maximizar la conversión!</p>
            </div>
          </div>
        </div>
      `,
      text: `
🚀 NUEVO CONTACTO DESDE ALPHA LANDING

👤 Nombre: ${data.name}
📧 Email: ${data.email}
📱 Teléfono: ${data.phone || "No proporcionado"}
🏢 Empresa: ${data.company || "No proporcionado"}
🕒 Fecha: ${new Date().toLocaleString("es-MX", {
        timeZone: "America/Mexico_City",
      })}

${data.message ? `💬 Mensaje:\n"${data.message}"` : ""}

---
Este mensaje fue enviado desde tu Alpha Landing Page.
      `,
    });

    console.log("Email enviado exitosamente:", emailResult);

    // Enviar datos al webhook de n8n para automatizaciones
    const webhookUrl = process.env.N8N_WEBHOOK_URL || process.env.WEBHOOK_URL;
    if (webhookUrl) {
      // Habilitado con URL correcta
      // Deshabilitado temporalmente
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // Datos del contacto
            nombre: data.name,
            email: data.email,
            telefono: data.phone || "No proporcionado",
            empresa: data.company || "No proporcionado",
            mensaje: data.message || "Sin mensaje adicional",

            // Metadata
            timestamp: new Date().toISOString(),
            fuente: "Alpha Landing Page",
            ip:
              request.headers.get("x-forwarded-for") ||
              request.headers.get("x-real-ip") ||
              "unknown",
            userAgent: request.headers.get("user-agent") || "unknown",

            // Para integración con CRM/automatizaciones
            lead_source: "website_form",
            lead_quality: "high", // Porque llenó formulario completo
            follow_up_required: true,
            priority: data.company ? "high" : "medium",

            // Datos para email automation
            email_data: {
              to: data.email,
              name: data.name,
              company: data.company,
              custom_message: data.message,
            },
          }),
        });

        if (webhookResponse.ok) {
          console.log("Webhook enviado exitosamente a n8n");
        } else {
          console.warn("Error en webhook:", await webhookResponse.text());
        }
      } catch (webhookError) {
        console.error("Error enviando webhook:", webhookError);
        // No fallar si el webhook falla
      }
    }

    return new Response(
      JSON.stringify({
        ok: true,
        message: "¡Mensaje enviado correctamente! Te contactaremos pronto.",
        emailId: emailResult.data?.id,
        webhookSent: !!webhookUrl,
      }),
      {
        status: 200,
        headers: { "content-type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error procesando formulario:", error);

    return new Response(
      JSON.stringify({
        error: "Error interno del servidor",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      }),
      {
        status: 500,
        headers: { "content-type": "application/json" },
      }
    );
  }
}
