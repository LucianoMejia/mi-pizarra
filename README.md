# Mi Pizarra

Pizarra digital para dar clases, tutorías, explicar ideas, hacer lluvias de ideas o tomar notas a mano. Incluye herramientas especiales para matemáticas (planos cartesianos, gráficas tipo GeoGebra y símbolos), pero sirve para cualquier materia o tema. Es una página estática: abre `index.html` en Chrome o Edge (doble clic) o publícala en cualquier hosting estático.

## Herramientas

| Tecla | Herramienta |
|---|---|
| V | Seleccionar y mover |
| 1…9 | Lápices de la bandeja (P = último bolígrafo, M = último resaltador) |
| E | Borrador (modo Goma o Trazo completo) |
| L / A / R / O / Y | Línea, flecha, rectángulo, elipse, triángulo (Mayús = recto/cuadrado) |
| G | Plano cartesiano |
| F | Graficar, tipo GeoGebra |
| T | Texto con barra de símbolos (π, √, ², ≤, ∞, θ, Σ, ∫, ℝ…) |
| K | Puntero láser |
| H / Espacio | Mover el lienzo |

## Bandeja de lápices

Vienen 7 lápices listos: bolígrafo negro, azul y rojo, pluma caligráfica, marcador y dos resaltadores.
- Toca un lápiz para usarlo; **tócalo otra vez** para cambiar su tipo (Bolígrafo, Pluma, Marcador, Lápiz, Resaltador), color y grosor.
- **+** agrega un lápiz nuevo (hasta 12). Desde su menú puedes duplicarlo o eliminarlo.
- La bandeja se recuerda entre sesiones.

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

## Corrección de trazo (botón de varita)

- **Mantener para corregir figura**: dibuja a mano una línea, círculo, rectángulo, triángulo o un ángulo y deja el lápiz quieto medio segundo al final. Se convierte en una figura limpia. Si es una línea, puedes seguir moviendo para ajustarla (se alinea a 0°, 45° y 90°).
- **Letra bonita**: No / Suave / Medio / Fuerte. Estabiliza la mano mientras escribes y pule el trazo al soltar.
- El bolígrafo y la pluma usan tinta con grosor variable según la velocidad (o la presión del lápiz digital) y puntas afinadas; la pluma imita una plumilla caligráfica.

## Imágenes

- **Ctrl+V** pega una imagen copiada (captura de pantalla, foto, ejercicio de un PDF…). También puedes arrastrar imágenes a la ventana o usar Menú → Insertar imagen.
- Las imágenes quedan **debajo de la tinta**: puedes escribir y borrar encima sin dañarlas.
- Con Seleccionar (V): arrastra para mover, usa el punto azul de la esquina para cambiar el tamaño y Supr para eliminarla.

## Archivo

- Ctrl+S guarda la clase como `.pizarra`; Ctrl+O la abre. También puedes arrastrar un `.pizarra` a la ventana.
- Exporta la página actual a PNG o todas las páginas a PDF (Ctrl+P).
- Todo se autoguarda en el navegador: si cierras la pestaña, al volver sigue donde lo dejaste.

Otros atajos: Ctrl+Z / Ctrl+Y, Supr, Ctrl+C / V / D, Ctrl+A, AvPág / RePág, Ctrl+rueda para zoom, Tab para ocultar las barras, F1 para ver todos.

## Imágenes

- **Ctrl+V** pega una imagen copiada (captura de pantalla, foto, ejercicio de un PDF…). También puedes arrastrar imágenes a la ventana o usar Menú → Insertar imagen.
- Las imágenes quedan **debajo de la tinta**: puedes escribir y borrar encima sin dañarlas.
- Con Seleccionar (V): arrastra para mover, usa el punto azul de la esquina para cambiar el tamaño y Supr para eliminarla.

## Créditos

Hecho por **José Luciano Mejía Arias** · [Instagram](https://instagram.com/lucianomejia17) · [GitHub](https://github.com/LucianoMejia) · [LinkedIn](https://www.linkedin.com/in/jos%C3%A9-luciano-mej%C3%ADa-arias-a35806383/). También aparece en Menú → Acerca de Mi Pizarra.

## Archivos

- `index.html` — estructura
- `styles.css` — tokens de color, sombras y movimiento (los mismos de mi-qr)
- `script.js` — lienzo, herramientas, reconocimiento de figuras, exportación
