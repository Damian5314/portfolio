# Portfolio App

This is a simple portfolio built with React, Vite and Tailwind CSS. The router is configured using `BrowserRouter` with `basename="/portfolio"` so the app can be hosted in a subdirectory such as GitHub Pages.

## Installation

```bash
npm install
```

## Available Scripts

- `npm run dev` - start the development server
- `npm run build` - create a production build in `dist`
- `npm run preview` - preview the production build
- `npm run deploy` - deploy the `dist` folder to GitHub Pages

## Deployment

After building the project, run `npm run deploy` to publish the contents of `dist` to the `gh-pages` branch. The app is served from the `/portfolio` path on your GitHub Pages site.
