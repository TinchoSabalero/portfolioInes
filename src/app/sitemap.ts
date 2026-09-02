import type { MetadataRoute } from "next";

/** Hoy hay una sola ruta. Cuando se sumen más, se listan acá. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://inestaboga.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
