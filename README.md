# 💖 Valentine's Day - Interactive Quiz

Una aplicación web interactiva y romántica para San Valentín, construida con React. ¡Pregunta si esa persona especial quiere ser tu pareja con estilo!

## ✨ Características

- 🎨 **Diseño Sofisticado**: Interfaz moderna con gradientes animados y efectos visuales
- 🎯 **8 Preguntas Interactivas**: Preguntas progresivas para llegar a la pregunta final
- 🌈 **Fondos Dinámicos**: Cada pregunta tiene un fondo con colores diferentes
- 💫 **Animaciones Suaves**: Transiciones elegantes y efectos de flotación
- 📱 **Responsive**: Funciona perfectamente en desktop, tablet y móvil
- 🎊 **Efecto Confetti**: Celebración visual cuando dice "Sí"
- 💬 **Integración WhatsApp**: Redirige a WhatsApp después de la respuesta
- 🎭 **Botón "NO" Dinámico**: Se mueve cuando intenta clickearlo (solo en preguntas iniciales)

## 🚀 Cómo Usar

### Desde el Navegador
1. Abre http://localhost:3000 en tu navegador
2. Responde las preguntas interactivas
3. ¡Celebra cuando llegues a la pregunta final!

### Instalación Local

```bash
# Clona el repositorio
git clone https://github.com/tuusuario/valentine-day-0.1.git
cd valentine-day-0.1-main

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm start
```

La aplicación se abrirá automáticamente en http://localhost:3000

## 📦 Dependencias

- **React 19.0.0**: Framework para construir la interfaz
- **React DOM 19.0.0**: Para renderizar en el navegador
- **React Scripts 5.0.1**: Herramientas de construcción
- **Canvas Confetti 1.9.4**: Para el efecto de confetti

## 🎨 Tecnologías

- **Frontend**: React.js
- **Estilos**: CSS3 (Gradientes, Animaciones, Backdrop Filter)
- **Efectos Visuales**: Canvas Confetti
- **Integración**: WhatsApp Web API

## 📞 Configuración de WhatsApp

El número de teléfono actualmente en uso:
```javascript
const phoneNumber = "351964262184";
```

**Para cambiar el número**, edita el archivo `src/App.js` en la función `handleYesClick()`.

## 🎯 Estructura del Proyecto

```
valentine-day-0.1-main/
├── public/
│   └── index.html          # HTML principal
├── src/
│   ├── App.js              # Componente principal
│   ├── App.css             # Estilos principales
│   ├── index.js            # Punto de entrada
│   ├── index.css           # Estilos globales
│   └── style.css           # Estilos adicionales
├── package.json            # Dependencias y scripts
├── .gitignore              # Archivos a ignorar en Git
└── README.md               # Este archivo
```

## 🎭 Preguntas Incluidas

1. "És do tipo que gosta de provocar só para ver a reação?"
2. "Vais tentar clicar no 'não', só para ver se consegues?"
3. "Ok… mas estás a divertir-te com isto, não estás?"
4. "Admites que estás a sorrir agora?"
5. "Se eu estivesse aí agora, aceitavas um abraço?"
6. "Diz a verdade… gostas da ideia de 'nós'?"
7. "Sem pensar muito… gostas de mim?"
8. "Então… queres namorar comigo?"

## 🌈 Colores de Fondo

Cada pregunta tiene un gradiente único:
- Rosa → Rojo
- Púrpura → Azul oscuro
- Azul claro → Azul intenso
- Naranja → Rosa
- Amarillo → Naranja
- Verde → Turquesa
- Rosa → Púrpura
- Rosa claro → Azul claro

## 🔧 Scripts Disponibles

```bash
npm start      # Inicia el servidor de desarrollo
npm run build  # Construye para producción
```

## 📝 Licencia

Este proyecto es libre de usar y modificar para propósitos personales.

## 💝 Créditos

Diseñado y desarrollado como una demostración del poder de React para crear experiencias web interactivas y románticas.

---

**¡Que disfrutes pidiendo que sea tu pareja! 💖**
