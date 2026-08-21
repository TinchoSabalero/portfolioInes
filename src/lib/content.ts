import { siteContent, type SiteContent } from "@/content/site";

/**
 * Única puerta de entrada al contenido del sitio.
 *
 * Hoy devuelve el archivo estático. Cuando exista el panel de administración,
 * acá adentro va la consulta a la base de datos (y el archivo estático queda
 * como fallback si la base no responde). Los componentes no se enteran: siguen
 * recibiendo la misma forma de datos.
 *
 * Es `async` desde el primer día justamente para que ese cambio no obligue a
 * tocar ningún componente.
 */
export async function getSiteContent(): Promise<SiteContent> {
  return siteContent;
}
