# Guía: replicar el estilo de la web en Tiendanube

Paleta y tipografía exactas de [ares-essence] convertidas para usar en el panel de Tiendanube (colores, tipografía) y en el editor de CSS personalizado.

## 1. Paleta de colores (hex)

Tu sitio usa `oklch()`, que Tiendanube no soporta — estos son los mismos colores convertidos a hex, listos para pegar en cualquier selector de color:

| Uso                                  | Hex       | Dónde usarlo en Tiendanube |
|---------------------------------------|-----------|------------------------------|
| Fondo principal                       | `#0D0B0A` | Color de fondo general / body |
| Fondo de tarjetas / secciones         | `#161311` | Fondo de productos destacados, cards |
| Fondo de footer                       | `#080706` | Footer |
| Bordes / líneas divisorias            | `#302D2B` | Bordes de inputs, separadores |
| Texto principal                       | `#EEEAE7` | Texto sobre fondo oscuro |
| Texto secundario                      | `#9D9792` | Descripciones, texto menos importante |
| Texto terciario                       | `#C2BDB9` | Subtítulos |
| **Acento (bronce/dorado)**            | `#AC844A` | Color primario / botones / links / precios |
| Acento hover                          | `#BF965D` | Estado hover de botones y links |

**Dónde cargarlos:** `Mi tienda > Diseño > Editar diseño actual > Colores`. La mayoría de los temas de Tiendanube piden 2-3 colores (primario, secundario, fondo). Usá:
- **Color primario / de acento** → `#AC844A`
- **Fondo** → `#0D0B0A` (si el tema permite tema oscuro; muchos temas de Tiendanube solo soportan fondo claro — ver nota abajo)
- **Texto** → `#EEEAE7`

## 2. Tipografía

El sitio usa dos fuentes de Google Fonts:
- **Cormorant Garamond** (títulos, nombres de producto, logo)
- **Jost** (menú, botones, cuerpo de texto)

Es muy probable que ninguna de las dos esté en el menú desplegable de tipografías de Tiendanube (`Diseño > Tipo de letra`). Si no aparecen, se agregan por CSS (ver snippet abajo, sección 4).

Si tu tema no soporta 2 fuentes distintas, priorizá **Cormorant Garamond** para títulos — es la que más define el estilo "perfumería premium" del sitio.

## 3. Logo

Subí `img/ares-essence-logo.png` (versión completa, con el tagline) o `img/ares-essence-icon.png` (solo el carnero, para favicon/ícono) en `Diseño > Mi tienda > Logo`. Ambos ya tienen el fondo transparente, así que van a verse bien sin importar el color de fondo que uses.

## 4. CSS personalizado (opcional, para mayor fidelidad)

En `Mi tienda > Diseño > Edición avanzada de CSS` pegá esto al principio para importar las mismas fuentes:

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Jost:wght@300;400;500;600&display=swap');

body, h1, h2, h3 {
  font-family: 'Cormorant Garamond', serif;
}

p, a, button, span, div {
  font-family: 'Jost', sans-serif;
}
```

⚠️ Estas reglas son muy genéricas (aplican a casi todo el HTML) porque **cada tema de Tiendanube usa sus propias clases** — no hay variables CSS universales como en tu web. Para afinar bien qué elemento cambia con qué fuente/color, necesitás los selectores específicos de tu tema. Tiendanube publica una guía de CSS por tema (Material, Idea, Atlántico, Trend, Amazonas, Simple, etc.) — buscá la de tu tema en el [Centro de ayuda](https://ayuda.tiendanube.com) o decime cuál elegiste y te armo el CSS específico.

**Truco rápido para encontrar selectores vos mismo:** con la tienda publicada, click derecho sobre cualquier botón o texto → "Inspeccionar" (DevTools del navegador) → mirá la clase CSS que tiene ese elemento → usala en tu `Edición avanzada de CSS` con el color de la tabla de arriba.

## 5. Otros detalles de estilo para que se sienta "la misma marca"

- **Esquinas rectas, sin border-radius.** El sitio no usa esquinas redondeadas en botones ni cards — es parte de la identidad sobria. Si tu tema tiene una opción de "bordes redondeados", ponela en 0 si se puede.
- **Sin sombras.** Evitá "drop shadows" en cards/botones si el tema las trae por default.
- **Botones:** fondo bronce (`#AC844A`) con texto oscuro (`#0D0B0A`) encima — no blanco. Así se ve en "Ver colección" del sitio.
- **Fondo oscuro:** la mayoría de los temas gratuitos de Tiendanube arrancan en blanco. Si tu tema no soporta fondo oscuro general, una alternativa más simple (y casi todos los temas la soportan) es dejar fondo blanco/crema y usar el bronce como único color de marca en botones, precios y acentos — sigue siendo reconocible como la misma marca aunque no sea idéntico al sitio.

## 6. Si tenés plan que permite HTML/apps de terceros

Algunos planes de Tiendanube permiten insertar scripts (Google Tag Manager, apps del marketplace). Si tenés esa opción, se puede inyectar el `<link>` de Google Fonts directo en el `<head>` en vez de usar `@import` en el CSS (carga un poco más rápido). No es necesario, el `@import` de arriba funciona igual.
