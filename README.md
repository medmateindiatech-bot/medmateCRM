# Namma MedMate website (www.nammamedmate.com)

Marketing site for **Namma MedMate**, pharmacy management software for chemists in Bengaluru.
Rebuilt as editable source from the live site; every page renders identically to the original
(same HTML, same design system, same fonts, colours and layout at desktop and phone sizes).

## Stack

React 18.3.1 · react-router 7.18.5 · Vite 8 · Tailwind CSS 4.3.4 · shadcn/ui (Radix) · lucide-react 1.68.0.
Pages are pre-rendered to plain HTML at build time and then hydrated, so they load fast and are crawlable.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/ (pre-renders every page)
python3 scripts/serve-dist.py   # serve dist/ like production at http://127.0.0.1:4173
```

Node 20+ (on this Mac: `export PATH="$HOME/.local/node/bin:$PATH"`).

## Where things are

| Path | What |
|---|---|
| `src/pages/home/` | Home page sections: hero, features, console showcase, pricing, FAQ, stories, CTA |
| `src/pages/pharmacy-owner/` | "For pharmacies" page and its join form |
| `src/pages/stories/`, `about/`, `contact/`, `legal/` | The other pages (privacy, terms, refund share `LegalPage`) |
| `src/content/` | All copy and data: prices, FAQs, coverage areas, team, stories, legal text |
| `src/components/` | Header, footer, layout, "Book a demo" dialog and form, icons |
| `src/components/ui/` | shadcn/ui primitives (button, input, label, select, dialog, textarea) |
| `src/styles/landing.css` | The site's design system (`nl-*` classes): colours, spacing, type, breakpoints |
| `src/index.css` | Tailwind setup and brand colour tokens (forest green `#1b3d29`, gold `#d9a648`) |
| `src/lib/api.js` | Lead forms post to `https://api.nammamedmate.com/api/v1/leads` |
| `scripts/prerender.mjs` | Writes `dist/<page>.html` for each route, plus `dist/404.html` |
| `public/` | Images, favicons, `robots.txt`, `sitemap.xml` |

Fonts (Inter, Outfit, IBM Plex Mono) load from Google Fonts in `index.html`.

## Deploy

Pushing to `main` deploys automatically: the Hostinger VPS checks this repo every minute, runs
`npm ci && npm run build`, and serves `dist/` (`/about` → `about.html`, unknown paths → `404.html`).
