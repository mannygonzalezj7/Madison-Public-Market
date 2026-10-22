# Madison Public Market

Next.js (App Router) homepage for [Madison Public Market](https://madisonpublicmarket.org/), hosted on Cloudflare via OpenNext.

## Stack

- **Next.js 16** + TypeScript + Tailwind CSS v4
- **Cloudflare Workers** (`@opennextjs/cloudflare`)
- **Supabase** client scaffold (homepage content is still static — see [CONTENT.md](CONTENT.md))

## Design tokens

Global color and text styles live in [`src/styles/tokens.css`](src/styles/tokens.css).

- **Source of truth:** live WordPress/Elementor globals (responsive type scale + brand colors)
- **Figma:** aligned where values match; WP wins on conflicts (e.g. body font is **Roboto**, not Avenir)
- Breakpoints: mobile ≤767px, tablet ≤1024px, desktop ≥1025px

## Scripts

```bash
npm run dev       # local Next.js
npm run build     # Next.js production build
npm run preview   # OpenNext build + local Cloudflare preview
npm run deploy    # OpenNext build + deploy to Cloudflare Workers
npm run cf-typegen
```

## Environment

Copy [`.env.example`](.env.example) to `.env.local` and add Supabase URL + anon key when you are ready to wire the CMS. Homepage v1 does not require them to render.
