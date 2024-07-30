# Mi Página Web

# Estructura del Proyecto

Este proyecto está dividido en dos partes principales: el frontend y el backend. A continuación se describe la estructura del proyecto y el propósito de cada archivo y carpeta.

## Estructura del Frontend (`client/`)

### `public/`
- **`index.html`**: Archivo HTML principal que sirve como punto de entrada para la aplicación React. Este archivo contiene la estructura básica del HTML y el `div` con el ID `root`, donde se montará la aplicación React.

### `src/`
Contiene todos los archivos fuente de React.

- **`components/`**: Carpeta que contiene los componentes de React. Estos componentes son las partes reutilizables de la interfaz de usuario.
  - **`Header.js`**: Componente que representa la cabecera del sitio web.
  - **`Footer.js`**: Componente que representa el pie de página del sitio web.
  - **`MainPage.js`**: Componente principal de la página de inicio.
  - **`Menu.js`**: Componente que muestra el menú del restaurante.
  - **`AboutUs.js`**: Componente que muestra información sobre el restaurante.
  - **`Contact.js`**: Componente con la información de contacto del restaurante.
  - **`VisitVirtualPage.js`**: Componente para la página de visita virtual.
  - **`ShoppingCart.js`**: Componente que muestra el carrito de compras.
  - **`CheckoutPage.js`**: Componente para la página de checkout.
  - **`AdminOrdersPage.js`**: Componente para la gestión de pedidos del administrador.
  - **`LoginPage.js`**: Componente para el inicio de sesión del usuario.
  - **`RegisterPage.js`**: Componente para el registro de nuevos usuarios.
  - **`UserProfile.js`**: Componente para el perfil del usuario.
  - **`AdminUserManagement.js`**: Componente para la gestión de usuarios por parte del administrador.

- **`context/`**
  - **`authContext.js`**: Archivo que define el contexto de autenticación para manejar el estado del usuario a través de la aplicación. Incluye la lógica para el inicio y cierre de sesión.

- **`services/`**
  - **`authService.js`**: Contiene funciones para interactuar con la API de autenticación, incluyendo el inicio de sesión, cierre de sesión y obtención del perfil del usuario.

- **`styles/`**: Contiene los archivos de estilo CSS.
  - **`App.css`**: Estilos generales para la aplicación.
  - **`Header.css`**: Estilos específicos para el componente `Header`.
  - **`MainPage.css`**: Estilos específicos para el componente `MainPage`.
  - **`Menu.css`**: Estilos específicos para el componente `Menu`.
  - **`AboutUs.css`**: Estilos específicos para el componente `AboutUs`.
  - **`Contact.css`**: Estilos específicos para el componente `Contact`.
  - **`VisitVirtualPage.css`**: Estilos específicos para el componente `VisitVirtualPage`.
  - **`ShoppingCart.css`**: Estilos específicos para el componente `ShoppingCart`.
  - **`CheckoutPage.css`**: Estilos específicos para el componente `CheckoutPage`.
  - **`AdminOrdersPage.css`**: Estilos específicos para el componente `AdminOrdersPage`.
  - **`LoginPage.css`**: Estilos específicos para el componente `LoginPage`.
  - **`RegisterPage.css`**: Estilos específicos para el componente `RegisterPage`.
  - **`UserProfile.css`**: Estilos específicos para el componente `UserProfile`.
  - **`AdminUserManagement.css`**: Estilos específicos para el componente `AdminUserManagement`.

- **`App.js`**: Componente principal de la aplicación que define las rutas de la aplicación utilizando `React Router`.

- **`index.js`**: Punto de entrada para la aplicación React. Monta el componente `App` en el `div` con el ID `root` en `index.html`.

- **`.babelrc`**: Configuración de Babel para la transpilación del código JavaScript.

- **`package.json`**: Archivo de configuración del proyecto que define las dependencias y scripts de npm.

- **`postcss.config.js`**: Configuración de PostCSS para el procesamiento de CSS.

- **`tailwind.config.js`**: Configuración de Tailwind CSS.

- **`webpack.config.js`**: Configuración de Webpack para el empaquetado de módulos.

## Estructura del Backend (`server/`)

### `models/`
- **`User.js`**: Modelo de datos para los usuarios, define la estructura del documento de usuario en la base de datos.

### `routes/`
- **`api.js`**: Archivo principal de rutas para la API.
- **`userRoutes.js`**: Rutas para la gestión de usuarios.
- **`authRoutes.js`**: Rutas para la autenticación de usuarios.

### `controllers/`
- **`userController.js`**: Controlador para manejar la lógica relacionada con los usuarios.
- **`authController.js`**: Controlador para manejar la lógica de autenticación.

### `middleware/`
- **`authMiddleware.js`**: Middleware para manejar la autenticación de solicitudes y proteger las rutas.

### `server.js` 
- Archivo principal del servidor que configura y arranca el servidor Express.

### `package.json`
- Archivo de configuración del backend que define las dependencias y scripts de npm.

## Configuración Adicional

- **`config/db.js`**: Configuración de la conexión a la base de datos.

- **`.gitignore`**: Define qué archivos y carpetas deben ser ignorados por Git.

- **`README.md`**: Archivo de documentación del proyecto.
