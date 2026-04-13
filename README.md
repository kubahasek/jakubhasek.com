This is a TanStack Start app configured for Cloudflare Workers with Bun.

## Development

Install dependencies and run the local dev server:

```bash
bun install
bun dev
```

## Build

Create a production build:

```bash
bun run build
```

Preview the production app locally:

```bash
bun run preview
```

## Cloudflare Workers

This app is configured for Cloudflare Workers via `@cloudflare/vite-plugin` and `wrangler`.

The root `wrangler.jsonc` deploys the built Worker from `dist/server/index.js` and uploads static assets from `dist/client`, which also matches how Cloudflare PR previews build this repo from GitHub.

1. Log in to Cloudflare:

```bash
bunx wrangler login
```

2. Review `wrangler.jsonc` and update the Worker name if needed.

3. Deploy:

```bash
bun run deploy
```

The blog content is bundled at build time, so the app no longer depends on Node filesystem access in production.

## Notes

- This repo is Bun-only and pins Bun via `packageManager`.
- The Worker entrypoint is defined in `wrangler.jsonc`.

## Learn More

- [TanStack Start Documentation](https://tanstack.com/start)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
