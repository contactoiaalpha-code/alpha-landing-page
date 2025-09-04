"use client";

import { useEffect } from "react";

interface StructuredDataProps {
  type: "organization" | "service" | "localBusiness" | "website";
}

const StructuredData: React.FC<StructuredDataProps> = ({ type }) => {
  useEffect(() => {
    // Solo ejecutar en el cliente para evitar hydration issues
    if (typeof document === "undefined") return;

    const addStructuredData = () => {
      const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL || "https://alphagency.com";

      let structuredData = {};

      switch (type) {
        case "organization":
          structuredData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Alpha Agency",
            alternateName: "Agencia Alpha IA",
            url: baseUrl,
            logo: `${baseUrl}/alpha-logo.svg`,
            description:
              "Agencia especializada en automatización de procesos empresariales con Inteligencia Artificial. Transformamos negocios con agentes IA, automatización de marketing y workflows inteligentes.",
            foundingDate: "2025",
            founders: [
              {
                "@type": "Person",
                name: "Alpha Agency Team",
              },
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Villahermosa",
              addressRegion: "Tabasco",
              addressCountry: "MX",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+52-999-250-0548",
              contactType: "sales",
              availableLanguage: ["es", "en"],
            },
            sameAs: [
              "https://linkedin.com/company/alphagency",
              "https://twitter.com/alphagency",
              "https://instagram.com/alphagency",
              "https://youtube.com/@alphagency",
            ],
            serviceArea: {
              "@type": "Country",
              name: "México",
            },
          };
          break;

        case "service":
          structuredData = {
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Automatización Empresarial con IA",
            description:
              "Servicios especializados en automatización de procesos empresariales usando Inteligencia Artificial. Incluye agentes conversacionales, automatización de marketing, integración de sistemas y consultoría estratégica.",
            provider: {
              "@type": "Organization",
              name: "Alpha Agency",
              url: baseUrl,
            },
            serviceType: "Automatización con Inteligencia Artificial",
            areaServed: {
              "@type": "Country",
              name: "México",
            },
            audience: {
              "@type": "Audience",
              audienceType: "business",
            },
            category: [
              "Automatización de Procesos",
              "Inteligencia Artificial",
              "Marketing Digital",
              "Agentes Conversacionales",
              "Consultoría Tecnológica",
            ],
            offers: [
              {
                "@type": "Offer",
                name: "Plan Starter",
                description: "Ideal para emprendedores y pequeños negocios",
                price: "497",
                priceCurrency: "USD",
                priceValidUntil: "2025-12-31",
                availability: "https://schema.org/InStock",
              },
              {
                "@type": "Offer",
                name: "Plan Growth",
                description:
                  "Para empresas en crecimiento que buscan escalabilidad",
                price: "1497",
                priceCurrency: "USD",
                priceValidUntil: "2025-12-31",
                availability: "https://schema.org/InStock",
              },
              {
                "@type": "Offer",
                name: "Plan Enterprise",
                description: "Solución completa para grandes organizaciones",
                price: "Personalizado",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
            ],
          };
          break;

        case "localBusiness":
          structuredData = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${baseUrl}#business`,
            name: "Alpha Agency",
            description:
              "Agencia especializada en automatización empresarial con IA en Villahermosa, Tabasco",
            url: baseUrl,
            telephone: "+52-999-250-0548",
            email: "hola@alphagency.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Villahermosa",
              addressRegion: "Tabasco",
              addressCountry: "MX",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 17.9892,
              longitude: -92.9475,
            },
            openingHours: "Mo-Fr 09:00-18:00 America/Mexico_City",
            priceRange: "$$$",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "127",
              bestRating: "5",
              worstRating: "1",
            },
          };
          break;

        case "website":
          structuredData = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${baseUrl}#website`,
            url: baseUrl,
            name: "Alpha Agency - Automatización con IA",
            description:
              "Transformamos negocios con automatización inteligente y agentes de IA especializados",
            publisher: {
              "@type": "Organization",
              name: "Alpha Agency",
            },
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: `${baseUrl}/?q={search_term_string}`,
              },
              "query-input": "required name=search_term_string",
            },
            inLanguage: ["es", "en"],
          };
          break;
      }

      // Insertar el script solo si no existe
      const existingScript = document.querySelector(
        `script[data-structured-data="${type}"]`
      );
      if (!existingScript) {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-structured-data", type);
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    };

    addStructuredData();
  }, [type]);

  return null; // Este componente no renderiza nada visible
};

export default StructuredData;
