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
│   ├── demo.html               ← BUILT
│   ├── faq.html                ← BUILT
│   └── pricing.html            ← BUILT
├── assets/
│   ├── logos/                  ← logo-dark.png, logo-light.png, favicon-32.png, favicon-180.png, favicon.png
│   ├── images/                 ← EMPTY
│   └── video/                  ← EMPTY
├── css/style.css               ← empty, styles are inline for now
├── js/main.js                  ← empty, JS is inline for now
├── config/stripe.js            ← live Stripe payment links (build, retainer, combined)
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
| Pricing  | BUILT — pages/pricing.html    | Stripe links wired, complete               |

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
3. [x] Confirm temp page is live on genesisai.systems
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
16. [x] Real browser test of demo page Vapi button — confirmed working 2026-04-12
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
No em dashes anywhere in copy. Use commas or periods instead.
Copy must not read like AI wrote it. Plain, direct, human.

Current state summary:

Site is LIVE at https://genesisai.systems
Repo: https://github.com/prosperouscollection-prog/genesis-ai-website-v2 (public, main branch)
root index.html = temp "Something Sharper Is Coming" holding page (intentional, not swapping yet)
All 5 pages built and live at /pages/
Real logos in across all 5 pages
Demo page Vapi web call working, Demo Riley live, Telegram confirmed
Stripe payment links wired into pricing page, all three smoke tested in live mode
config/stripe.js written with all three payment link URLs

Open items:
- Swap root index.html to full homepage when ready (holding intentionally)
- Get real metric from Cortland deployment when available
- Quote BUSINESS_MAILING_ADDRESS value in .env before next sourcing session

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
- `logo-dark.png` and `logo-light.png` — PNG format confirmed, black canvas issue resolved.

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
- [x] Commit and push pricing.html + config/stripe.js to main — commit 5e68f22
- [x] Smoke test all three Stripe links in browser — all three confirmed loading correctly in live mode 2026-04-12
- [x] Build About page
- [x] Build FAQ page

---

## 2026-04-12 — Site-wide copy, CTA, and trust pass

### Files changed (5)
- `pages/index.html`
- `pages/about.html`
- `pages/demo.html`
- `pages/faq.html`
- `pages/pricing.html`

### Files created (2)
- `pages/privacy.html` (Privacy Policy)
- `pages/terms.html` (Terms of Service)

### Copy and trust changes
- Replaced the uncited home-page stats strip with three cited research stats: Invoca (2021) on missed calls, BT Business Research (2014) on caller patience, InsideSales.com (2021) on 5-minute lead response.
- Softened absolute claims on the home page. "Zero Missed Calls" card becomes "Calls Answered Around the Clock". "100% Calls Captured" removed from stats and replaced with "Every call gets a response" in the secondary proof strip. "Wins 78% of the time" sentence removed from pain card.
- Added hero audience line naming the buyer (contractors, plumbers, HVAC, electricians, roofers, landscapers) and a short reassurance line explaining what happens next after talking to Riley.
- Added a "We use what we build" proof block on the home page with a replica call summary card for the Genesis AI Systems own line. Name/number redacted. Card reuses the existing demo-page summary visual pattern via a new `call-summary-card` class so the home-page card does not render the "Telegram" label.
- About page: added forwarding reassurance line ("You forward your number to us. No new phone number required. Setup takes less than a week.") and inserted an early CTA block above the rest of the body.

### CTA hierarchy flipped to demo-first sitewide
- Every CTA block across the 5 edited pages now uses the standard stacked pair: primary `Talk to Riley (60 sec)` linking to `/pages/demo.html` (new tab), secondary `Book Free Audit Call` linking to Calendly (new tab), with microcopy under each.
- Exceptions preserved per brief: the demo page live-call interaction block keeps its custom Option A / Option B layout (preserving the existing Vapi trigger, button id, spans, and `#callStatus`, with the assistant id `b41a6283-e3f8-4b75-8619-53724eb39de7` unchanged). The pricing page retains a single-primary pre-pricing CTA block directly above the plans.
- Mobile nav button and top-nav button on every page now carry a single primary "Talk to Riley (60 sec)" CTA, not a pair. Confirmed with the user before applying.
- Banned phrases removed from live copy: "Book Your Free Demo Call", "Book Your Free Call", "Book Your Free Audit Call", "Stop Losing Calls. Book Your Free Demo".
- Pricing free tier standardized: tier name is now "Free AI Audit Call", button label is "Book Free Audit Call".

