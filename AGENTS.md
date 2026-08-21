<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Sitio de Inés Taboga — psicóloga, terapia online

Landing de una sola página en español rioplatense, dirigida a personas en
Argentina y a hispanohablantes que viven en el exterior y buscan terapia online.

## Comandos

```bash
npm run dev     # http://localhost:3000
npm run build   # la portada debe salir como ○ (Static)
npm run lint
npx tsc --noEmit
```

No hay tests todavía ni runner instalado. El alias de imports es `@/*` → `src/*`.

## Estado

Existe la portada y nada más: una sola ruta, sin API, sin base de datos y sin
destino de deploy decidido. Está pensada para crecer hacia un panel donde la
psicóloga edite su propio contenido — de ahí la forma de la capa de contenido
que se describe abajo.

Pendiente de datos reales de la clienta: matrícula, universidad, años de
experiencia, precios, medios de pago, email y número de WhatsApp (sin ese
número el link `wa.me` no funciona). También falta el dominio definitivo para
completar `metadataBase` y la imagen de OpenGraph en `src/app/layout.tsx`.

## La regla que ordena el proyecto

**Ningún componente contiene texto ni valores de color propios.**

- **Texto** → `src/content/site.ts`, tipado por `SiteContent`. Se accede
  *únicamente* a través de `getSiteContent()` en `src/lib/content.ts`, que ya es
  `async` aunque hoy devuelva un objeto estático. Cuando se agregue el panel de
  administración, esa función pasa a leer de la base y devuelve la misma forma:
  los componentes no se tocan. Si un componente importa `siteContent` directo,
  rompe esa propiedad.
- **Color, tipografía y ritmo** → variables CSS en `:root`, en
  `src/app/globals.css`. Un hex literal dentro de un componente es un error.

Lo que está `[entre corchetes]` en el contenido son datos reales sin completar
(matrícula, universidad, precios, medios de pago, email, WhatsApp). No hay que
inventarlos.

## Estructura de estilos

Tres capas, de general a particular:

1. `globals.css` — tokens y primitivas compartidas: `.wrap`, `.section`,
   `.band`, `.title`, `.eyebrow`, `.lede`, `.split`, `.matted`, `.btn`.
2. `Sections.module.css` — un módulo compartido por todas las secciones de la
   portada. Es deliberado que sea uno solo: las secciones son variaciones de
   pocos patrones y repartirlas en diez archivos multiplica los lugares donde
   mirar cuando algo se desalinea.
3. `SiteHeader.module.css` — aparte porque el encabezado tiene estado y su
   propio comportamiento en mobile.

Los cortes responsive son dos y están en los tres archivos: **1040px** (las
grillas de dos y tres columnas colapsan a una, aparece la hamburguesa) y
**640px** (tipografía y botones para teléfono).

`.matted` es el patrón de imagen apoyada sobre un bloque de color desplazado; el
bloque se dibuja con `::before`. Si la imagen tapa el bloque en vez de dejarlo
asomar, el `padding` del contenedor y la posición del `::before` quedaron del
mismo lado — ese fue un bug real durante el diseño.

## Componentes

Casi todo es Server Component. Solo dos son `"use client"`, y por una razón
concreta:

- `SiteHeader.tsx` — el menú de mobile abre y cierra.
- `Faq.tsx` — acordeón de una respuesta abierta por vez.

`Icons.tsx` centraliza los SVG. **Nunca emoji como ícono.** Los nombres de ícono
viajan en el contenido como strings (`"heart"`, `"clock"`) y se resuelven contra
los mapas `serviceIcons` / `onlineIcons` — así un CMS puede elegir el ícono sin
poder inyectar markup.

## Diseño

El diseño aprobado vive en un canvas aparte:
https://claude.ai/code/artifact/cbc3aef3-b334-48db-8bae-27fa7e014971

Registro editorial cálido: greige sobre lino, Cormorant Garamond en pesos
livianos para los títulos, Karla para el cuerpo, mucho aire y fotos apoyadas
sobre bloques de color. Al agregar secciones nuevas hay que seguir ese
vocabulario, no inaugurar uno.

Las cuatro imágenes de `public/img/` son de relleno abstracto, generadas en la
paleta del sitio. Se reemplazan por las fotos reales manteniendo las
proporciones (`retrato` 3:4, `sobre-mi` 1:1, `online` y `espacio` apaisadas) y
actualizando `width`/`height` en `site.ts`.

El botón de WhatsApp es el único elemento del sitio que usa verde: es color de
marca ajena y está puesto para destacar sobre la paleta cálida. No armonizarlo.
