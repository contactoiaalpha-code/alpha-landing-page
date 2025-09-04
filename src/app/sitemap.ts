import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://alphagency.com";
  // Fecha en zona horaria de México (CST/CDT - Villahermosa, Tabasco)
  const lastmod = new Date().toLocaleDateString("sv-SE", {
    timeZone: "America/Mexico_City",
  });
  return [
    {
      url: `${base}`,
      lastModified: lastmod,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/#about`,
      lastModified: lastmod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/#packages`,
      lastModified: lastmod,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/#contact-form`,
      lastModified: lastmod,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
