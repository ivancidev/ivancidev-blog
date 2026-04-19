---
name: colors
description: Paleta y tokens de color del ivancidev-blog (tema oscuro + acento naranja). Use when asked for "colors", "palette", "theme", "branding", "styling new components", "Tailwind colors", "match the site look", or any UI work that needs consistent hex values.
license: MIT
metadata:
  author: ivancidev-blog
  version: "1.0"
---

# Design tokens — colores (ivancidev-blog)

El sitio usa **tema oscuro** con **acento naranja** (equivalente a `orange-500` de Tailwind). Los estilos están en clases Tailwind con **valores arbitrarios en hex** (`text-[#f0f0f0]`, etc.), no en `theme.extend` de `tailwind.config.mjs`.

**Archivos de referencia:** `src/layouts/Layout.astro` (fondo y texto base), `src/styles/global.css` (`.prose-dark`, código, Shiki).

---

## Acento (marca)

| Uso | Hex | Notas |
|-----|-----|--------|
| Acento principal | `#f97316` | Enlaces hover, títulos destacados, bordes activos, CTAs, focus visible |
| Acento hover (CTA) | `#ea580c` | Botones primarios sobre naranja |
| Acento suave (glow) | `#f97316` con opacidad | ej. `bg-[#f97316]/5`, `border-[#f97316]/20`, `hover:border-[#f97316]/30` |
| Animación / borde vivo | `#fb923c` | Solo detalles (ej. keyframes en hero) |

---

## Fondos

| Uso | Hex |
|-----|-----|
| App / body | `#0a0a0a` |
| Superficie elevada / cards | `#111` con opacidad a veces (`bg-[#111]/50`) |
| Chips, código inline, bloques suaves | `#161616` |
| Pre / código bloque (prose) | `#0d0d0d` |
| Gradientes CTA | `from-[#111] to-[#0d0d0d]` |

---

## Texto

| Uso | Hex |
|-----|-----|
| Primario (titulares, cuerpo principal) | `#f0f0f0` |
| Secundario / párrafos | `#888` |
| Terciario / meta / breadcrumbs | `#555`, `#444` |
| Muy apagado (índices, separadores ·) | `#333` |
| Links breadcrumb hover | `#888` |

---

## Bordes y divisores

| Uso | Hex |
|-----|-----|
| Borde estándar | `#1f1f1f` |
| Borde hover (secundario) | `#333` |
| Navbar scroll (JS inline) | `#2a2a2a` vs `#1f1f1f` |

---

## Estados y utilidades

| Uso | Hex |
|-----|-----|
| “Online” / éxito puntual | `#22c55e` (con glow suave si aplica) |
| Skip link / CTA texto sobre acento | `text-black` sobre `bg-[#f97316]` |

---

## Blog (prose)

Variables en `src/styles/global.css` bajo `.prose-dark`: cuerpo `#888`, títulos `#f0f0f0`, enlaces y citas acento `#f97316`, código inline fondo `#161616`, pre `#0d0d0d`, bordes tabla/hr `#1f1f1f`.

En páginas MDX se combina `prose prose-dark` con utilidades `prose-a:text-[#f97316]`, etc. (ver `src/pages/blog/[slug].astro`).

---

## Excepciones

- **`src/lib/data.ts`**: cada herramienta puede tener `color` de **marca** (VS Code, Astro, etc.). Esos hex son propios del logo/tool, **no** sustituyen la paleta de la UI.
- **About**: gradientes decorativos pueden mezclar acento con toques de cyan (`#00ccff`/opacidad) en contenedores concretos; el acento de marca sigue siendo naranja.

---

## Reglas para nuevos componentes

1. **No usar** paletas genéricas de Tailwind para chrome del sitio (`orange-500`, `zinc-900`, `blue-500`…) salvo que coincidan exactamente con los hex de arriba; lo habitual en este repo es **hex explícito** en corchetes.
2. **Mantener contraste**: texto principal `#f0f0f0` / `#888` sobre `#0a0a0a`–`#111`.
3. **Interacción**: hover de enlaces secundarios `hover:text-[#f97316]`; cards `hover:border-[#f97316]/30` como patrón recurrente.
4. **Tipografía**: `font-mono` para meta, breadcrumbs, etiquetas técnicas — coherente con el resto del sitio.
