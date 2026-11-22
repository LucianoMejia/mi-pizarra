# Mi Pizarra

Pizarra digital para dar clases, tutorías, explicar ideas, hacer lluvias de ideas o tomar notas a mano. Incluye herramientas especiales para matemáticas (planos cartesianos, gráficas tipo GeoGebra y símbolos), pero sirve para cualquier materia o tema. Es una página estática: abre `index.html` en Chrome o Edge (doble clic) o publícala en cualquier hosting estático.

## Instalar como app (Windows, Mac, Linux, Android)

Mi Pizarra es una app web instalable (PWA):

1. Abre https://lucianomejia.github.io/mi-pizarra/ en **Chrome** o **Edge**.
2. Menú ☰ → **Instalar Mi Pizarra como app**, o el ícono de instalar (⊕) en la barra de direcciones.
3. Queda en el menú Inicio y la barra de tareas, abre en su propia ventana y **funciona sin internet**.

Con la app instalada, los archivos `.pizarra` se pueden abrir con doble clic (en Windows: clic derecho → Abrir con → Mi Pizarra la primera vez).
Las actualizaciones llegan solas al publicar una nueva versión en GitHub Pages.
En iPhone/iPad: Safari → Compartir → «Agregar a inicio».

## Herramientas

| Tecla | Herramienta |
|---|---|
| V | Seleccionar y mover |
| S | Selección libre: dibuja un lazo alrededor de lo que quieres seleccionar |
| 1…9 | Lápices de la bandeja (P = último bolígrafo, M = último resaltador) |
| E | Borrador (modo Goma o Trazo completo) |
| L / A / R / O / Y | Línea, flecha, rectángulo, elipse, triángulo (Mayús = recto/cuadrado) |
| G | Plano cartesiano |
| F | Graficar, tipo GeoGebra |
| T | Texto con barra de símbolos (π, √, ², ≤, ∞, θ, Σ, ∫, ℝ…) |
| Q | Fórmula (LaTeX) |
| C | Compás |
| K | Puntero láser |
| H / Espacio / Esc | Mover el lienzo (Esc siempre vuelve a la mano) |

## En el celular

- La barra de herramientas va **abajo**; deslízala de lado para ver todas. Deshacer y rehacer están al inicio.
- Las páginas van arriba. El zoom se hace **pellizcando con dos dedos**, que también sirven para moverte.
- **Doble toque** sobre una fórmula o una gráfica para editarla.
- Los paneles suben desde abajo y los menús se abren hacia arriba cuando no caben.
- Se puede instalar como app: en Android, Chrome → menú ⋮ → Instalar; en iPhone, Safari → Compartir → «Agregar a inicio».

## Tabletas gráficas y lápices digitales

Funciona con Wacom, Huion, XP-Pen, Surface Pen, etc.: la presión cambia el grosor y la punta borradora borra.
El botón lateral del lápiz mueve el lienzo. Todos los atajos están en Menú → **Atajos de teclado** (F1 o ?), en un panel a la derecha.

Atajos de una tecla para asignar a los botones de la tableta (ExpressKeys):

| Tecla | Acción |
|---|---|
| 1 … 9 | Elegir lápiz de la bandeja |
| . y , | Lápiz siguiente / anterior |
| + y − | Acercar / alejar donde está el lápiz |
| 0 | Zoom 100 % |
| Alt + / Alt − | Más / menos grosor del lápiz, borrador, figuras o texto |
| Alt + rueda | Ajustar el grosor con el mouse |
| E | Borrador |
| Esc | Mano de mover |
| Ctrl+Z / Ctrl+Y | Deshacer / rehacer |
| AvPág / RePág | Página siguiente / anterior |

Al cambiar de lápiz aparece un aviso con el lápiz activo, así no tienes que mirar la barra.

## Bandeja de lápices

