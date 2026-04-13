This is a TanStack Start app configured for Cloudflare Workers with Bun.

## Getting Started

Install dependencies and run the dev server:

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Build the app:

```bash
bun run build
```

Preview the production app locally:

```bash
bun run preview
```

Deploy to Cloudflare Workers:

```bash
bun run deploy
```

## Notes

- This repo is Bun-only and pins Bun via `packageManager`.
- Cloudflare support is configured with `@cloudflare/vite-plugin` and `wrangler`.
- The Worker entrypoint is defined in `wrangler.jsonc`.

## Learn More

- [TanStack Start Documentation](https://tanstack.com/start)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
