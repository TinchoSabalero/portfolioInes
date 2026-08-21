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

Los componentes no contienen texto ni colores propios. `AGENTS.md` explica por
qué y qué más conviene saber antes de meter mano.
