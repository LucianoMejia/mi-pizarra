# mi-pizarra

Pizarra digital para tutorías de matemáticas. Es una página estática: abre `index.html` en Chrome o Edge (doble clic) o publícala en cualquier hosting estático.

## Herramientas

| Tecla | Herramienta |
|---|---|
| V | Seleccionar y mover |
| P | Lápiz (con presión si usas lápiz digital) |
| M | Resaltador |
| E | Borrador (modo Goma o Trazo completo) |
| L / A / R / O / Y | Línea, flecha, rectángulo, elipse, triángulo (Mayús = recto/cuadrado) |
| G | Plano cartesiano |
| F | Graficar funciones (`x^2-3`, `2sin(x)`, `sqrt(x)`, `1/x`, `\|x-1\|`, `ln(x)`…) |
| T | Texto con barra de símbolos (π, √, ², ≤, ∞, θ, Σ, ∫, ℝ…) |
| K | Puntero láser |
| H / Espacio | Mover el lienzo |

## Corrección de trazo (botón de varita)

- **Mantener para corregir figura**: dibuja a mano una línea, círculo, rectángulo, triángulo o un ángulo y deja el lápiz quieto medio segundo al final. Se convierte en una figura limpia. Si es una línea, puedes seguir moviendo para ajustarla (se alinea a 0°, 45° y 90°).
- **Suavizar letra**: No / Suave / Medio / Fuerte. Estabiliza el trazo mientras escribes y lo pule al soltar.

## Archivo

- Ctrl+S guarda la clase como `.pizarra`; Ctrl+O la abre. También puedes arrastrar un `.pizarra` a la ventana.
- Exporta la página actual a PNG o todas las páginas a PDF (Ctrl+P).
- Todo se autoguarda en el navegador: si cierras la pestaña, al volver sigue donde lo dejaste.

Otros atajos: Ctrl+Z / Ctrl+Y, Supr, Ctrl+C / V / D, Ctrl+A, AvPág / RePág, Ctrl+rueda para zoom, Tab para ocultar las barras, F1 para ver todos.

## Archivos

- `index.html` — estructura
- `styles.css` — tokens de color, sombras y movimiento (los mismos de mi-qr)
- `script.js` — lienzo, herramientas, reconocimiento de figuras, exportación
