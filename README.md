# Wedding website

SvelteKit 2 + Svelte 5 (Runes), deployed on Vercel — same stack and layout as `daily_news`.

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Deploy to Vercel

From this directory:

```sh
npx vercel
```

Or connect the repo in the [Vercel dashboard](https://vercel.com/new): import the project, set the root directory to `wedding_website`, and use the default SvelteKit build settings (`npm run build`, output handled by the adapter).
