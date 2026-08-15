# Handoff: Sitio Elegantia (perfumes masculinos)

## Overview
Sitio de 4 páginas para Elegantia, marca de venta de perfumes masculinos originales. Objetivo: comunicar seriedad/elegancia, mostrar una vidriera de productos destacados, y dirigir tráfico a Instagram, TikTok y la tienda de Mercado Libre.

## About the Design Files
Los archivos de este paquete (`index.dc.html`, `Catalogo.dc.html`, `Nosotros.dc.html`, `Contacto.dc.html`, `Logo.dc.html`) son **referencias de diseño en HTML** — prototipos de alta fidelidad, no código de producción para copiar tal cual. La tarea es **recrear estos diseños en el entorno que se use para desarrollar el sitio** (por ejemplo React/Next.js, Vue, o HTML/CSS estático), aplicando las convenciones de ese proyecto. Si no hay stack elegido aún, cualquier framework moderno de sitios estáticos (Next.js, Astro, o HTML/CSS/JS simple) es razonable dado que es un sitio de marketing chico, sin backend complejo.

## Fidelity
**Alta fidelidad (hifi)**: colores, tipografía, espaciados y textos definitivos (salvo datos de contacto/redes, que son placeholders — ver abajo). Recrear pixel-perfect.

## Screens / Views

### 1. Inicio (`index.dc.html`)
- Header sticky: logo "ELEGANTIA" (izquierda), nav (Inicio/Catálogo/Nosotros/Contacto, centro), 3 íconos circulares de redes (derecha, IG/TT/ML).
- Hero: imagen full-bleed 640px alto con degradado oscuro superior→inferior, título en Cormorant Garamond 60px, subtítulo, botón "Ver colección" (fondo bronce, texto oscuro).
- Bloque de originalidad: texto centrado corto, máx 820px de ancho, cita destacada en Cormorant Garamond 28px.
- Grid "Destacados": 3 columnas, cada card = imagen 340px alto + nombre (Cormorant 20px 600) + notas (Jost 13px).
- Bloque redes sociales: fondo gris oscuro medio, título + texto + 3 botones outline (Instagram/TikTok/Mercado Libre).
- Footer: logo + descripción, 2 columnas de links (Sitio / Seguinos), línea copyright.

### 2. Catálogo (`Catalogo.dc.html`)
- Mismo header/footer que Inicio.
- Título de sección centrado ("Nuestros perfumes") + texto descriptivo.
- Grid responsive `repeat(auto-fill, minmax(300px,1fr))`, 7 productos, cada card:
  - Imagen 360px alto (placeholder drag-and-drop en el prototipo).
  - Nombre (Cormorant 22px 600).
  - Notas olfativas (Jost 13px, color secundario).
  - Etiqueta de temporada/ocasión de uso (Jost 12px, color bronce).
  - Botón outline "Ver en Mercado Libre" (debe linkear a la publicación real del producto).
- Productos y datos (investigados, no inventados):
  1. Armaf Club De Nuit Precieux I — piña, caramelo, pimienta rosa, ámbar amaderado — todo el año, día y noche.
  2. Armaf Urban Man Elixir — bergamota, azahar, vetiver, ámbar — otoño-invierno, noche/eventos formales.
  3. Lattafa Khamrah — canela, dátiles, praliné, vainilla — otoño-invierno, noche.
  4. French Avenue Liquid Brun Ed. Limitada — cardamomo, azahar, ámbar, sándalo — otoño-invierno, versátil todo el día.
  5. Dumont Nitro Elixir XDP 100ml — bergamota, cardamomo, praliné, ámbar — clima frío, noche.
  6. AFNAN 9 PM Elixir — nuez moscada, cuero, lavanda, vainilla — otoño-invierno, eventos formales/noche.
  7. HAWAS Tropical — coco, higo, jengibre, sándalo — primavera-verano, uso diurno.
- Nota al pie: "Todos nuestros perfumes son 100% originales..."

### 3. Nosotros (`Nosotros.dc.html`)
- Hero de 2 columnas: texto (título + 2 párrafos) / imagen 460px alto.
- Sección "Lo que nos importa": 3 columnas (Originalidad, Selección, Trato cercano), cada una con título en bronce + párrafo.
- CTA final: fondo gris oscuro medio, cita centrada + botón "Contactanos" → Contacto.