### Delivery method language
- Removed all customer-facing references to "Telegram" on pages/demo.html. The `.tg-mockup::before` pseudo-element label (which rendered the word "Telegram" above the call summary card) was removed from the page-specific `<style>` block. The "Goes Where You Are" wyg-point paragraph was rewritten to: "After every call, you get an instant summary showing who called, why they called, and what happens next. Delivered to your phone."

### Privacy and Terms pages
- Created `pages/privacy.html` and `pages/terms.html`, each modeled on the about-page layout (hero + single-column body + footer), using a page-specific `.legal` style block for the sections and bullet lists. Both pages include the full nav, mobile menu, footer, and a "Last updated: April 2026" line. Neither page carries a CTA pair (user-confirmed, legal pages stay clean).
- Business mailing address included on both: Genesis AI Systems, 28475 Greenfield Road, Suite 113 7709, Lathrup Village, MI 48076.
- Contact email: info@genesisai.systems.

### Footer changes
- Every edited and newly created page now includes Privacy and Terms links in the footer nav, placed between the existing Pricing link and the Calendly "Book a Call" link.

### FAQ additions
- Added a new FAQ item "Can I try it without booking a call?" after the "Can I hear it before I pay anything?" item, pointing to the demo page.
- Expanded the existing "Is my call data private?" answer to describe recording/transcript retention and link "Privacy Policy" to `privacy.html`.

### Styling approach
- `css/style.css` was not touched. Each edited page has an additional small block in its existing page-specific `<style>` defining `.cta-pair`, `.cta-stack`, and (on pages without it) `.btn-outline`. The home page also adds `.we-use`, `.call-summary-card`, and `.stat.cited` helpers in its block. Pricing adds `.pre-pricing-cta` styles.

### Open items
- Swap root `/index.html` to the full homepage once all content is final. Currently still the holding page.
- Get a real metric from the Cortland deployment to replace the Invoca/BT/InsideSales citations where appropriate.
- Record and drop in a real screenshot of a Genesis AI Systems call summary to replace the handcrafted replica on the home-page proof block.

---

## 2026-04-12 — Homepage rewrite to Pain → Value → Low CTA framework

### Homepage (pages/index.html)
Rewrote the full homepage copy to align tighter with a Pain → Value → Low CTA structure, without redesigning around case studies or quantified client results.

- **Meta**: title and description updated to lead with "Stop losing jobs from missed calls" and the trained AI receptionist positioning.
- **Hero**:
  - H1: "Stop losing jobs just because you could not answer the phone."
  - Sub: "Genesis AI Systems gives local businesses a trained AI receptionist that answers calls, captures the reason for the call, and sends you a clean summary so you can respond faster without hiring front-desk staff."
  - Primary CTA: "Talk to Riley" (demo.html, new tab). Secondary CTA: "Book Free Audit Call" (Calendly, new tab).
  - Trust line below the CTA pair: "Live on our own business line. Built for local service businesses. No long-term contract."
  - Dropped the audience micro line and the extra reassurance micro line added in the earlier pass.
- **Pain section**:
  - H2: "Most missed calls are not neutral. They are lost opportunities."
  - Body reframed around on-the-job / driving / with-a-customer / off-the-clock scenarios.
  - Pain cards rewritten to 4 specific miss moments: On the job, Driving, With a customer, Off the clock.
- **Value section** (replaces the old Outcomes grid):
  - New H2: "What Riley actually does."
  - Reuses the `.outcomes` section wrapper for styling continuity. Replaces the 6-card grid with a single-column numbered `.value-list` of 6 items: answers incoming calls, handles first response, collects what the caller needs, qualifies basic lead details, sends a clean summary, helps the owner respond faster without adding staff.
- **How it works** (moved up in the flow, above operational proof):
  - New H2: "Simple to launch."
  - Four new step labels: "We learn your business", "We configure your call flow", "Riley goes live on your line", "You start catching calls you would have missed".
