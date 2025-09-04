export async function POST(request: Request) {
  try {
    const data = await request.json();
    // Validación mínima del payload
    if (!data?.email || !data?.name) {
      return new Response(JSON.stringify({ error: "Faltan campos" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    // Envío simulado: aquí podrías integrar Resend/SendGrid o un Webhook de Make/n8n
    console.log("Nuevo lead:", data);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Error del servidor" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}


