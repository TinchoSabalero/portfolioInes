import type { Metadata } from "next";
import { Cormorant_Garamond, Karla } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-karla",
});

/**
 * El sitio depende de aparecer en búsquedas como "psicóloga argentina online"
 * o "terapia en español desde el exterior", así que los metadatos importan
 * tanto como el diseño.
 *
 * Falta definir el dominio final para `metadataBase` y la imagen de OpenGraph.
 */
export const metadata: Metadata = {
  title: "Inés Taboga · Psicóloga · Terapia online en español",
  description:
    "Terapia online en español para personas en Argentina y para quienes viven en el exterior. Sesiones por videollamada, con horario coordinado según tu huso.",
  keywords: [
    "psicóloga online",
    "terapia en español",
    "psicóloga argentina",
    "terapia online exterior",
    "psicoterapia videollamada",
  ],
  openGraph: {
    title: "Inés Taboga · Psicóloga · Terapia online en español",
    description:
      "Terapia online en español para personas en Argentina y para quienes viven lejos de casa.",
    locale: "es_AR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR" className={`${cormorant.variable} ${karla.variable}`}>
      <body>{children}</body>
    </html>
  );
}
