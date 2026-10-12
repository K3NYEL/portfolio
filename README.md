# Kenyel Alexander Restituyo Montero — Portfolio

Portfolio personal centrado en desarrollo de software, aplicaciones web y tecnología creativa.

## Tecnologías

- React
- Vite
- Tailwind CSS
- JavaScript
- GitHub Pages

## Requisitos

- Node.js 22 o una versión compatible con Vite 8
- npm

## Desarrollo local

```bash
git clone https://github.com/K3NYEL/portfolio.git
cd portfolio
npm ci
npm run dev
```

## Comprobaciones

Ejecuta el análisis estático y la compilación de producción antes de publicar:

```bash
npm run lint
npm run build
```

La salida de producción se genera en `dist/`.

## Publicación

El sitio está configurado para GitHub Pages en:

https://k3nyel.github.io/portfolio/

El workflow de integración continua comprueba el lint y la compilación en los cambios dirigidos a `main` y en los pull requests. La publicación del sitio sigue dependiendo de la configuración de Pages del repositorio.

## Formulario de contacto

El formulario utiliza Formspree. Su identificador de formulario se encuentra en el código del cliente y no debe considerarse un secreto; la protección contra abuso debe configurarse también en Formspree.
