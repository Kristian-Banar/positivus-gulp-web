# Starter Template: Gulp + Webpack + ESBuild Loader

This build setup is based on an example from the YouTube channel  
[Freelancer for Life](https://www.youtube.com/c/FreelancerLifeStyle)  
Video: https://www.youtube.com/watch?v=jU88mLuLWlk

---

## Available Commands

Install all dependencies:

```bash
npm install
```

Run development mode (Gulp + live server):

```bash
npm run dev
```

Build the project in production mode:

```bash
npm run build
```

Preview the final production build locally:

```bash
npm run preview
```

---

## What Does Gulp Do?

- Minifies HTML in production mode
- Removes HTML comments in production
- Compiles SCSS to CSS and adds vendor prefixes
- Removes SCSS comments
- Sorts and groups media queries
- Minifies CSS in production and keeps an unminified copy
- Converts fonts to `.ttf`, then to `.woff` / `.woff2`
- Automatically generates a font connection file at:
  `src/scss/config/fonts.scss`

### Example font configuration

```scss
@font-face {
  font-family: Inter;
  font-display: swap;
  src: url('../fonts/Inter-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}
```

---

## Important

If `fonts.scss` already exists in `src/scss/config`, you **must delete it**
before adding new fonts.  
After restarting the build, Gulp will automatically recreate the file with
updated font declarations.

---

## Additional Gulp Features

- Image optimization and conversion to `.webp`
- Automatic `.webp` usage if supported by the browser
- Copies the `/static` folder directly to the final build without processing
- SVG sprite generation:

```bash
npm run svgSprive
```

- Cleans the output folder before each build
- Creates a ZIP archive of the final build:

```bash
npm run zip
```

- Local development server with live reload
- FTP deployment:

```bash
npm run deployFTP
```

FTP settings are located in:

```
gulp/config/ftp.js
```

---

## Font Handling Notes

- Supports font names like:
  `Inter-Regular`, `Inter-RegularItalic`, `Inter-Regular_Italic`
- Automatically sets `font-style: normal` or `italic`
- Font conversion happens in `src/fonts`
- Final `.woff2` files are placed in `dist/fonts`
- If `fonts.scss` already exists, fonts are only copied (no reconversion)

---

## What Does Webpack Do?

- Handles JavaScript bundling
- Supports ES modules (`import` / `export`)
- Allows multiple JS entry points
- No need to specify `.js` extensions
- `index.js` imports can omit the filename

Example:

```js
import * as helpers from './helpers'
```

- Uses `esbuild-loader` for modern ES6+ syntax
- Minifies JS and removes comments in production

---

## Multi-file Build Support (since 11.2023)

- Multiple JS bundles:
  - Create files in `./src/js`
- Multiple CSS files:
  - Create page styles in `./src/scss/pages`

---

