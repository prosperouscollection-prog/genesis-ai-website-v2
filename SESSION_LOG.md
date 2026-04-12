# Genesis AI Systems — V2 Build Session Log
Date: 2026-04-12
Status: IN PROGRESS

---

## Brand Rule — Non-Negotiable
Public-facing text always says `Genesis AI Systems` — never shortened.
Only exception: favicon where space forces abbreviation.

---

## Project Structure

```
/Users/genesisai/genesis-ai-website-v2/
├── index.html                  ← TEMP "Something Sharper Is Coming" page (LIVE)
├── pages/
│   ├── index.html              ← FULL V2 homepage (built, not live yet)
│   ├── about.html              ← BUILT
│   ├── demo.html               ← placeholder
│   ├── faq.html                ← BUILT
│   └── pricing.html            ← placeholder
├── assets/
│   ├── logos/                  ← logo-dark.png, logo-light.png, favicon-32.png, favicon-180.png, favicon.png
│   ├── images/                 ← EMPTY
│   └── video/                  ← EMPTY
├── css/style.css               ← empty, styles are inline for now
├── js/main.js                  ← empty, JS is inline for now
├── config/stripe.js            ← placeholder
├── .gitignore                  ← DS_Store, node_modules, .env
├── SESSION_LOG.md              ← this file
└── docs/
    ├── SESSION-LOG.md          ← dedicated website session log (new)
    └── LOGO-EXPORT-SPECS.md   ← logo export guide for designer (new)
```

---

## Do Not Touch
- `/Users/genesisai/genesis-ai-systems-v1-launch/` — V1 live backend, never touch
- GitHub repo `prosperouscollection-prog/ai-automation-portfolio` — archived placeholder, never touch

---

## GitHub
- Repo: https://github.com/prosperouscollection-prog/genesis-ai-website-v2
- Branch: main
- Visibility: Public
- Commits:
  - 20f72fd — V2 launch — temp page live, full site ready behind it
  - e874f79 — chore: remove .DS_Store, add .gitignore
  - 1cdbe9d — chore: track empty asset folders with .gitkeep
  - db0df00 — refactor: extract shared CSS and JS, fix mobile menu and footer nav

---

## Deployment
- Domain: genesisai.systems
- Host: GitHub Pages (deploy from main branch / root)
- GitHub Pages: NOT YET ENABLED — do this in repo Settings → Pages
- DNS: Cloudflare

### Cloudflare DNS — Current Records (do not delete)
- A     | n8n              | 167.99.62.62                          | DNS only  ← n8n server, keep
- CNAME | www              | prosperouscollection-prog.github.io   | change to DNS only (grey)
- MX    | genesisai.systems| mx.zoho.com (10)                      | keep
- MX    | genesisai.systems| mx2.zoho.com (20)                     | keep
- MX    | genesisai.systems| mx3.zoho.com (50)                     | keep
- All TXT records (SPF, DKIM, DMARC, Zoho verify)                  | keep

### Cloudflare DNS — Actions Still Needed
1. DELETE: CNAME record where Name = `genesisai.systems` → prosperouscollection-prog.github.io
2. ADD 4 A records (Name = @, DNS only/grey):
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
3. EDIT www CNAME: change from Proxied (orange) to DNS only (grey)
4. In GitHub repo Settings → Pages → Custom domain → type `genesisai.systems` → Save

---

## Calendly Link
https://calendly.com/genesisai-info-ptmt/free-ai-demo-call
Goes on every CTA button on every page. Opens in new tab.

---

## Pricing Structure
1. Free — AI Audit + Demo Call (lead capture)
2. $1,500 flat — AI Receptionist setup (one-time)
3. $1,500 setup + $497/month — Full Retainer

---

## Logo Status
- Source file: .ai (designer has it)
- Uploaded: workspace screenshot PNG showing all variants
- Variants confirmed:
  - Horizontal — dark/navy background (white wordmark + blue "AI SYSTEMS")
  - Horizontal — dark on black
  - Icon only — blue G-mark
  - Icon only — navy rounded square tile (favicon-ready)
- [x] logo-dark.png — DONE, exported and in assets/logos/
- [x] logo-light.png — DONE, exported and in assets/logos/
- [x] favicon.png, favicon-32.png, favicon-180.png — DONE, exported and in assets/logos/
- SVG placeholder logos swapped to real PNGs across all 5 pages (commit 869de4e)
- Favicon updated to favicon-32.png + favicon-180.png Apple touch icon on all 5 pages

---

## Social Proof — Locked In
- Riley: Genesis AI Systems own in-house AI receptionist, live now, used for demos
- Cortland: Active client, Michigan contractor, live deployment, brand new (less than 1 week)
- Demo version of Riley: to be built as separate Vapi instance for the Demo page

---

