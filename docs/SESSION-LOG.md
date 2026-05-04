# Genesis AI Systems — V2 Website Session Log

---

## Session 1 — 2026-04-12

### Demo page + Vapi + n8n Workflow 13

**pages/demo.html**
- Full rebuild: Vapi web call widget (Elliot voice), Telegram mockup section showing post-call summary format, lead capture flow.
- Replaces previous static placeholder (354 lines → 572 lines).
- Commits: c6edf3b (demo.html wired), 51675ad (session log update)

**Vapi — Demo Riley assistant**
- Created via POST https://api.vapi.ai/assistant
- Assistant ID: b41a6283-e3f8-4b75-8619-53724eb39de7
- Voice: Vapi Elliot (note: Vapi API requires "Elliot" capitalized, not "elliot")
- serverUrl: https://n8n.genesisai.systems/webhook/demo-vapi-handler
- Collects: caller name, phone number, business type
- maxDurationSeconds: 180
- firstMessage establishes this is a demo, not a live business line

**n8n — Workflow 13 (Demo Vapi Handler)**
- Workflow ID: CrrzzZ8TNqvCntU1
- Webhook: https://n8n.genesisai.systems/webhook/demo-vapi-handler
- Fires on end-of-call-report only. call-started and status-update are silent.
- Telegram destination: TELEGRAM_BOT_TOKEN (@gasf1bot) + TELEGRAM_CHAT_ID
- Smoke test: n8n execution 1462, Telegram message_id 220, ok: true. Confirmed received in prod chat.

**Key note — Vapi key sensitivity**
- VAPI_PUBLIC_KEY in demo.html (12ad7b40-584d-4d74-8488-28fbe8298a3f) functioned as both browser SDK key and REST API key on this org. It is more sensitive than a typical public key. Do not treat it as safe to expose.

**Known issues**
- GitHub Pages not yet enabled on genesis-ai-website-v2 repo. Demo page is not publicly reachable until that step is done.
- Real browser click-through on the Vapi web call button has not been tested. Backend pipeline (webhook → n8n → Telegram) is confirmed. Vapi SDK → browser leg is untested.
- .env in v1-launch: lines 9 and 13 contain unquoted values with the word "Greenfield" which causes zsh to error when sourcing with set -e. Quote BUSINESS_MAILING_ADDRESS and PROJECT9_BUSINESS_MAILING_ADDRESS values before next sourcing session.

**Outstanding**
- [ ] Enable GitHub Pages on genesis-ai-website-v2 repo (Settings → Pages → main branch / root → custom domain genesisai.systems)
- [ ] Real browser test of Vapi web call button on demo page once GitHub Pages is live
- [ ] Logo PNGs exported and dropped into assets/logos/ — swap logo comments in all pages
- [ ] Stripe integration (after logos confirmed)
- [ ] Replace placeholder stats on homepage with real metrics once available
- [ ] Swap root index.html to full V2 homepage once logos are in

---

## Session 1 Addendum — 2026-04-12

- Pushed all session 1 work to origin/main (commit: c9c5355)
- Fixed demo page Telegram mockup copy: "contractor" changed to "service business" (commit: 01aaefe)
- Created docs/LOGO-EXPORT-SPECS.md with export instructions for the designer
- V1 access rule updated: read access permitted, write requires explicit per-session approval. Standing approval for appending to docs/SESSION-LOG.md.
- Fixed remaining contractor references in demo mockup summary text (commit: ba4a433)
- Founder photo resized with sips: 400px longest side, 75% JPEG quality. Final size: 43 KB. Committed as c44493e.

### Outstanding going into Session 2
- [ ] Enable GitHub Pages on genesis-ai-website-v2 (Settings → Pages → main / root → custom domain genesisai.systems)
- [ ] Real browser test of Vapi web call button on demo page once live
- [ ] Designer exports logos per docs/LOGO-EXPORT-SPECS.md, drops into assets/logos/
- [ ] Swap logo comments in all 5 pages once PNGs are confirmed in assets/logos/
- [ ] Stripe integration (after logos confirmed)
- [ ] Replace homepage placeholder stats with real metrics
- [ ] Swap root index.html to full V2 homepage (new chat window — do not do in an active session)

