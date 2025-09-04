import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import MatrixSystem from "@/components/ui/MatrixSystem";
import { LanguageProvider } from "@/contexts/LanguageContext";
import StructuredData from "@/components/seo/StructuredData";
import Analytics from "@/components/seo/Analytics";
import ClientOnly from "@/components/ui/ClientOnly";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alphagency.com";

export const metadata: Metadata = {
  title: "Agencia Alpha IA — La IA que libera tu TIEMPO, para que TU LIDERES.",
  description:
    "La IA que libera tu TIEMPO, para que TU LIDERES. Transformamos tu negocio con automatización inteligente: lead generation, customer support y workflows con IA.",
  keywords: [
    "automatización IA México",
    "agencia inteligencia artificial Villahermosa",
    "marketing digital automatizado Tabasco",
    "agentes IA conversacionales",
    "automatización procesos empresariales",
    "customer support automatizado",
    "n8n automation México",
    "consultoría IA empresarial Villahermosa",
    "workflows inteligentes",
    "transformación digital IA",
    "chatbots empresariales Tabasco",
    "automatización ventas IA",
  ],
  authors: [{ name: "Agencia Alpha IA" }],
  creator: "Agencia Alpha IA",
  publisher: "Agencia Alpha IA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Agencia Alpha IA — La IA que libera tu TIEMPO, para que TU LIDERES.",
    description:
      "La IA que libera tu TIEMPO, para que TU LIDERES. Transformamos tu negocio con automatización inteligente y marketing digital del futuro.",
    url: siteUrl,
    siteName: "Agencia Alpha IA",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Alpha Agency - Automatización con IA",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agencia Alpha IA — La IA que libera tu TIEMPO",
    description:
      "Transformamos tu negocio con automatización inteligente. La IA que libera tu tiempo para que TU lideres.",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/alpha-logo.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/alpha-logo.svg", color: "#FFD700" }],
  },
  manifest: "/manifest.json",

  other: {
    "geo.region": "MX-TAB",
    "geo.placename": "Villahermosa",
    "geo.position": "17.9892;-92.9475",
    ICBM: "17.9892, -92.9475",
    rating: "general",
    distribution: "global",
    "revisit-after": "7 days",
    language: "es, en",
    coverage: "Worldwide",
    target: "all",
    HandheldFriendly: "True",
    MobileOptimized: "320",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Alpha Agency",
    "application-name": "Alpha Agency",
    "msapplication-TileColor": "#FFD700",
    "msapplication-navbutton-color": "#FFD700",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="font-inter antialiased">
        <LanguageProvider>
          {children}

          {/* Matrix System debe estar dentro del contexto */}
          <ClientOnly>
            <MatrixSystem />
          </ClientOnly>

          {/* Structured Data para SEO */}
          <ClientOnly>
            <StructuredData type="organization" />
            <StructuredData type="service" />
            <StructuredData type="localBusiness" />
            <StructuredData type="website" />
          </ClientOnly>

          {/* Analytics y Tracking */}
          <ClientOnly>
            <Analytics />
          </ClientOnly>
        </LanguageProvider>
      </body>
    </html>
  );
}
