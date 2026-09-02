import type { MetadataRoute } from "next";

import { SITIO } from "@/lib/site";

/** Hoy hay una sola ruta. Cuando se sumen más, se listan acá. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITIO,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
