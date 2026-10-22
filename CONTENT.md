# Content migration notes

Homepage and About page copy currently live in [`src/content/home.ts`](src/content/home.ts) and [`src/content/about.ts`](src/content/about.ts) as **temporary static content** sourced from the live WordPress site ([madisonpublicmarket.org](https://madisonpublicmarket.org/)).

Homepage images are stored under [`public/images/home/`](public/images/home/) (imported from the full-size asset pack).

## Runtime loader (Cloudflare-ready)

[`src/lib/content/get-home.ts`](src/lib/content/get-home.ts) returns static content today and optionally merges Supabase rows when `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set on the Worker.

Shared TypeScript shapes live in [`src/lib/content/types.ts`](src/lib/content/types.ts).

## Suggested Supabase tables

| Table | Purpose | Key fields |
| --- | --- | --- |
| `market_hours` | Dynamic Visit hours | `label`, `closed_note`, `rows` (jsonb), `is_current`, `starts_on` |
| `site_settings` | Address, parking, pets note, map embed | `address`, `getting_there` (jsonb), `pets_note`, `map_embed_url` |
| `home_hero` | Hero media + tagline | `title`, `tagline`, `image_path`, `alt` |
| `home_about` | About teaser | `title`, `body`, `cta_label`, `cta_href`, `image_path` |
| `home_merchants` | Merchants teaser + gallery | `title`, `body`, `gallery` (jsonb) |
| `home_updates` | Instagram / promo tiles | `href`, `image_path`, `account`, `label`, `sort_order` |
| `merchants` | Directory (existing page) | `slug`, `name`, `category`, `bio`, `hours`, `media` |
| `events` | Events calendar / featured | `slug`, `name`, `starts_at`, `ends_at`, `description`, `image_path`, `category` |
| `artworks` | Market artwork + gallery | `slug`, `title`, `artist`, `body`, `image_path`, `collection` |
| `jobs` | Jobs board | `title`, `employer`, `body`, `details` (jsonb), `cta_label`, `cta_href`, `is_open` |
| `nav_links` / `footer_links` | IA | `label`, `href`, `parent`, `sort_order` |

## Deploy env (Cloudflare Workers)

```bash
npx wrangler secret put NEXT_PUBLIC_SUPABASE_URL
npx wrangler secret put NEXT_PUBLIC_SUPABASE_ANON_KEY
```

## Token note

Global color and text styles stay in CSS ([`src/styles/tokens.css`](src/styles/tokens.css)); only **content** moves to Supabase.
