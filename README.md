# Kunal Shokeen — Portfolio

React + Vite single-page portfolio, deployed on Vercel at https://kunal-portfolio-ten.vercel.app.

## Editing content

All text, links and lists live in **`src/data/portfolio.js`**. Edit that file only;
components read from it. The page `<title>`, meta description, Open Graph/Twitter tags
and JSON-LD are generated from the same file at build time (see `vite.config.js`).

Search the data file for `[CONFIRM` to find details that still need checking.

## Styling

- `src/styles/tokens.css` — colours (light + dark), fonts, spacing.
- `src/styles/global.css` — layout and section styles.

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint
```

`public/og.png` is the social share image (1200×630); regenerate it if the headline changes.