Vienen 7 lápices listos: bolígrafo negro, azul y rojo, pluma caligráfica, marcador y dos resaltadores.
- Toca un lápiz para usarlo; **tócalo otra vez** para cambiar su tipo (Bolígrafo, Pluma, Marcador, Lápiz, Resaltador), color y grosor.
- **+** agrega un lápiz nuevo (hasta 12). Desde su menú puedes duplicarlo o eliminarlo.
- La bandeja se recuerda entre sesiones.

## Fórmulas

Herramienta **Fórmula (Q)**: haz clic donde quieras y escribe en LaTeX, por ejemplo `\frac{-b \pm \sqrt{b^2-4ac}}{2a}`, o usa los botones (fracción, raíz, potencia, Σ, ∫, límite, matriz, sistema…). Se ve como en un libro, se adapta al color de la pizarra y sale en PNG/PDF. Doble clic para editarla.

## Instrumentos y presentación

Botón de la regla en la barra:
- **Regla**: arrástrala para moverla y gírala con el botón azul o la rueda (Mayús = de 15° en 15°). Dibuja con cualquier lápiz pegado a uno de sus bordes y la línea sale perfectamente recta.
- **Transportador**: se mueve y gira igual; escala de 0° a 180° en ambos sentidos.
- **Compás (C)**: presiona en el centro, abre hasta el radio y gira para trazar el arco. Si sueltas sin girar, dibuja el círculo completo.
- **Cortina**: tapa la página y la arrastras hacia abajo para ir revelando.
- **Foco**: oscurece todo menos un círculo que sigue al puntero (tamaño S, M o L).

## Selección libre (lazo)

Con **S** (o el botón del lazo, junto a Seleccionar) dibuja a mano alrededor de lo que quieras: se selecciona todo lo que quede dentro, aunque tenga cualquier forma. Sin cambiar de herramienta puedes arrastrar la selección, cambiarle el tamaño desde las esquinas o usar la barra (bloquear, duplicar, orden, eliminar). Mayús suma a la selección y un toque sin dibujar selecciona lo que está debajo.

## Bloquear elementos

Con Seleccionar (V) toca un elemento: arriba aparece una barra con **Bloquear**, Duplicar, Traer al frente, Enviar atrás y Eliminar (también **Ctrl+L**).
Arrastra cualquiera de las cuatro esquinas de la selección para cambiarle el tamaño: trazos, fórmulas, textos, figuras, imágenes o varios elementos a la vez se escalan manteniendo su proporción (el grosor de los trazos también).
Lo bloqueado no se mueve, no se borra y queda debajo de la tinta (la goma no lo toca). Las imágenes y las gráficas también van siempre debajo de la tinta.

## PDFs

- **Menú → Abrir PDF como páginas…** o arrastra el PDF a la ventana: cada hoja se convierte en una página, ya bloqueada, para escribir encima.
- **Menú → Exportar esta página a PDF** guarda solo la página actual; **Exportar todas las páginas a PDF** (Ctrl+P) guarda la clase completa.

## Gráficas (tipo GeoGebra)

Elige **F**, arrastra un recuadro y escribe en el panel lateral:

| Escribe | Resultado |
|---|---|
| `f(x) = x^2 - 3` | función con nombre |
| `2sin(x)` | función rápida (se llama g, h…) |
| `a·x^2 + b` | crea deslizadores **a** y **b**, con botón ▶ para animarlos |
| `A = (2, 3)` o `(a, f(a))` | punto, fijo o móvil |
| `x = 2` | recta vertical |
| `y > x + 1`, `y <= x^2` | región sombreada |
| `g(x) = f'(x)` | derivada y funciones que usan otras |

- Marca automáticamente **raíces, máximos, mínimos, corte con y e intersecciones**, con sus coordenadas.
- Pasa el mouse sobre una curva para leer el punto exacto.
- Con el panel abierto: arrastra dentro de la gráfica para moverla y usa la rueda para hacer zoom. También puedes elegir cuánto vale cada cuadro en x y en y.
- Doble clic sobre una gráfica (con Seleccionar) para volver a editarla.
- Con Seleccionar, arrastra cualquiera de sus cuatro esquinas para cambiarle el tamaño; los ejes no se mueven (Mayús la hace cuadrada).

