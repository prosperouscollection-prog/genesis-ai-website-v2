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
│   ├── about.html              ← placeholder
│   ├── demo.html               ← placeholder
│   ├── faq.html                ← placeholder
│   └── pricing.html            ← placeholder
├── assets/
│   ├── logos/                  ← EMPTY — waiting for exported PNGs
│   ├── images/                 ← EMPTY
│   └── video/                  ← EMPTY
├── css/style.css               ← empty, styles are inline for now
├── js/main.js                  ← empty, JS is inline for now
├── config/stripe.js            ← placeholder
├── .gitignore                  ← DS_Store, node_modules, .env
└── SESSION_LOG.md              ← this file
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
- STILL NEEDED: Individual exported PNGs
  - logo-dark.png (800×200 @2x, horizontal, for dark bg)
  - logo-light.png (800×200 @2x, horizontal, for light bg — TBD if exists)
  - favicon.png (32×32 and 180×180, navy tile icon)
- All logo swap points are marked with comments in both HTML files:
  <!-- SWAP: replace with logo-dark.png once exported -->

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
| About    | Empty placeholder             | Not started                                |
| Demo     | Empty placeholder             | Vapi button (Calendly until number ready)  |
| FAQ      | Empty placeholder             | Not started                                |
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
1. [ ] Complete Cloudflare DNS changes (see above)
2. [ ] Enable GitHub Pages in repo settings, set custom domain to genesisai.systems
3. [ ] Confirm temp page is live on genesisai.systems
4. [ ] Export logo PNGs from Illustrator, drop into assets/logos/, swap comments
5. [ ] Build Demo page
6. [ ] Build Pricing page
7. [ ] Build About page
8. [ ] Build FAQ page
9. [ ] Get real metric from Cortland deployment (calls handled, response time, etc.)
10. [ ] When all pages done + logos in — swap index.html to full homepage
11. [ ] Set up demo version of Riley on Vapi
12. [ ] Swap Calendly placeholder on Demo page with live Vapi button

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
Never touch /Users/genesisai/genesis-ai-systems-v1-launch/ ever
Never touch GitHub repo prosperouscollection-prog/ai-automation-portfolio — archived
Output all code as text for me to paste into Claude Code — do not run tools yourself
Pure HTML/CSS/JS only — no frameworks, no external dependencies

Current state summary:

Repo: https://github.com/prosperouscollection-prog/genesis-ai-website-v2 (public, main branch)
root index.html = temp "Something Sharper Is Coming" page
pages/index.html = full V2 homepage (built, not live yet)
DNS is Cloudflare — changes still pending (details in SESSION_LOG.md)
GitHub Pages not enabled yet

Immediate next task: [REPLACE THIS WITH WHAT YOU WANT TO DO]