---

## Session 1 Addendum 2 — 2026-04-12

- Logos exported and dropped into assets/logos/ by designer/founder
- Files: logo-dark.png, logo-light.png, favicon.png, favicon-32.png, favicon-180.png
- SVG placeholder nav logo swapped to real PNG across all 5 pages
- Favicon updated to favicon-32.png + favicon-180.png Apple touch icon on all 5 pages
- Commit: 869de4e

---

## Session 1 Addendum 3 — 2026-04-12

- Vapi web call fixed: root cause was stale community UMD bundle (@vapi-ai/web@2.2.4). Fix: switched to ESM import via esm.sh pinned to @vapi-ai/web@2.5.2. Script tag changed to type="module". Commit 28f2a8d.
- Demo page browser test confirmed: call connects, Riley answers, Telegram message confirmed in prod chat.
- favicon.ico added to repo root (copy of favicon-32.png) for GitHub Pages default favicon resolution.
- Footer logo swapped from text brand line to logo-dark.png across all 5 pages (index, about, demo, faq, pricing).

---

## Session 2 — 2026-05-04 — Design System Recon (read-only)

Read-only inventory of the live design system. Source: `css/style.css` (251 lines, shared) + per-page `<style>` blocks inside each HTML file (no Tailwind, no preprocessor, no build step).

### 1. COLORS

**CSS variables (single source of truth — `css/style.css:10-23`):**

| Token | Value | Semantic role | Where it appears |
|---|---|---|---|
| `--navy` | `#0A1628` | Primary page background | `body` bg, `.compare-row.head` bg |
| `--navy-mid` | `#0F1E38` | Section / footer / card alt bg | `footer`, `.outcomes`, `.pain-card`, `.proof-strip`, `.steps`, `.value`, `.team`, `.compare`, `.plans`, mobile menu |
| `--navy-light` | `#162847` | Card / elevated surface bg | `.value-item`, `.outcome-card`, `.plan-card`, `.compare-wrap`, `.step-num`, `.belief-num`, `.phone-card`, `.wyg-point`, avatar gradient stop |
| `--blue` | `#4A8FD4` | Primary brand accent / CTA / borders | `.btn` bg, eyebrow text, section labels, founder-role, `.proof-meta span`, gradient start, step-num border, `.plan-badge`, `.compare-row.head .compare-cell` |
| `--blue-light` | `#6BAEE8` | Brighter accent / hover / link | h1 `.accent`, footer-phone, nav-link hover, plan price-sub, faq-arrow, faq-answer link, `.live-dot-sm` border tints, gradient end |
| `--white` | `#FFFFFF` | Primary text | body color, h1, h3, `.btn`, hamburger spans |
| `--offwhite` | `#E8EDF5` | De-emphasized / strong text | nav-links, mobile-menu, plan-features li, `<strong>` overrides |
| `--muted` | `#8FA3BF` | Body copy / labels / muted text | hero-sub, section-header p, micro, footer-copy, all `p` in cards, faq-answer p |
| `--border` | `rgba(74, 143, 212, 0.18)` | Standard card / section divider | almost every `border:` in shared + page styles |
| `--cta` | `#4A8FD4` | Primary button bg (= `--blue`) | `.btn`, `#vapiCallBtn` |
| `--cta-hover` | `#3A7FC4` | Primary button hover bg | `.btn:hover`, `#vapiCallBtn:hover` |

**Hard-coded colors (NOT in tokens — would need to be reconciled):**

