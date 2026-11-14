# Robinleo Atlas — maintenance handoff

## Build
The public root is a static GitHub Pages / Jekyll site. Generate all three language editions with `node museum-build.cjs`; content lives in `data/museum.json`. The generated HTML is committed, so Pages needs no additional Node build.
Legacy Hexo files are unchanged and excluded from the published site by Jekyll. The existing character exhibit is at /persona-distill/; old root anchors redirect there. Its original seven shares and support assets are preserved.

## Content and release policy
- Screenshots in assets/museum are development captures; no game release or playable download is implied.
- Never add private repository links, credentials, unapproved third-party assets, private notebook contents, draft chapters or restricted promotional media to the public repository (including branches).
- Short quotations from the selected notebook are marked as direct excerpts or distilled statements. Other languages are translations.
- Add projects or translations to data/museum.json and regenerate. Use image files only after review; use WebP and meaningful alternative text.
- Review video rights before adding any publicly playable recording. The current first release includes images, not a video library.
- Maintain all three language versions and retain legacy URLs.
## Verification
Local Playwright against a static HTTP server: 33 page / viewport checks across desktop, mobile and tablet, image lightbox, theme toggle and old anchor redirect. This is local preview verification, not an online deployment. External share availability has not been verified.
