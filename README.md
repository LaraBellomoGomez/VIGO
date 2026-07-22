# VIGO Odontología Integral — Sitio web

Sitio web institucional de VIGO Odontología Integral (Villa Devoto, CABA), construido con React + Vite siguiendo el manual de marca de la clínica.

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- [React Router](https://reactrouter.com/) para las rutas (`/`, `/servicios`, `/nosotros`, `/contacto`)
- CSS Modules para estilos con alcance por componente + `src/styles/variables.css` como fuente única de los tokens de marca (color, tipografía, radios)
- Sin backend: los datos de contacto y servicios viven en `src/data/content.js`

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Puesta en marcha

```bash
npm install
npm run dev
```

Abrí `http://localhost:5173` en el navegador.

## Scripts disponibles

| Comando           | Descripción                                      |
| ------------------ | ------------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo con recarga en caliente    |
| `npm run build`     | Build de producción en `dist/`                    |
| `npm run preview`   | Sirve localmente el build de `dist/`               |
| `npm run lint`      | Corre ESLint sobre el proyecto                     |

## Estructura del proyecto

```
vigo-web/
├── public/                  # Archivos estáticos servidos tal cual (favicon)
├── src/
│   ├── assets/
│   │   ├── images/          # Fotos (hero, consultorio, equipo) y logo
│   │   └── icons/            # Set de íconos de tratamientos (línea, verde)
│   ├── components/          # Componentes reutilizables (Header, Footer, tarjetas, botones)
│   ├── data/
│   │   └── content.js       # Datos reales de la clínica: dirección, horarios, servicios, equipo
│   ├── hooks/
│   │   └── useIsMobile.js   # Hook de breakpoint responsive (≤820px)
│   ├── pages/                # Una vista por ruta: Inicio, Servicios, Nosotros, Contacto
│   ├── styles/
│   │   ├── variables.css    # Tokens de marca (colores, tipografía, espaciado)
│   │   └── global.css       # Reset y estilos base
│   ├── App.jsx               # Definición de rutas
│   └── main.jsx               # Punto de entrada
├── index.html
├── package.json
└── vite.config.js
```

## Editar contenido

Todo el contenido editable (dirección, horarios, WhatsApp, email, Instagram, tratamientos, equipo) está centralizado en [`src/data/content.js`](src/data/content.js) — no hace falta tocar los componentes para actualizar textos o datos de contacto.

Para cambiar el número de WhatsApp o el mensaje precargado, editar `clinic.whatsappNumber` y las funciones en `whatsappLinks`.

## Conectar el botón "Reservar turno"

El botón "Reservar turno" del header actualmente enlaza a WhatsApp como placeholder. Cuando la clienta tenga un sistema de reservas online, reemplazar el `href` en [`src/components/Header.jsx`](src/components/Header.jsx) por la URL correspondiente.

## Mapa de Google Maps

El mapa embebido usa la URL pública `https://maps.google.com/maps?q=<dirección>&output=embed`, sin API key. Si se necesita más control (marcadores, estilos), reemplazar `mapsEmbedUrl` en `src/data/content.js` por un iframe de Google Maps Embed API con key propia.

## Despliegue

El proyecto genera un sitio estático (`npm run build` → carpeta `dist/`), listo para desplegar en Netlify, Vercel, GitHub Pages o cualquier hosting estático. Si se despliega en una subcarpeta, ajustar `base` en `vite.config.js`.

## Manual de marca

Los tokens de color y tipografía en `src/styles/variables.css` están tomados directamente del manual de marca de VIGO (verde salvia `#C3D6A0`, verde CTA `#7C9A46`, carbón `#3a3a35`, Poppins para títulos, Inter para texto).