| Hex / rgba | Where | Role |
|---|---|---|
| `#4ade80` | `.live-dot-sm`, `.live-dot`, `.live-badge`, `.csc-badge`, `pulse-btn` keyframe | "Live"/success green (Tailwind green-400) |
| `#1a1f2e` | `.call-summary-card`, `.tg-mockup` bg | Code/mockup card bg (off-spec dark) |
| `#212738` | `.tg-bubble` bg | Telegram chat bubble |
| `#2a3244` | `.tg-draft-btn` bg | Telegram action footer |
| `#1a3a5c` | `#vapiCallBtn.calling` bg | Active call state |
| `#d7e1f0` | `.call-summary-card` text | Mock terminal text |
| `#e7edf7` | `.csc-row .csc-value` | Mock value text |
| `#e0e6f0` | `.tg-bubble` text | Chat bubble text |
| `#c8d4e4` | `.tg-summary` text | Chat summary text |
| `#4a5a72` | `.tg-time` | Timestamp grey |
| `#f0a500` | `.tg-badge` | Telegram amber badge |
| `#000` | `.tg-badge` text | Pure black on amber |
| `rgba(58, 134, 255, .08)` | `.btn-outline:hover` | Stray rgb (58,134,255 = `#3A86FF`, NOT brand `--blue`) — looks like a leftover from another palette |
| `rgba(10,22,40,.96)` | `nav` bg | Navy with alpha for blur strip |
| `rgba(74,143,212, .06–.55)` | shadows, gradient washes, hero radial | Brand-blue tints |
| `rgba(107,174,232, .08–.45)` | accent borders, glows | `--blue-light` tints |
| `rgba(74,222,128, .1 / .28)` | live badge bg/border | Green tints |
| `rgba(0,0,0, .2–.5)` | shadows, mockup glow | Drop shadows |
| `rgba(255,255,255, .025–.08)` | `.we-use-inner` bg, mockup borders | Subtle white wash |

**Notes:** the `rgba(58,134,255,.08)` btn-outline-hover appears in 4 page-specific style blocks (index, about, demo, faq) — it's a duplicated, off-palette value. The `.btn.btn-outline` block in pricing.html uses correct `rgba(74,143,212,.1)`.

### 2. FONTS

- **Primary stack** (`--font` in `css/style.css:22`): `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif` — system stack, no web fonts loaded.
- **Mono stack** (call-summary-card, index.html and pages/index.html): `"SF Mono", Menlo, Consolas, monospace`.
- **Telegram mockup** (demo.html `.tg-mockup`): re-declares system stack inline (same as base, omits Helvetica/Arial).
- **No `<link>` to Google Fonts, no `@font-face`, no `@import`.** Confirmed by grep across all HTML + CSS.

**Weights in use:** 500 (nav-links), 600 (links/labels), 700 (most headings, buttons, badges), 800 (h1, h2, hero numbers, eyebrows). No 100–400 in use.

**Type scale (rem unless noted):**

| Use | Size |
|---|---|
| Hero h1 | `clamp(2.1rem, 5.5vw, 4rem)` (~33–64px) |
| Section h2 | `clamp(1.7rem, 3.5vw, 2.6rem)` (~27–42px) |
| Footer-CTA h2 | `clamp(1.9rem, 4vw, 3rem)` |
| Homepage footer-CTA h2 override | `clamp(2rem, 4.5vw, 3.25rem)` |
| h3 (cards) | 0.92 / 1.0 / 1.05 / 1.1rem (inconsistent) |
| Hero sub | `clamp(.95rem, 2vw, 1.2rem)` |
| Body | 1rem / 1.02rem |
| Small body | 0.85–0.92rem |
| Micro / caption | 0.74–0.82rem |
| Eyebrow / label | 0.7–0.72rem with 0.18–0.2em tracking, uppercase |
| Plan price | 2.15rem |
| Stat number | 1.9rem |
| Footer copy | 0.74rem |

Letter-spacing pattern: `-.02em` to `-.03em` on headings (tight), `.05em–.22em` uppercase (loose).
Line-height pattern: 1.09–1.13 on display headings, 1.55–1.8 on body.

### 3. LAYOUT / DESIGN

**Container:** `.container { max-width: 1100px; padding: 0 1.5rem; }` — single canonical width.

**Section vertical rhythm:** 80–148px top/bottom. Most common: `padding: 96px 0` or `104px 0`. Hero: `padding: 148px 0 100px` (148px top accounts for fixed 68px nav + breathing room).

**Spacing scale (rem, rough inventory):** 0.2 / 0.3 / 0.4 / 0.5 / 0.6 / 0.65 / 0.75 / 0.85 / 0.9 / 1.0 / 1.1 / 1.2 / 1.25 / 1.5 / 1.6 / 1.75 / 2.0 / 2.25 / 2.5 / 2.75 / 3.0 / 3.5. Not a strict scale — author uses whatever fits. Loose 0.25rem increments under 2rem.

