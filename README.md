# Primer Quiz: Pensamiento Crítico e IA, y conceptos básicos de Python

Aplicación web de evaluación tipo quiz, construida en **JavaScript vanilla** (sin
frameworks ni dependencias externas). El estudiante completa espacios en blanco
seleccionando la opción correcta entre varias alternativas, dentro de fragmentos
de texto y de código.

## Contenido de la evaluación

El quiz tiene **40 preguntas** distribuidas en **3 secciones**, con un valor
total de **50 puntos**:

| # | Sección | Preguntas | Puntos | Fuente |
|---|---------|-----------|--------|--------|
| 1 | Pensamiento Crítico | 15 | 20 | Conferencia *"La importancia del pensamiento crítico en la sociedad actual"* — Prof. Aniceto Masferrer (Aprendemos Juntos) |
| 2 | Inteligencia Artificial | 15 | 20 | Conferencia *"Inteligencia artificial: cómo entenderla sin miedo"* — Prof. José Ignacio Latorre (Aprendemos Juntos 2030) |
| 3 | Python Básico | 10 | 10 | Sintaxis introductoria: variables, f-strings, `print`, operadores aritméticos, `input()` e `int()` |

Cada pregunta puede tener entre 2 y 4 espacios en blanco; la pregunta solo
puntúa si **todos** sus espacios se responden correctamente.

## Estructura del proyecto

```
├── index.html               # Punto de entrada, carga los scripts en orden
├── css/
│   └── styles.css           # Estilos de las pantallas (login, quiz, resultado)
├── js/
│   ├── questions.js         # Banco de preguntas (QUIZ_SECTIONS + QUIZ_QUESTIONS)
│   ├── quiz-app.js          # Lógica de la app: estado, render y eventos
│   ├── sheets-integration.js# Envío del resultado a un Google Form
│   └── scripts.js           # Utilidades auxiliares
└── README.md
```

## Flujo de la aplicación

1. **Login** — el estudiante ingresa cédula/TID, nombre, apellidos, programa y correo.
2. **Quiz** — navega pregunta por pregunta, seleccionando la opción de cada
   espacio en blanco. La barra lateral muestra el avance por sección.
3. **Resultado** — al finalizar, se muestra el puntaje total y el desglose por
   sección, y los datos se envían automáticamente a un Google Form
   (`js/sheets-integration.js`) mediante un `<form>` oculto enviado a un
   `<iframe>`, evitando problemas de CORS.

## Cómo ejecutar el proyecto

No requiere instalación ni build. Basta con servir la carpeta como sitio estático:

```bash
# Opción 1: Python
python3 -m http.server 8000

# Opción 2: Node (npx)
npx serve .
```

Luego abre `http://localhost:8000` en el navegador.

## Cómo agregar o modificar preguntas

Todo el banco de preguntas vive en `js/questions.js`. Cada pregunta sigue esta forma:

```js
{
  id: 41, section: 1, points: 1,
  topic: "Tema breve de la pregunta",
  question: "Enunciado que ve el estudiante",
  code:
`Texto o fragmento de código con espacios [1] y [2]
para completar.`,
  blanks: [
    { id: 1, options: ["op1", "op2", "op3", "op4"], correct: "op1" },
    { id: 2, options: ["op1", "op2", "op3", "op4"], correct: "op2" },
  ],
},
```

Reglas a respetar:
- Cada número `[n]` dentro de `code` debe tener su entrada correspondiente en `blanks`.
- El valor de `correct` debe existir dentro del arreglo `options` de su propio blank.
- `id` de cada pregunta debe ser único en todo el arreglo `QUIZ_QUESTIONS`.
- El puntaje total de todas las preguntas (`QUIZ_QUESTIONS.reduce((t,q)=>t+q.points,0)`) debe coincidir con el valor mostrado en la portada.

## Integración con Google Forms

`js/sheets-integration.js` envía los siguientes campos al formulario configurado
en `FORM_URL`: nombre completo, correo, programa, cédula/TID y el resultado
(`nota/total`). Para apuntar a otro formulario, actualiza `FORM_URL` y los
`entry.XXXXXXX` con los IDs de los campos de tu Google Form.

## Tecnologías

- HTML5 + CSS3 (sin frameworks de UI)
- JavaScript vanilla (ES6+), renderizado manual del DOM vía `innerHTML`
- Sin dependencias de build ni `node_modules`