## 5 Pages — Build Status
| Page     | Status                        | Notes                                      |
|----------|-------------------------------|--------------------------------------------|
| Home     | BUILT — pages/index.html      | Full production code, waiting behind temp  |
| About    | BUILT — pages/about.html      | Complete                                   |
| Demo     | BUILT — pages/demo.html       | Vapi web call widget + Telegram mockup, wired to Demo Riley (b41a6283) |
| FAQ      | BUILT — pages/faq.html        | Complete                                   |
| Pricing  | Empty placeholder             | 3 cards, no pricing on homepage            |

---

## Homepage Audit Checklist (must pass 100%)
- [x] Pain headline above fold — contractor missing calls = jobs lost
- [x] Subheadline quantifies cost — $2,000–$8,000/month in missed jobs
- [x] Value section shows outcomes not features — 6 outcome cards
- [x] Real social proof before second scroll — Riley (live) + Cortland (live)
- [x] Single CTA — "Stop Losing Calls — Book Your Free Demo"
- [x] CTA minimum 3x — hero, mid-section, footer
- [x] Button copy outcome-based — not "click here" or "submit"
- [x] No pricing on homepage

---

## Demo Page Plan
- Section 1: Vapi live call demo
  - Placeholder: button linking to Calendly
  - One line swap to activate when demo Riley number is ready
- Section 2: Blended with Section 1
  - After purchase, same interface delivers live call summaries + reason-for-call
  - Tell that story visually
- Screen recording of n8n/Telegram system — embed as MP4 or Loom when ready

---

## Nav — All Pages
- Home, About, Demo, FAQ, Pricing
- Social pages (to be added when handles confirmed)
- Calendly CTA prominent
- Hamburger on mobile

---

## Next Steps (in order)
1. [x] Complete Cloudflare DNS changes (see above)
2. [x] Enable GitHub Pages in repo settings, set custom domain to genesisai.systems
3. [ ] Confirm temp page is live on genesisai.systems
4. [x] Export logo PNGs from Illustrator, drop into assets/logos/, swap comments
5. [x] Build Demo page
6. [x] Build Pricing page
7. [x] Build About page
8. [x] Build FAQ page
9. [ ] Get real metric from Cortland deployment (calls handled, response time, etc.)
10. [ ] When all pages done + logos in — swap index.html to full homepage
11. [x] Set up demo version of Riley on Vapi
12. [x] Swap Calendly placeholder on Demo page with live Vapi button
13. [x] Extract shared CSS into css/style.css and shared JS into js/main.js, link from all 5 pages
14. [x] Fix mobile menu visibility on load with hidden attribute + hidden property toggle in main.js
15. [x] Reset footer nav so it does not inherit the fixed/blurred topnav styles
16. [ ] Real browser test of demo page Vapi button once GitHub Pages is live
17. [x] Export logos — see docs/LOGO-EXPORT-SPECS.md

---

## New Chat Prompt
Use the prompt below to continue in a new window:
(see CONTINUATION_PROMPT section at bottom of this file)

---

## CONTINUATION PROMPT — paste this into new chat
You are continuing the build of the Genesis AI Systems website V2.
Before doing anything else, read this file:
/Users/genesisai/genesis-ai-website-v2/SESSION_LOG.md
Rules:

Brand name is always Genesis AI Systems — never shortened in public-facing text. Only exception is favicon.
/Users/genesisai/genesis-ai-systems-v1-launch/ — Read access permitted for credentials and reference only. Write access requires explicit per-session approval.
Never touch GitHub repo prosperouscollection-prog/ai-automation-portfolio — archived
Output all code as text for me to paste into Claude Code — do not run tools yourself
Pure HTML/CSS/JS only — no frameworks, no external dependencies

Current state summary:

Repo: https://github.com/prosperouscollection-prog/genesis-ai-website-v2 (public, main branch)
root index.html = temp "Something Sharper Is Coming" page
pages/index.html = full V2 homepage (built, not live yet)
DNS is Cloudflare — changes still pending (details in SESSION_LOG.md)
GitHub Pages not enabled yet

Immediate next task: Push all built pages live behind temp page, export logos per docs/LOGO-EXPORT-SPECS.md, enable GitHub Pages once logos are confirmed.

---

## 2026-04-12 — Demo page + Workflow 13 wired to n8n

### pages/demo.html
- Demo page built and committed: pages/demo.html — Vapi web call widget (Elliot voice) + Telegram mockup section. Demo Riley assistant ID: b41a6283-e3f8-4b75-8619-53724eb39de7.
- Committed in `c6edf3b` on `main`, pushed to `origin/main`. Single file changed, 272 insertions / 54 deletions (replaced 354-line static page with 572-line interactive version).
- Vapi SDK loaded lazily via `https://cdn.jsdelivr.net/npm/@vapi-ai/web@latest/dist/vapi.js` on first click (keeps initial page weight low, no framework).
- Correction applied during Vapi create call: the task spec passed `"voiceId": "elliot"` (lowercase), Vapi's enum requires `"Elliot"` (capitalized). Re-ran with `Elliot` and Vapi accepted (HTTP 201). The page JS does not reference the voice ID directly — Vapi pins it server-side on the assistant record — so no further change needed in demo.html.