**Border-radius scale:**
- 6px — `.btn`, `.tg-badge`
- 10px — `.pain-card`, `.included-tile`, `.faq-item`, `.btn-outline`
- 12px — `.value-item`, `.outcome-card`, `.proof-card`, `.belief-card`, `.faq-item.open` boundary
- 14px — `.we-use-inner`, `.compare-wrap`, `.plan-card`, `.pre-pricing-cta-inner`
- 16px — `.tg-mockup`
- 18px — `.phone-card`
- 50% — circles (avatars, step nums)
- 100px — pill badges (`.eyebrow`, `.plan-badge`, `.csc-badge`, `.live-badge`)

**Shadows:**
- `0 8px 28px rgba(74,143,212,.35)` — primary CTA hover lift
- `0 12px 36px rgba(0,0,0,.25)` — value-item hover
- `0 18px 44px rgba(0,0,0,.32)` — outcome/belief/plan card hover
- `0 18px 60px rgba(74,143,212,.18)` + inset 1px ring — `.plan-card.popular`
- `0 24px 70px rgba(74,143,212,.28)` — popular hover
- `0 10px 40px rgba(0,0,0,.35)` — call-summary-card
- `0 24px 60px rgba(0,0,0,.5)` — tg-mockup
- `0 20px 60px rgba(0,0,0,.4)` + 1px ring — phone-card
- `0 4px 14px rgba(74,143,212,.45)` — plan-badge
- `0 8px 32px rgba(74,143,212,.4)` — phone-icon glow
- `0 2px 20px rgba(0,0,0,.4)` — nav scroll shadow (set via JS in `js/main.js:36`)

**Breakpoints:** 480px, 620px (pricing only), 720px (demo only), 768px, 900px. No standard scale — five distinct widths used.

**Grid / flex patterns:**
- `repeat(3, 1fr)` — outcomes, beliefs, plans, included, quick-faq
- `repeat(4, 1fr)` — how-steps, demo steps (with `::before` connector line at top:27px)
- `1fr 1fr` — pain-grid, proof-cards
- `1.2fr 1fr 1fr` — compare table
- All collapse to single column at ≤900px (or 1fr 1fr on outcomes at 768px)
- Flex column for `.value-list`, `.pain-cards`, `.faq-list`, `.wyg-points` — vertical stack with `gap: 0.8–1.1rem`

**Component patterns:**

- **Nav** (`css/style.css:62`): fixed top, 68px tall, `rgba(10,22,40,.96)` + 14px backdrop-blur, 1px var(--border) bottom. Logo (38px icon + stacked wordmark/sub), inline link list, CTA button. Hamburger ≤768px.
- **Mobile menu** (`css/style.css:122`): full-width drop, `--navy-mid` bg, links separated by border-bottom, CTA full-width at bottom.
- **Hero** (`css/style.css:138`): centered text, 900px radial blue glow `::before` at top, eyebrow pill (uppercase, blue text on rgba(74,143,212,.1)), clamp-sized h1 with `.accent` span in `--blue-light`, sub paragraph, CTA stack with micro-text.
- **Section header**: `.section-label` (blue uppercase tracker) + h2 with optional `.accent` + descriptive p. `text-align: center; margin-bottom: 4rem`.
- **Cards**: `--navy-mid` or `--navy-light` bg, 1px `--border`, 10–14px radius, hover translate(-4px) + shadow. Feature cards (`.outcome-card`, `.belief-card`) get a 2px gradient top-bar `linear-gradient(90deg, var(--blue), var(--blue-light))`.
- **Buttons**:
  - `.btn` — solid blue, 6px radius, 2px border, weight 700, padding `1rem 2.25rem`, hover translateY(-2px) + glow.
  - `.btn-outline` — transparent bg, blue-light text, 1px var(--blue) border, 10px radius (NOT 6px). Defined inline on every page that uses it (drift risk).