## Corrección de trazo (botón de varita)

- **Mantener para corregir figura**: dibuja a mano una línea, círculo, rectángulo, triángulo o un ángulo y deja el lápiz quieto medio segundo al final. Se convierte en una figura limpia. Si es una línea, puedes seguir moviendo para ajustarla (se alinea a 0°, 45° y 90°).
- **Letra bonita**: No / Suave / Medio / Fuerte. Estabiliza la mano mientras escribes y pule el trazo al soltar.
- El bolígrafo y la pluma usan tinta con grosor variable según la velocidad (o la presión del lápiz digital) y puntas afinadas; la pluma imita una plumilla caligráfica.

## Imágenes

- **Ctrl+V** pega una imagen copiada (captura de pantalla, foto, ejercicio de un PDF…). También puedes arrastrar imágenes a la ventana o usar Menú → Insertar imagen.
- Las imágenes quedan **debajo de la tinta**: puedes escribir y borrar encima sin dañarlas.
- Con Seleccionar (V): arrastra para mover, usa cualquiera de las cuatro esquinas para cambiar el tamaño y Supr para eliminarla.

## Archivo

- Ctrl+S guarda la clase como `.pizarra`; Ctrl+O la abre. También puedes arrastrar un `.pizarra` a la ventana.
- Exporta la página actual a PNG o todas las páginas a PDF (Ctrl+P).
- Todo se autoguarda en el navegador: si cierras la pestaña, al volver sigue donde lo dejaste.

Otros atajos: Ctrl+Z / Ctrl+Y, Supr, Ctrl+C / V / D, Ctrl+A, AvPág / RePág, Ctrl+rueda para zoom, Tab para ocultar las barras, F1 para ver todos.

## Imágenes

- **Ctrl+V** pega una imagen copiada (captura de pantalla, foto, ejercicio de un PDF…). También puedes arrastrar imágenes a la ventana o usar Menú → Insertar imagen.
- Las imágenes quedan **debajo de la tinta**: puedes escribir y borrar encima sin dañarlas.
- Con Seleccionar (V): arrastra para mover, usa cualquiera de las cuatro esquinas para cambiar el tamaño y Supr para eliminarla.

## Publicar una versión nueva

1. En `script.js` agrega un bloque nuevo **arriba** de `CHANGELOGS` con la versión y sus cambios (emoji + texto). No borres los anteriores: quien se salte versiones verá todas las novedades que se perdió, y en Menú → Novedades está el historial completo.
2. En `index.html` y `sw.js` cambia el número de versión (`?v=…` y `VERSION`).
3. Haz commit y push. Quien ya usaba Mi Pizarra verá una sola vez, abajo a la derecha, las novedades de las versiones que no había visto (las personas nuevas no lo ven).

## Créditos

Hecho por **José Luciano Mejía Arias** · [Instagram](https://instagram.com/lucianomejia17) · [GitHub](https://github.com/LucianoMejia) · [LinkedIn](https://www.linkedin.com/in/jos%C3%A9-luciano-mej%C3%ADa-arias-a35806383/). También aparece en Menú → Acerca de Mi Pizarra.

## Archivos

- `index.html` — estructura
- `styles.css` — tokens de color, sombras y movimiento (los mismos de mi-qr)
- `script.js` — lienzo, herramientas, reconocimiento de figuras, exportación
- `manifest.webmanifest`, `sw.js` — app instalable y modo sin conexión
- `logo.svg`, `icon-*.png`, `favicon.ico` — íconos · `og-image.jpg` — vista previa al compartir el link
- `vendor/mathjax` (fórmulas) y `vendor/pdfjs` (PDFs) — librerías incluidas para que funcione sin internet; se cargan solo cuando se usan
