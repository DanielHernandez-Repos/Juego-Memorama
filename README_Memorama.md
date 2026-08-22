# 🧠 Memorama

Juego de memoria (memorama) clásico de 8 pares de cartas, desarrollado con **HTML, CSS y JavaScript puro (Vanilla JS)**, usando programación orientada a objetos (POO).

## ✨ Características

- Tablero de 16 cartas (8 pares) generadas dinámicamente.
- Orden de las cartas aleatorio en cada partida.
- Vista previa: al iniciar el juego, todas las cartas se muestran destapadas unos segundos antes de ocultarse.
- Lógica de volteo y comprobación de pares mediante una clase `Juego`.
- Mensaje de victoria al encontrar todos los pares.
- Fondo personalizado y estilos propios.

## 🎮 Cómo se juega

1. Al cargar la página, todas las cartas se muestran boca arriba durante 3 segundos para que memorices las posiciones.
2. Las cartas se ocultan y comienza el juego.
3. Da clic en dos cartas para voltearlas:
   - Si coinciden, se quedan destapadas y suma un par encontrado.
   - Si no coinciden, se vuelven a ocultar tras un breve instante.
4. El juego termina cuando encuentras los 8 pares y se muestra un mensaje de victoria.

## 🖥️ Demo

Abre `memoramaDaniel.html` en tu navegador o sírvelo con una extensión como *Live Server* de VS Code.

## 📁 Estructura del proyecto

```
JuegoMemorama/
├── Index.html   # Página principal del juego
├── css/
│   └── memo.css          # Estilos del tablero y las cartas
├── Js/
│   └── memorama.js       # Lógica del juego (clase Juego)
└── IMG/
    ├── 1.jpg … 8.jpg     # Imágenes de las cartas
    ├── Imagen todo.png   # Imagen del reverso de la carta
    └── fondo.jpg         # Fondo de la página
```

## 🚀 Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES6+) — Clases, `setTimeout`, manipulación del DOM

No requiere ninguna librería externa ni backend: todo el juego corre 100% en el navegador.

## ⚙️ Instalación y uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/memorama.git
   ```
2. Entra a la carpeta del proyecto:
   ```bash
   cd memorama
   ```
3. Abre `memoramaDaniel.html` en tu navegador (o usa la extensión *Live Server* de VS Code).

## 📌 Pendientes / mejoras futuras

- [ ] Agregar contador de intentos y/o tiempo de partida.
- [ ] Botón para reiniciar el juego manualmente sin recargar la página.
- [ ] Hacer el tablero responsive para dispositivos móviles.
- [ ] Añadir niveles de dificultad (más o menos pares).
- [ ] Eliminar el archivo `IMG/1.htm` que no forma parte del juego.

## 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT. Eres libre de usarlo y modificarlo.

## 🙋 Autor

Proyecto desarrollado por Daniel Jesús Hernández Hernández.