- **Pill badges**: 100px radius, uppercase, weight 700–800, 0.62–0.72rem. Variants: eyebrow, plan-badge (gradient), plan-badge-muted, live-badge (green), csc-badge (green).
- **Stats / proof strip**: centered row, 2.75rem gap, optional 1px×42px vertical dividers (`var(--border)`), large blue-light number + uppercase muted label.
- **FAQ accordion** (`pages/faq.html`): `.faq-item` collapsed (`max-height:0`), opens to `max-height:500px` with 0.4s transition. Arrow rotates 180deg.
- **Pricing**: 3-up grid, `.plan-card.popular` translateY(-6px), gradient top-bar, gradient badge top-right, list with `::before: '✓'` blue-light bullets.
- **Comparison table**: CSS-grid 1.2/1/1 with `.compare-cell + .compare-cell { border-left }`. Mobile (≤620px) collapses to stacked cards with generated `::before` labels.
- **Demo phone-card**: `--navy-light` bg, 2px rgba(74,143,212,.4) border, 18px radius, gradient phone-icon circle, radial glow `::before`.
- **Telegram mockup**: standalone visual style, distinct dark colors `#1a1f2e` / `#212738` / `#2a3244` — does not use shared tokens.
- **Footer** (`css/style.css:219`): `--navy-mid` bg, 1px border-top, brand-group + nav links + copy, wraps + center-aligns ≤480px.

### 4. STACK

- **Framework:** none. Plain HTML5, vanilla CSS, vanilla JS. No bundler, no package.json (none found at repo root).
- **CSS approach:** single shared stylesheet `css/style.css` for tokens + base (nav, hero base, footer, btn, container, eyebrow). Per-page `<style>` blocks inside each HTML `<head>` for page-specific components. No Tailwind, no PostCSS, no CSS Modules, no styled-components, no preprocessor.
- **JS:** `js/main.js` — IIFE, vanilla, ~41 lines: hamburger toggle + nav scroll-shadow only.
- **External deps loaded at runtime:**
  - Vapi web SDK on demo.html: ESM import from `https://esm.sh/@vapi-ai/web@2.5.2` (per session log).
  - Stripe (referenced in `config/stripe.js`, not yet wired per session log).
- **Hosting:** GitHub Pages, custom domain `genesisai.systems` (CNAME file at root).
- **No build step.** Files served as-is.

### 5. FILE MAP — where to edit

**Design tokens (THE place to start any rebrand):**
- `css/style.css:10-23` — `:root` CSS variables. All color/font tokens live here.

**Shared base styles (touch every page):**
- `css/style.css` (full file, 251 lines) — reset, body, container, btn, nav, mobile menu, hero base, eyebrow, section-header, footer-cta base, footer, base responsive at 480 / 768.

**Page-specific styles (drift risk — many duplicates between pages):**
- `index.html:16-286` — homepage `<style>` block (also duplicated at `pages/index.html` — both files exist).
- `pages/about.html` — about page styles (~330 lines incl. style block).
- `pages/demo.html` — demo + Telegram mockup + Vapi button + steps.
- `pages/faq.html` — FAQ accordion.
- `pages/pricing.html` — plan cards, comparison table, pre-pricing CTA, btn-outline override.
- `pages/privacy.html`, `pages/terms.html` — minimal `.legal` block.

**Duplicated patches across page-style blocks** (refactor candidates):
- `.cta-pair` / `.cta-stack` / `.btn-outline` — appears verbatim in index, about, demo, faq, pages/index.
- `.pain` block — appears in index, about, demo, pricing with slight padding variance.
- `.value` block — about + demo.
- Section h2 clamp `clamp(1.7rem, 3.5vw, 2.6rem)` weight 800 with `.accent` — duplicated 8+ times.

**JS:**
- `js/main.js` — only file. Hamburger + nav shadow. No Stripe / Vapi here (Vapi is inline `<script type="module">` in demo.html).

**Config:**
- `config/stripe.js` — Stripe pricing config (not loaded yet).
- No `tailwind.config`, no `postcss.config`, no `package.json`, no `vite.config` — none exist.

**Assets:**
- `assets/logos/` — logo-dark.png, logo-light.png, favicon.png, favicon-32.png, favicon-180.png.
- `assets/images/`, `assets/video/` — content media.

