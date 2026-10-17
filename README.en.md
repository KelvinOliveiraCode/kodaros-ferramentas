# KODAROS Tools

![PWA offline-first](https://img.shields.io/badge/PWA-offline_first-black?style=flat-square)
![JavaScript vanilla](https://img.shields.io/badge/JavaScript-vanilla-black?style=flat-square)
![Service Worker](https://img.shields.io/badge/Service%20Worker-cache%20offline-black?style=flat-square)

Set of 53 calculators and generators for management, acquisition, launch, financial, sales, support, and content. Everything runs in the user's browser, no registration, no cost, and no data sent to any server.

## Problem / Why it exists

Small businesses need numbers (CAC, LTV, break-even point, cash flow, NPS) but useful tools usually require registration, subscription, or sending data to external servers. The formulas are also scattered across KODAROS e-books without a quick way to apply them. This project brings together the calculators cited in the e-books into a single site, 100% client-side, no AI.

## What it does

- 53 tools in 7 categories: Acquisition & Traffic (13), Launch (6), Financial (8), Sales (7), Support & Transformation (6), Operations & Management (7), Content & Marketing (6).
- Every calculation runs entirely in the browser; nothing leaves the user's device.
- Exports results as PNG with 1 click (canvas) and CSV (cash flow).
- Favorites and recents saved in browser localStorage.
- Keyword search (shortcut /) and keys 1 to 7 to open categories.
- Service worker caches the site core for offline use (PWA, standalone display).
- Each tool cites its source reference e-book.
- Single source of truth: KODAROS_TOOLS array in script.js (id, name, category, e-book).

## Stack

- HTML5, CSS3, and vanilla JavaScript (no build step, no frameworks, no production dependencies)
- Service Worker (sw.js, kodaros-tools-v5 cache, cache-first strategy with network fallback for same origin)
- Web App Manifest (manifest.json, standalone display, 192x192, 512x512 and maskable icons)
- localStorage (favorites, recents, input persistence, anonymous kodaros_events events)
- Canvas API (PNG export of results and editable templates: business card, Instagram post, coupon)
- Fonts: Cinzel, Cormorant Garamond, and Figtree (Google Fonts)
- Hosting: GitHub Pages (https://kelvinoliveiracode.github.io/kodarosferramentas/)
- Tests: jsdom (tests/smoke.js)

## How it works

index.html loads style.css and script.js. All tools are declared in KODAROS_TOOLS. When opening a tab, panels are shown or hidden by the active class. Each calculator reads the inputs, validates (non-negative values), calculates with its dedicated function, and displays the result. The service worker intercepts same-origin GET requests, responds from the kodaros-tools-v5 cache when available, fetches from the network otherwise, and serves ./ as fallback on failure. PWA installation happens via the manifest in browsers that support it.

## How to run

There is no build step nor production dependencies.

1. Download or clone the Kodaros Ferramentas folder.
2. Open index.html in the browser.
3. To use as a PWA: visit https://kelvinoliveiracode.github.io/kodarosferramentas/ and install (Add to home screen).

To run the tests:

```
cd tests
npm install
npm test
```

The smoke test validates with jsdom that KODAROS_TOOLS has 53 tools, unique IDs, calculations (CAC, pricing, cash flow), empty search, favorites, and absence of runtime errors.

## Project structure

```
Kodaros Ferramentas/
├── index.html          PWA shell: 7 tabs and 53 tools
├── script.js           calculator logic, formulas, search, favorites, export, SW registration
├── style.css           Dossiê visual identity (stone and gold), responsive
├── manifest.json       PWA manifest (standalone, icons)
├── sw.js               offline-first service worker (kodaros-tools-v5 cache)
├── kodaros_icon.png    app icon / apple-touch-icon
├── icon-192.png        PWA icon 192x192
├── icon-512.png        PWA icon 512x512
├── icon-512-maskable.png PWA maskable icon 512x512
├── banner.png          footer banner
├── bust.png            navbar icon
├── kodaros_logo.png    brand mark
├── kodaros_og.png      sharing image (OG)
├── bg-salao.jpg        background image
├── robots.txt          crawling instructions
├── sitemap.xml         site sitemap
└── tests/              jsdom smoke tests (package.json, smoke.js, node_modules)
```

## Trade-offs and decisions

- 100% client-side by privacy decision: nothing leaves the device. Trade-off: no cross-device sync or backend.
- No build step: works by opening the HTML directly in the browser. Trade-off: CSS and JS not minified.
- localStorage for favorites and recents: persists only in the device's browser; clearing browser data deletes the favorites.
- Service worker with fixed static cache (kodaros-tools-v5): Google Fonts are not intercepted (same origin only).
- Result export is a PNG generated locally via canvas, with TXT as fallback.

## Known limitations

- Does not work without JavaScript enabled.
- No login, so favorites and history do not leave the browser/device.
- On the first visit fonts (Google Fonts) require a connection; after that the service worker keeps the core offline.
- Calculations are simulations with pre-filled example values; they do not replace professional accounting or financial advice.
- Business card, post, and coupon templates export PNG locally via canvas; optional image upload works only on the device.

## License

All rights reserved. KODAROS, 2026.

## Author

KODAROS — kodaros01@gmail.com — https://kelvinoliveiracode.github.io/KodarosLanding/