- **Operational proof** (replaces the old social-proof + we-use blocks):
  - New H3: "Built to be practical, not theoretical."
  - Leads with "Riley has been answering calls for Genesis AI Systems on our own business line since March. Before we put it on any other line, we put it on ours."
  - Explicitly states "No case studies, no inflated numbers."
  - Keeps the sample owner-notification summary card and its caption.
  - Dropped the "2 live client deployments" stat and the "Day 1 Calls Answered Since Go-Live" stat to avoid implying deployment history.
- **Founder trust section** (replaces the old mid CTA):
  - New H2: "You are not handed off to a sales team."
  - Body explicitly names founder-led posture, no account managers, no handoffs, no script.
  - Standard CTA pair.
- **Footer CTA**: softer headline "The next missed call does not have to happen." with matching body, keeping the standard CTA pair.
- **Button label normalized**: "Talk to Riley (60 sec)" becomes just "Talk to Riley" on every CTA across every page (index, about, demo, faq, pricing, privacy, terms), per the framework's canonical primary label. `btnText` reset string in the demo.html Vapi script also updated.

### About page (pages/about.html) — strong founder presence
- Hero sub rewritten to lead with founder-led posture: "Genesis AI Systems is founder-led out of Michigan. One person builds, configures, and supports the AI receptionist you end up running."
- "Why We Exist" value body reworded to name founder-led origin without losing the "not a tech company that stumbled into AI" line.
- "Small Team. Real Results." headline softened to "Small team. No handoffs." because "Real Results" implies measurable client outcomes that don't yet exist. Body rewritten to emphasize no account managers and single point of contact.
- "We Use What We Build" trust section renamed "Operational Proof", body softened to remove the "Two live client deployments running today" line and add an explicit "No case studies yet, no inflated numbers."

### Demo page (pages/demo.html) — moderate founder presence
- Meet Riley value body gained a single moderate founder line: "Built and tuned directly by the founder on our own business line before anything goes out to a client." Rest of the page left alone.

### Pricing page (pages/pricing.html) — minimal founder presence
- No founder language added. "Most Popular" badge on the retainer plan softened to "Recommended" so the plan does not imply multiple customers having chosen it when the dataset is still small.

### FAQ page (pages/faq.html)
- No changes beyond the global button label normalization. Already minimal founder presence.

### Verification pass (post-edit)
- Banned phrase grep across `pages/`: 0 matches for "Book Your Free Demo Call", "Book Your Free Call", "Book Your Free Audit Call", "Stop Losing Calls. Book Your Free Demo".
- `[Tt]elegram` grep: 0 matches.
- Em-dash grep (`—` and `&mdash;`): 0 matches.
- "Talk to Riley (60 sec)" grep: 0 matches; 28 occurrences of "Talk to Riley" across the 7 pages.
- Vapi integration on demo.html untouched: assistant id `b41a6283-e3f8-4b75-8619-53724eb39de7`, public key, `@vapi-ai/web@2.5.2` import, and `#vapiCallBtn`/`#btnIcon`/`#btnText`/`#callStatus` element ids unchanged. Only the `btnText.textContent` reset string was updated to match the new primary label.
- `css/style.css`, `js/main.js`, and root `/index.html` not touched.

### Open items (carried forward)
- Swap root `/index.html` to the full homepage once ready.
- Real Cortland deployment metrics to replace or supplement the cited industry stats on the home page once available.
- Real screenshot of a Genesis AI Systems call summary to replace the handcrafted replica on the home-page operational proof block.
- Live browser smoke test of the demo page Option A / Option B layout and Vapi call flow (not performed in this environment).

---

## 2026-04-13 — Root swap: site fully live

- Root `/index.html` swapped to full homepage (content mirrored from `pages/index.html`).
- Site is fully live at genesisai.systems.
- Temp holding page retired.
- Internal nav hrefs in the root `/index.html` rewritten to absolute paths (`/`, `/pages/about.html`, `/pages/demo.html`, `/pages/faq.html`, `/pages/pricing.html`, `/pages/privacy.html`, `/pages/terms.html`) so the top nav, mobile menu, and footer nav resolve correctly from the site root. Asset/CSS/JS refs left as `../assets/...`, `../css/style.css`, `../js/main.js`; browser URL normalization collapses these to the correct root paths so they load without issue.

### Open item
- Replace call summary replica card with real screenshot when available.