**Notes for any redesign / token swap:**
1. Edit `css/style.css:10-23` to swap palette globally — but you'll still hit the hard-coded mockup colors (`#1a1f2e`, `#212738`, `#f0a500`, `#4ade80`, etc.) in page-specific style blocks.
2. The off-palette `rgba(58,134,255,.08)` btn-outline-hover is duplicated in 4 pages — promote `.btn-outline` to `css/style.css` to fix once.
3. Two `index.html` files exist (`/index.html` AND `/pages/index.html`) — per session log, repo-root one is the placeholder; full V2 lives in `pages/index.html`. Confirmed identical `<style>` block content.
4. No design system file (no `tokens.css`, no `theme.js`, no Storybook). The 11 CSS variables in `style.css:10-23` are the entire system.

---

## Session 3 — 2026-05-04 — Gate 6 cutover (v3 launch)

Cutover sequence executed against `prosperouscollection-prog/genesis-ai-website-v2` after auth swap on Mac mini.

- **Cutover timestamp:** 2026-05-04 (UTC).
- **Pre-rebuild archive:** `archive/v2-final` branch pushed to origin from `1d8a305` (the recon-log commit on top of the prior live `fe187fa`). Preserves the entire pre-rebuild v2 site state plus the recon log for forensic reference.
- **Squash commit:** `a407b44 feat: v3 launch — homepage rebuild, About/FAQ rewrite, name lock, single-CTA architecture, Detroit benchmark, Riley-named copy`. Squashed 6 rebuild/v3 commits (1aa8de8 → 4b511ba → 0fedc3a → 5dcadb4 → f028cd9 → 20073f6) into one merge to `main`.
- **Tag:** `v3-launch-20260504` annotated against `a407b44`. Pushed to origin.
- **Branch state at cutover:**
  - `main` → `a407b44` (live)
  - `archive/v2-final` → `1d8a305` (frozen pre-rebuild state)
  - `rebuild/v3` → `20073f6` (kept for forensic reference; do not delete until live site is confirmed healthy)
- **GitHub Pages deploy:** triggered automatically by push to `main`. Production URL: `https://genesisai.systems`. Custom domain wired via root `CNAME` file.

What shipped in v3:
- Homepage: 9-section structure, inline Vapi widget at `#live-demo`, hero CTA scrolls to inline demo, final CTA flips to Calendly with risk reversal copy, "What is Genesis AI Systems and what is Riley?" Q1 in the objection FAQ.
- About: full first-person founder narrative, 280px headshot, banned vocab removed (no more "Operational Proof" / "Enterprise-level"), Detroit benchmark applied to belief #3.
- FAQ: 13 Qs in 4 grouped sections (Common Objections, Setup & Operations, Pricing & Trial, Privacy). Top question mirrors homepage Section 8. Footer-cta uses `Book Free Audit Call` Calendly + tel: secondary line.
- Demo: `#vapiCallBtn` self-anchors swapped to `#demo-card` so visitors land at the top of the demo card section. Telegram mockup label changed `requested_quote` → `Requested a quote`. Trailing-dot ellipses stripped from Vapi status text.
- Pricing: $4,000-$5,000 Detroit Q4 2025 benchmark applied (hero pain copy + comparison table). `.plan-cta .btn` now wraps text to two lines on the recommended card. Phone callout under plans grid. Footer-cta is now `Book Free Audit Call` primary + `More Questions?` outline button. Pre-pricing "Not sure yet? Talk to Riley first" section deleted entirely.
- Site-wide: top nav reordered to `Home / About / Demo / Pricing / FAQ / Book a Call / [Talk to Riley]` on every page, mobile menu mirrors. New-tab carve-out: only Calendly + Stripe URLs use `target="_blank"`. Site-wide name lock: every customer-facing "Genesis" expanded to "Genesis AI Systems."
- Token block at `css/style.css:10-23` and all 5 logo files + favicon + founder.jpg byte-identical to Gate 1 baseline.

Outstanding Gate-6 follow-ups:
- Real-browser test of the live `genesisai.systems` post-deploy (Vapi widget, Stripe checkouts, Calendly link).
- Lighthouse score from a network-realistic environment.
- Decide when to delete `rebuild/v3` (keep until live site is confirmed healthy).

---
