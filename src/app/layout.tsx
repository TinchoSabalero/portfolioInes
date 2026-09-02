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
 * `metadataBase` es lo que convierte las rutas relativas de abajo en
 * direcciones absolutas. Sin eso, la vista previa al compartir por WhatsApp
 * sale sin imagen — y ése es justamente el canal por donde la van a
 * recomendar.
 */
const SITIO = "https://inestaboga.com";

const TITULO = "Inés Taboga · Psicóloga · Terapia online en español";
const DESCRIPCION =
  "Terapia online en español para personas en Argentina y para quienes viven en el exterior. Sesiones por videollamada, con horario coordinado según tu huso.";

export const metadata: Metadata = {
  metadataBase: new URL(SITIO),
  title: TITULO,
  description: DESCRIPCION,
  applicationName: "Inés Taboga",
  authors: [{ name: "Inés Taboga" }],
  keywords: [
    "psicóloga online",
    "psicóloga online en español",
    "terapia online en español",
    "psicóloga argentina online",
    "terapia psicológica por videollamada",
    "psicóloga para hispanohablantes en el exterior",
    "terapia en español desde el extranjero",
    "psicoterapia online ansiedad",
    "terapia online dependencia emocional",
    "psicóloga que atiende por videollamada",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: TITULO,
    description:
      "Terapia online en español para personas en Argentina y para quienes viven lejos de casa.",
    url: SITIO,
    siteName: "Inés Taboga",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Inés Taboga, psicóloga integral · Terapia online en español",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description:
      "Terapia online en español para personas en Argentina y para quienes viven lejos de casa.",
    images: ["/og.png"],
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
