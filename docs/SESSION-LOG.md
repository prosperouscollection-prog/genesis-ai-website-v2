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

### Outstanding going into Session 2
- [ ] Enable GitHub Pages on genesis-ai-website-v2 (Settings → Pages → main / root → custom domain genesisai.systems)
- [ ] Real browser test of Vapi web call button on demo page once live
- [ ] Designer exports logos per docs/LOGO-EXPORT-SPECS.md, drops into assets/logos/
- [ ] Swap logo comments in all 5 pages once PNGs are confirmed in assets/logos/
- [ ] Stripe integration (after logos confirmed)
- [ ] Replace homepage placeholder stats with real metrics
- [ ] Swap root index.html to full V2 homepage (new chat window — do not do in an active session)

---
