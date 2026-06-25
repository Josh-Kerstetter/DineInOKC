# DineIn OKC

A skeuomorphic restaurant-discovery site for Oklahoma City, styled after early iOS app design — glossy black header, mahogany wood tab bar, and paper-textured cards with physical-photograph styling.

## What's included

- `index.html` — site structure, 4 pages (Featured, Menus, Friends, Settings)
- `styles.css` — all skeuomorphic styling (wood grain tab bar, engraved text, paper cards, polaroid photos)
- `script.js` — tab navigation logic
- `assets/mahogany-wood.png` — the wood texture used for the bottom tab bar

The 3 restaurants on the Featured page (The Mule Yard, Casa Lumbre, Prairie & Pine) are placeholder content to preview the design — swap in real OKC spots whenever you're ready.

## How to host on GitHub Pages

1. Create a new repository on GitHub.
2. Upload all files from this ZIP, **keeping the folder structure** (the `assets` folder must stay alongside `index.html`).
3. Go to the repo's **Settings → Pages**.
4. Under "Build and deployment," set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`.
5. Save. GitHub will give you a URL like `https://yourusername.github.io/repo-name/` within a minute or two.

## Notes

- The site pulls 4 Google Fonts (Playfair Display, Tangerine, Cormorant Garamond, Montserrat) from Google's CDN — this requires the visitor to have a normal internet connection, which GitHub Pages visitors will have.
- Built mobile-first; locks header/tab bar in place with the content scrolling between them. Also tested at desktop widths.
- Everything is plain HTML/CSS/JS — no build step, no dependencies to install.
