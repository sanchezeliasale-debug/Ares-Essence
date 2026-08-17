# Ares Essence — Sitio web

Sitio estático de 5 páginas (Inicio, Catálogo, Encontrá tu fragancia, Nosotros, Contacto) para la perfumería masculina Ares Essence. Sin backend ni compras online: el catálogo dirige a la tienda de [Tiendanube](https://aresessence.mitiendanube.com/).

## Cómo verlo

Abrí `index.html` directamente en el navegador, o serví la carpeta con cualquier servidor estático (ej. `npx serve .`).

## Publicarlo online (gratis)

La forma más simple es [Netlify Drop](https://app.netlify.com/drop) o [Vercel](https://vercel.com): arrastrás esta carpeta y queda publicado con una URL. También podés usar GitHub Pages.

## Qué falta completar antes de publicar

Buscá `href="#"` en los archivos `.html` y reemplazá por los links reales:

1. ~~**Instagram**~~ — ya cargado: https://www.instagram.com/_aresessence/
2. ~~**WhatsApp**~~ — ya cargado: +54 11 2478-1293
3. ~~**Email**~~ — ya cargado: aresessenceparfum@gmail.com
4. **TikTok** — todavía no está activo, así que en vez de link muestra "Próximamente" (atenuado, sin click) en el header, "Seguí a Ares Essence" (Inicio), la tarjeta de Contacto y el footer. Cuando tengas la cuenta: buscá la clase `is-disabled` en los 5 `.html` (5 apariciones) y sacala, agregá el `href="https://www.tiktok.com/@tu-usuario" target="_blank" rel="noopener"`, y en el ícono del header sacá el `(Próximamente)` del `title`; en la tarjeta de Contacto (`contacto.html`) reemplazá "Próximamente" por tu `@usuario`.
5. ~~**Tiendanube**~~ — ya cargado: https://aresessence.mitiendanube.com/ (ícono del header, botón en Inicio, tarjeta destacada en Contacto, footer, y el botón "Ver en Tiendanube" de los 8 productos en `catalogo.html` y en `test.html`/`js/quiz.js`). Por ahora todos los productos apuntan a la home de la tienda — cuando cargues cada perfume en Tiendanube y tengas la URL de su ficha, reemplazá el link de ese producto puntual (en `catalogo.html` y en el campo `link` de `js/quiz.js`) para que lleve directo a esa publicación.

## Logo

El logo (ícono del carnero + isotipo completo) está en `img/ares-essence-icon.png` (usado en header, footer y favicon) e `img/ares-essence-logo.png` (versión completa con "ARES ESSENCE" y el tagline "Tu firma invisible", disponible para usar en redes o materiales impresos).

## Fotos

Las fotos del hero de Inicio (`img/hero-inicio.jpg`) y de Nosotros (`img/nosotros-hero.jpg`) ya están cargadas. Los 12 perfumes del catálogo ya tienen foto real (fondo blanco, estilo catálogo de producto):

**En stock:**
- Hawas For Him → `img/product-hawas-for-him.jpg` (también en "Destacados" de Inicio)
- Armaf Urban Man Elixir → `img/product-urban-man-elixir.jpg` (también en "Destacados" de Inicio)
- Lattafa Khamrah → `img/product-khamrah.jpg` (también en "Destacados" de Inicio)
- Armaf Club De Nuit Precieux I → `img/product-precieux-i.jpg`
- French Avenue Atlantis Extrait → `img/product-atlantis-extrait.jpg`
- French Avenue Vulcan Feu → `img/product-vulcan-feu.jpg`
- Rayhaan Obsidian → `img/product-obsidian.jpg`
- Rayhaan Tropical Vibe → `img/product-tropical-vibe.jpg`

**Sin stock** (aparecen al final del catálogo, en gris, con badge "Sin stock" y un botón que abre WhatsApp con un mensaje precargado en vez de "Ver en Tiendanube"):
- Armaf Club De Nuit Intense Man → `img/product-intense-man.jpg`
- Lattafa The Kingdom → `img/product-the-kingdom.jpg`
- Lattafa Asad → `img/product-asad.jpg`
- AFNAN 9pm → `img/product-9pm.jpg`

Estos 4 no están en el quiz ni en "Destacados" de Inicio (no tiene sentido recomendar algo que no se puede comprar). Cuando vuelvan a tener stock: sacá la clase `product-card--soldout` del `<div>`, sacá el `<div class="stock-badge">Sin stock</div>` y volvé a poner el botón `<a href="https://aresessence.mitiendanube.com/" class="btn-outline" target="_blank" rel="noopener">Ver en Tiendanube</a>` en vez del de WhatsApp — y si querés, sumalo también a `js/quiz.js` siguiendo la sección de abajo.

Si en algún momento cambiás una foto o agregás un producto nuevo:

1. Guardá la imagen en la carpeta `img/`. Si tiene fondo blanco como las que ya están cargadas, usá:
   ```html
   <img src="img/nombre-del-archivo.jpg" alt="Nombre del perfume" class="img-placeholder" style="object-fit:contain;background:#fff">
   ```
   Si es una foto con fondo oscuro/neutro (como el hero o la de Nosotros), usá `object-fit:cover` sin el `background:#fff`.
2. Reemplazá el `<div class="img-placeholder">...</div>` correspondiente por ese `<img>` (mantené la clase `img-placeholder`).

## Videos

En Inicio, entre "100% originales" y "Destacados", hay 2 videos en loop (mudos, sin controles, autoplay) mostrando Armaf Club De Nuit Precieux I y Lattafa Khamrah: `img/video/precieux-i.mp4` y `img/video/khamrah.mp4`.

Se comprimieron con ffmpeg (se les sacó el audio, se bajó la resolución a 960px de ancho y el bitrate) para que no pesen tanto — igual pesan unos MB, así que se cargan recién cuando el usuario está por llegar a esa sección (ver `js/main.js`, el `IntersectionObserver` que busca `.brand-video`), no al abrir la página.

Para agregar o cambiar un video:
1. Comprimilo primero (un video de celular sin comprimir puede pesar 20MB+, demasiado para una web). Con ffmpeg: `ffmpeg -i original.mp4 -an -vf "scale=960:-2" -c:v libx264 -crf 26 -preset slow -movflags +faststart img/video/nombre.mp4`
2. Guardalo en `img/video/`.
3. En `index.html`, agregá o editá:
   ```html
   <video class="brand-video" muted loop playsinline preload="none" data-src="img/video/nombre.mp4" aria-label="Descripción del video"></video>
   ```
   (usá `data-src`, no `src` — el JS se encarga de cargarlo cuando corresponde).

## Estructura

```
index.html          Inicio
catalogo.html       Catálogo (8 en stock + 4 sin stock)
test.html           Encontrá tu fragancia (quiz)
nosotros.html       Nosotros
contacto.html       Contacto
css/style.css       Todos los estilos
js/main.js          Menú hamburguesa mobile
js/quiz.js          Lógica y datos del quiz
.static-server.js   Servidor local solo para previsualizar durante el desarrollo (no hace falta para publicar el sitio; los hosts de la sección "Publicarlo online" no lo usan)
```

## Agregar o quitar perfumes del catálogo

Cada producto en `catalogo.html` es un bloque `<div class="product-card product-card--catalog">...</div>`. Copiá uno completo y editá nombre, notas, temporada y el link de Tiendanube para sumar un producto nuevo.

## El test "Encontrá tu fragancia"

Es un quiz de 5 preguntas, 100% en el navegador (sin backend ni servicios externos). Cada opción de respuesta suma puntos a los perfumes con los que mejor coincide (según el perfil real de cada fragancia: acordes, notas, temporada e intensidad, investigado en Fragrantica), y al final se muestran los 3 perfumes con más puntos.

Todo vive en `js/quiz.js`:
- `PERFUMES` — nombre, notas, ocasión, texto de "por qué" y link de Tiendanube de cada uno de los 8 productos.
- `QUESTIONS` — las 5 preguntas, con las opciones y los puntos que suma cada una por perfume.

Si agregás o sacás un perfume del catálogo, sumalo/quitalo también acá para que el test lo pueda recomendar. Si querés ajustar qué recomienda para cada respuesta, es cuestión de tocar los números en `scores` de cada opción.