### 4. Contacto (`Contacto.dc.html`)
- Título centrado + texto.
- Grid 2 columnas de tarjetas de contacto (borde sutil, fondo levemente más claro que el body): WhatsApp, Email, Instagram, TikTok, y una tarjeta ancha (span 2 columnas) para Mercado Libre con borde en color bronce.
- Mismo footer.

### Logo (`Logo.dc.html`)
Referencia de 3 variantes de logo cuadrado (1280×1280px exportado) para foto de perfil de redes. **Variante elegida: "Wordmark con filetes"** — fondo `oklch(15% 0.004 50)`, texto "ELEGANTIA" en Cormorant Garamond 600, 34px, letter-spacing 0.18em, color `oklch(94% 0.006 60)`, con una línea fina de 36px arriba y abajo en color bronce `oklch(64% 0.09 75)`. El PNG final ya fue exportado a 1280×1280 (4x) para el usuario.

## Interactions & Behavior
- Nav y footer con links `<a>` estándar entre las 4 páginas (rutas relativas por archivo).
- Botones "Ver en Mercado Libre" deben apuntar a la URL real de cada publicación (hoy son placeholders `#`).
- Tarjetas de contacto son links directos: `https://wa.me/...`, `mailto:...`, e IG/TikTok/ML (hoy placeholders, completar con URLs reales).
- Sin animaciones ni estados de carga — sitio estático.
- No hay responsive breakpoints implementados en el prototipo (diseñado para desktop ~1200px); al implementar, adaptar grids a mobile (columnas a 1, nav a menú hamburguesa).

## State Management
No hay estado de aplicación — sitio de contenido estático, sin formularios ni fetch de datos.

## Design Tokens

**Colores**
- Fondo principal: `oklch(15% 0.004 50)` (casi negro cálido)
- Fondo secundario/cards: `oklch(19% 0.006 50)`
- Fondo footer: `oklch(13% 0.004 50)`
- Bordes: `oklch(30% 0.006 50)`
- Texto principal: `oklch(94% 0.006 60)` (blanco cálido)
- Texto secundario: `oklch(68%–80% 0.008–0.01 60)` (gris cálido)
- Acento (bronce/dorado): `oklch(64% 0.09 75)` — usado en links, líneas, botones y etiquetas

**Tipografía**
- Serif (títulos, logo, nombres de producto): Cormorant Garamond (400/500/600/700)
- Sans (nav, cuerpo, labels): Jost (300/400/500/600)
- Escala títulos: 60px (hero) / 42–44px (títulos de página) / 28–34px (subtítulos) / 20–24px (nombres producto)
- Escala cuerpo: 13–16px
- Labels/etiquetas: 11–13px, uppercase, letter-spacing 0.08–0.25em

**Espaciado**
- Ancho máximo de contenido: 1200px (900/820px en páginas más angostas como Contacto)
- Padding lateral estándar: 32px
- Gap entre cards de grid: 32–40px

**Bordes/otros**
- Sin border-radius (esquinas rectas en toda la UI — parte de la identidad sobria)
- Sin sombras
- Bordes de 1px sólido en cards y botones outline

## Assets
- Tipografías: Google Fonts (Cormorant Garamond, Jost) — cargadas vía `<link>`.
- Imágenes de producto: son placeholders (drag-and-drop) en el prototipo — el cliente subirá fotos reales de cada perfume. No hay assets de imagen definitivos todavía.
- Logo: variante "wordmark con filetes" ya elegida y exportada como PNG 1280×1280 (ver `Logo.dc.html`).
- Iconos de redes en el header son placeholders de texto (IG/TT/ML) — reemplazar por SVGs de íconos reales al implementar.

## Pending / placeholders to fill in real data
- Número de WhatsApp real (hoy `+54 9 00 0000 0000`)
- Email real (hoy `hola@elegantia.com`)
- Usuario/link real de Instagram y TikTok (hoy `@elegantia.perfumes`)
- URL real de la tienda de Mercado Libre y de cada publicación de producto

## Files
- `index.dc.html` — Inicio
- `Catalogo.dc.html` — Catálogo
- `Nosotros.dc.html` — Nosotros
- `Contacto.dc.html` — Contacto
- `Logo.dc.html` — opciones de logo (referencia)
