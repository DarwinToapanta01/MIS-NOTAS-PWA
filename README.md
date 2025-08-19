# Mis Notas PWA

Aplicación de Notas desarrollada como PWA (Progressive Web App) utilizando Material Design Lite (MDL).

## Descripción
Esta aplicación permite crear, visualizar y eliminar notas de manera sencilla, con una interfaz moderna basada en Material Design. Es instalable como PWA y funciona offline gracias a un Service Worker.

## Estructura de Archivos
- `index.html`: Estructura principal de la app, incluye los componentes MDL y el formulario para añadir notas.
- `app.js`: Lógica para crear, mostrar y eliminar notas, así como mostrar notificaciones y registrar el Service Worker.
- `style.css`: Estilos personalizados para centrar y mejorar la visualización de la app.
- `manifest.webmanifest.json`: Manifiesto para hacer la app instalable en dispositivos.
- `service-worker.js`: Permite el funcionamiento offline cacheando los archivos esenciales.

## Explicación del Código

### index.html
- Importa los estilos y scripts de MDL desde la CDN.
- Usa el componente `mdl-layout` para la estructura principal.
- El formulario incluye un campo para el título y un textarea para el contenido de la nota.
- Un botón flotante (FAB) permite guardar nuevas notas.
- Las notas se muestran en tarjetas (Cards) MDL.
- Incluye un snackbar para notificaciones.

### app.js
- **addNoteCard(title, text):** Crea dinámicamente una tarjeta de nota con título y contenido. Añade un botón de eliminar con ícono.
- **Evento Guardar:** Al hacer clic en el botón flotante, se toma el título y el texto, se valida y se agrega la nota. Se limpian los campos y se muestra un mensaje.
- **Eliminar Nota:** Cada tarjeta tiene un botón para eliminarla. Al eliminar, se muestra un mensaje en el snackbar.
- **showSnackbar(message):** Muestra notificaciones breves usando el componente MDL Snackbar.
- **Service Worker:** Se registra automáticamente para habilitar el modo offline.

### style.css
- Centra el contenido y da formato a las tarjetas y contenedores.
- Permite que el texto de la nota respete saltos de línea.

### manifest.webmanifest.json
- Define el nombre, colores, ícono y comportamiento de la app como PWA.

### service-worker.js
- Cachea los archivos esenciales en la instalación.
- Implementa la estrategia "Cache First" para servir archivos offline.
- Elimina cachés antiguos en la activación.

## ¿Cómo usar?
1. Abre el archivo `index.html` en un navegador moderno.
2. Puedes instalar la app desde el navegador (opción "Instalar app").
3. Funciona offline después de la primera carga.

## Créditos
- Desarrollado por Darwin Toapanta.
- Basado en Material Design Lite (https://getmdl.io/).

---