import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alpha Agency - Automatización con IA",
    short_name: "Alpha Agency",
    description:
      "La IA que libera tu TIEMPO, para que TU LIDERES. Automatización empresarial inteligente.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#FFD700",
    orientation: "portrait",
    scope: "/",
    lang: "es",
    categories: ["business", "productivity", "technology"],
    icons: [
      {
        src: "/alpha-logo.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/favicon.ico",
        sizes: "16x16 32x32",
        type: "image/x-icon",
      },
    ],
    shortcuts: [
      {
        name: "Consultoría Gratuita",
        short_name: "Consultoría",
        description: "Agenda tu consultoría gratuita de 30 minutos",
        url: "/#contact-form",
        icons: [{ src: "/alpha-logo.svg", sizes: "96x96" }],
      },
      {
        name: "Ver Paquetes",
        short_name: "Paquetes",
        description: "Explora nuestros planes de automatización",
        url: "/#packages",
        icons: [{ src: "/alpha-logo.svg", sizes: "96x96" }],
      },
      {
        name: "Agentes IA",
        short_name: "Agentes",
        description: "Conoce nuestros agentes especializados",
        url: "/#about",
        icons: [{ src: "/alpha-logo.svg", sizes: "96x96" }],
      },
    ],
  };
}
