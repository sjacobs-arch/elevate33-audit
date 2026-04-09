# ELEVATE33 — Amazon Sponsored Products Audit Tool

A free, browser-based Amazon Ads audit tool. All report data is processed **locally in the browser** — nothing is uploaded to any server.

## Setup

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Output goes to `dist/` — point DigitalOcean App Platform at this folder.

## Configuration

Two API keys live at the top of `src/App.jsx`:

```js
const APOLLO_API_KEY = "your_apollo_key_here";   // line ~557
```

The Anthropic API key is handled automatically via the Claude.ai artifact proxy in development. For standalone deployment you will need to proxy the `/v1/messages` call through a server-side function to keep the key out of the client bundle.

## Reports Required

| Report | Source |
|--------|--------|
| Sponsored Products Search Term Report | Amazon Ads Console |
| Branded Terms (ASINs + text) | Internal — one column, your brand terms |
| Sponsored Products Placement Report | Amazon Ads Console |
| Business Report — Detail Page Sales & Traffic by Child Item | Seller/Vendor Central |
| Sponsored Products Advertised Product Report | Amazon Ads Console |

Supports both **Seller Central** (7-day attribution) and **Vendor Central** (14-day attribution) report formats.

## Deploy to DigitalOcean

1. Push this repo to GitHub
2. DigitalOcean App Platform → New App → GitHub → select repo
3. Build command: `npm run build`
4. Output directory: `dist`
5. Done — auto-deploys on every push to `main`
