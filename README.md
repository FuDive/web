# FuDive Web

Under-construction landing page for [fudive.com](https://fudive.com), the FuDive wealth management platform.

## Brand

- Slogan: **Your Wealth. Your Command.**
- Tagline: FuDive brings your assets across platforms under one command, helping you diversify strategically and plan reinvestments around your financial goals.

## Tech stack

- Plain HTML, CSS, and vanilla JavaScript. No build step, no dependencies.
- Design system: Swiss International Typographic Grid, sharp category, adapted to brand colors (navy `#2C3E50` and gold `#FFD700`).
- Light and dark mode with a manual toggle, persisted in `localStorage` and initialized from the system preference.
- Accessible: semantic markup, keyboard focus states, ARIA labels, and reduced-motion support.
- SEO: meta description, Open Graph, Twitter cards, canonical URL, and JSON-LD Organization schema.

## File structure

| File | Purpose |
| --- | --- |
| `index.html` | Landing page markup, meta tags, theme init script |
| `styles.css` | Swiss-grid theme tokens, layout, and responsive rules |
| `script.js` | Progress indicator, theme toggle, footer year |
| `fudive-light.svg` | Logo for light mode |
| `fudive-dark.svg` | Logo for dark mode |
| `favicon.svg` | Site favicon |
| `og-cover.svg` | Social share image |
| `CNAME` | Custom domain record for GitHub Pages (`fudive.com`) |

## Deployment

- Hosting: GitHub Pages on the `gh-pages` branch of `github.com/FuDive/web`.
- Domain and DNS: Cloudflare zone `fudive.com` points `fudive.com` and `www.fudive.com` to `fudive.github.io` with proxying and SSL in Full mode.
- Deploy: push the latest state of `main` to `gh-pages`:

```sh
git push origin main:gh-pages
```

## Local development

```sh
python3 -m http.server 8123
# open http://127.0.0.1:8123/
```

## Notes

- Never commit `info.txt`. It holds private credentials and is ignored via `.gitignore`.
