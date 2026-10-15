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

## Languages

Czech (`cs`) and English (`en`) are rendered on the server. Selection order:

1. Explicit CS / EN choice, stored in `portfolio-language` cookie for one year.
2. Cloudflare `request.cf.country`: `CZ` → Czech, other countries → English.
3. When country is unavailable (including local development), supported browser languages from `Accept-Language`, ordered by quality; English is the final fallback.

Localized responses use `Cache-Control: private, no-store`. No browser location permission or external geolocation API is needed. Existing unpublished blog drafts remain in English.

Run language selection regression tests with Node 22.18+:

```bash
node --test tests/locale.test.mjs
```
