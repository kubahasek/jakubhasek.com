## Development

Run the local dev server:

```bash
npm run dev
```

## Build

Create a production build:

```bash
npm run build
```

## Cloudflare Workers

This app is configured for Cloudflare Workers via `@cloudflare/vite-plugin` and `wrangler`.

1. Log in to Cloudflare:

```bash
npx wrangler login
```

2. Review `wrangler.jsonc` and update the Worker name if needed.

3. Deploy:

```bash
npm run deploy
```

The blog content is bundled at build time, so the app no longer depends on Node filesystem access in production.
