# Sitio de Inés Taboga

Landing de una sola página para una psicóloga que atiende por videollamada, en
español, a personas en Argentina y a hispanohablantes que viven en el exterior.

Next.js 16 con App Router y TypeScript. La portada se prerenderiza estática.

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
```

Otros comandos: `npm run build`, `npm run lint`, `npx tsc --noEmit`.

## Dónde tocar qué

| Para cambiar | Editar |
| --- | --- |
| Cualquier texto, precio o dato de contacto | `src/content/site.ts` |
| Colores, tipografías, espaciados | variables en `:root`, en `src/app/globals.css` |
| Fotos | `public/img/` (y las medidas en `site.ts`) |

Los componentes no contienen texto ni colores propios, y conviene que siga así:

- El texto entra por `getSiteContent()` (`src/lib/content.ts`), única puerta de
  entrada al contenido. Ya es `async` aunque hoy devuelva un objeto estático,
  para que el día que el contenido venga de una base de datos no haya que tocar
  ningún componente. Importar `siteContent` directo rompe esa propiedad.
- El color y la tipografía salen de variables CSS. Un hex literal dentro de un
  componente es un error.

Lo que está `[entre corchetes]` son datos reales sin completar: matrícula,
universidad, precios, medios de pago, email y WhatsApp.
