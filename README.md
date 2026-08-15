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
4. **TikTok** — en el header (ícono), en "Seguí a Ares Essence" (Inicio), en Contacto y en el footer.
5. ~~**Tiendanube**~~ — ya cargado: https://aresessence.mitiendanube.com/ (ícono del header, botón en Inicio, tarjeta destacada en Contacto, footer, y el botón "Ver en Tiendanube" de los 8 productos en `catalogo.html` y en `test.html`/`js/quiz.js`). Por ahora todos los productos apuntan a la home de la tienda — cuando cargues cada perfume en Tiendanube y tengas la URL de su ficha, reemplazá el link de ese producto puntual (en `catalogo.html` y en el campo `link` de `js/quiz.js`) para que lleve directo a esa publicación.

## Logo

El logo (ícono del carnero + isotipo completo) está en `img/ares-essence-icon.png` (usado en header, footer y favicon) e `img/ares-essence-logo.png` (versión completa con "ARES ESSENCE" y el tagline "Tu firma invisible", disponible para usar en redes o materiales impresos).

## Fotos

Las fotos del hero de Inicio (`img/hero-inicio.jpg`) y de Nosotros (`img/nosotros-hero.jpg`) ya están cargadas. De los 8 perfumes del catálogo, 3 ya tienen foto real (fondo blanco, estilo catálogo de producto):
- Hawas For Him → `img/product-hawas-for-him.jpg`
- Armaf Urban Man Elixir → `img/product-urban-man-elixir.jpg`
- Lattafa Khamrah → `img/product-khamrah.jpg` (también se usa en "Destacados" de Inicio)

Los otros 5 (Precieux I, Atlantis, Vulcan Feu, Obsidian, Tropical Vibe) siguen con placeholder (recuadro con el nombre). Para poner una foto real:

1. Guardá la imagen en la carpeta `img/`. Si tiene fondo blanco como las 3 ya cargadas, usá:
   ```html
   <img src="img/nombre-del-archivo.jpg" alt="Nombre del perfume" class="img-placeholder" style="object-fit:contain;background:#fff">
   ```
   Si es una foto con fondo oscuro/neutro (como el hero o la de Nosotros), usá `object-fit:cover` sin el `background:#fff`.
2. Reemplazá el `<div class="img-placeholder">...</div>` correspondiente por ese `<img>` (mantené la clase `img-placeholder`).

## Estructura

```
index.html          Inicio
catalogo.html       Catálogo (8 perfumes)
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
