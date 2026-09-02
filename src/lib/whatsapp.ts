import type { Profile } from "@/content/site";

/**
 * Arma el enlace de WhatsApp con el mensaje ya escrito en el chat.
 *
 * El mensaje se guarda en el contenido como texto plano y se escapa acá, para
 * que quien lo edite —hoy en el archivo, mañana desde el panel— no tenga que
 * saber nada de codificación de URL.
 */
export function buildWhatsAppHref(whatsapp: Profile["whatsapp"]): string {
  const base = `https://wa.me/${whatsapp.number}`;
  return whatsapp.message
    ? `${base}?text=${encodeURIComponent(whatsapp.message)}`
    : base;
}
