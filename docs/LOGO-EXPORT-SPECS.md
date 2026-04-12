# Logo Export Specs — Genesis AI Systems

Export these files from the .ai source file and drop them into:
/Users/genesisai/genesis-ai-website-v2/assets/logos/

---

## Files needed

### logo-dark.png
- Use: Navigation bar and any dark/navy background
- Variant: Horizontal — white wordmark + blue "AI SYSTEMS"
- Canvas size: 800 x 200 px
- Scale: @2x (export at 1600 x 400 px, save as logo-dark.png)
- Background: Transparent
- Format: PNG-24

### favicon.png
- Use: Browser tab icon
- Variant: Icon only — navy rounded square tile with G-mark
- Canvas sizes needed: Two separate files
  - favicon-32.png — 32 x 32 px
  - favicon-180.png — 180 x 180 px (Apple touch icon)
- Background: Navy (#0A1628) or transparent
- Format: PNG-24

### logo-light.png (if a light variant exists)
- Use: Any light/white background section (TBD — only export if the variant exists)
- Variant: Horizontal — dark wordmark version
- Canvas size: 800 x 200 px
- Scale: @2x (export at 1600 x 400 px, save as logo-light.png)
- Background: Transparent
- Format: PNG-24

---

## Where they go in the code

All swap points in the HTML are marked with this comment:
  <!-- SWAP: replace with logo-dark.png once exported -->

Once files are in assets/logos/, those comments get swapped out in a new session.

---

## Quick Illustrator export steps

1. Open the .ai file
2. File → Export → Export for Screens (or Export As)
3. Select the artboard for each variant
4. Set format to PNG, resolution to 2x for logo files, 1x for favicons
5. Export to /Users/genesisai/genesis-ai-website-v2/assets/logos/
6. Rename files to match the names above exactly