### n8n — Workflow 13 (Demo Vapi Handler) is LIVE
- Workflow 13 created, imported, and activated on the remote n8n instance (`https://n8n.genesisai.systems`). Workflow ID `CrrzzZ8TNqvCntU1`, webhook confirmed with a 200 `{"received":true}` smoke test.
- Webhook URL for the `Demo Riley` Vapi assistant's `serverUrl` field: `https://n8n.genesisai.systems/webhook/demo-vapi-handler`
- Workflow only routes `end-of-call-report` → Telegram; `call-started` / `status-update` are intentionally silent so the demo line does not spam the prod chat mid-call.
- Telegram destination: `TELEGRAM_BOT_TOKEN` (@gasf1bot, production) + `TELEGRAM_CHAT_ID` — same env vars WF12 uses. Dev bot token was not used.
- Full node-level details for WF13 live in `v1-launch/docs/SESSION-LOG.md` under the 2026-04-12 entry (cross-repo task, but per the existing rule the V2 log only references the V1 log rather than duplicating its contents).

### Outstanding for the demo page to actually work
1. ~~Create the `Demo Riley` Vapi assistant with `serverUrl = https://n8n.genesisai.systems/webhook/demo-vapi-handler`.~~ **DONE** — assistant id `b41a6283-e3f8-4b75-8619-53724eb39de7`, created via `POST https://api.vapi.ai/assistant` on 2026-04-12, HTTP 201, serverUrl set, `maxDurationSeconds: 180`.
2. ~~Replace `DEMO_ASSISTANT_ID_HERE` in `pages/demo.html` with the returned assistant ID.~~ **DONE** — replaced in `pages/demo.html` line 492, committed as `c6edf3b`, pushed to `origin/main`.
3. ~~End-to-end test: place a web call through the demo page and confirm the Telegram message lands in the prod chat with the "DEMO LEAD" header.~~ **DONE** — simulated `end-of-call-report` curl to `/webhook/demo-vapi-handler` returned `HTTP 200`, n8n execution `1462` completed all 6 nodes successfully, Telegram API returned `ok: true, message_id: 220` from `@gasf1bot` to chat `8023833224` at `2026-04-12T11:15:38Z`. **A real browser web-call through the live demo page has not been performed yet** — only the webhook payload was simulated. The widget wire-up is believed correct but should still be exercised once by a human clicking the button.

### Known issues
- `.env` lines containing unquoted `BUSINESS_MAILING_ADDRESS` values will break scripts that use `set -e` while sourcing. Quote those values before next sourcing session.
- Demo page Telegram mockup previously showed "contractor" — fixed to "service business" in commit `01aaefe`.
- `assets/images/founder.jpg`: resized from 2.3 MB to 43 KB at 400px via sips. RESOLVED.
- `logo-dark.png` and `logo-light.png` have black canvas areas visible — confirm transparent on live site before going public.

---

## 2026-04-12 — Stripe Payment Links Created and Wired

### Stripe Products and Links (live mode)
| Product                      | Type            | Amount         | Link |
|------------------------------|-----------------|----------------|------|
| AI Receptionist Build        | One-time        | $1,500         | https://buy.stripe.com/fZubJ08nT7VRbY94Ij2Fa06 |
| AI Receptionist Retainer     | Recurring       | $479/month     | https://buy.stripe.com/14A00i8nTa3Z5zLeiT2Fa07 |
| AI Receptionist Full Setup   | Combined        | $1,500 + $479/mo | https://buy.stripe.com/fZu00i1Zvcc76DP2Ab2Fa08 |

Combined link puts $1,500 setup fee as a one-time line item alongside the $479/month subscription. Customer pays both in a single Stripe checkout session and is immediately enrolled in the monthly subscription.

### Stripe IDs (live mode)
- prod_UK6HgKWbgXu80R — AI Receptionist Build
- price_1TLSDxCroybrh0k8cFSJQekZ — $1,500 one-time
- prod_UK6RH4saXVcqtj — AI Receptionist Retainer
- price_1TLSEnCroybrh0k8AjnCiIXY — $479/month
- prod_UK6SvSxzwsOYTM — AI Receptionist Full Setup
- price_1TLSFKCroybrh0k8XikEnJte — $1,500 setup fee
- price_1TLSFKCroybrh0k8mAyJMYM4 — $479/month retainer

### Changes Made
- pages/pricing.html line 337-339: System Built CTA swapped from Calendly to BUILD LINK
- pages/pricing.html line 357-359: Full System Plus Retainer CTA swapped from Calendly to COMBINED LINK
- config/stripe.js: Written with all three payment link URLs as named constants, no secret keys

### Next Steps
- [ ] Commit and push pricing.html + config/stripe.js to main
- [ ] Smoke test all three Stripe links in browser — confirm checkout loads correctly in live mode
- [x] Build About page
- [x] Build FAQ page
