# Robinleo Atlas — maintenance handoff

## Build and navigation
- GitHub Pages / Jekyll static site; run `node museum-build.cjs` and `node museum-validate.cjs` before committing.
- Main content: `data/museum.json` and `data/museum-editorial.json`. Three language editions are generated and committed.
- `museum-qingming.cjs` defines the Qingming screening room and the exact 27-clip catalog. The JavaScript uses one video player with explicit user-controlled playback.
- The original Persona Distill exhibit remains at `/persona-distill/`; legacy root anchors redirect there. Its five remaining ChatGLM share links are retained; obsolete DeepSeek share links have been removed. The original sponsor section and QR image are unchanged.
- Each generated page ends with a voluntary sponsorship link to `/persona-distill/#support`. No additional payment flow or payment processor is introduced.

## Content and publication boundaries
- Public content: selected original/approved work, curated notebook excerpts (labeled as quotations or distilled ideas), and owner-approved Qingming exhibition footage.
- Qingming: 27 video-only MP4s (8 panoramic long-scroll weather clips, 8 Rainbow Bridge weather clips, 8 seasonal day/night views, 3 cinematic clips) and 27 WebP posters in `assets/museum/qingming/`. Public web copies retain video streams and omit all audio, including the thunder clip's original audio. No private source repository, APK, private notes, or collaboration documentation is published.
- The Qingming source project is a 3D artistic interpretation, not a museum-endorsed work or a released game. The original private evaluation snapshot remains private.
- Review rights and source provenance before adding other media. Do not copy private repository links, secrets, third-party assets without permission, or entire private notebooks into public pages.
- Keep the three languages consistent, and preserve existing URLs.

## Verification
- Deterministic generation and static route/asset checks are enforced by the Pages CI workflow.
- Local browser tests cover desktop, mobile, tablet, multilingual navigation, project filtering, quote controls, galleries, the Qingming screening controls and original sponsor QR.

## Editorial direction — 2026-11-15
- Home centers cognitive sovereignty, practice, and freedom rather than academic credentials. SUSTech remains on the About page as personal experience.
- `/method/` and its English/Japanese equivalents connect Zhuangzi readings to knowledge, authority, education, and iterative creation. New wording and personal interpretations are labeled; private source files are not linked publicly.
- The thought index retains original entries and adds verified discussion excerpts and editorial slogans. Keep the source/translation distinction when editing.
