# Personal Homepage v1 — Standalone Preview

This branch introduces a new, responsive personal homepage based on the existing GitHub Pages repository.

## What was added
- `index.html`: dependency-free single-file website, with Projects / About / Notes sections.
- Responsive navigation, light/dark theme switch, basic metadata, reduced-motion support and keyboard access.
- Only public GitHub links are included. No fabricated project details or articles were added.

## What was deliberately preserved
- The existing Hexo 7.3 project, `_config.yml`, `source/`, `public/`, posts and theme files.
- The current `main` branch and any existing deployment.

## Local preview
Download or checkout the branch and open `index.html` in your browser. No package installation or server is needed.

## Publishing to GitHub Pages
This is **not yet published**. Merging this branch creates a root-level `index.html`; it becomes the homepage if GitHub Pages is configured to publish from `main / (root)`.

Check repository **Settings → Pages** before publishing. The existing Hexo `_config.yml` also has a `deploy` target of `main`; running `hexo deploy` may overwrite files on that branch. Decide whether the site should use the standalone homepage or the Hexo deployment pipeline before enabling automatic publishing.

## Notes for a future Sites import
Use the committed `index.html` as the starting design/reference. This branch was created through GitHub, not through a Sites project API, and does not claim a Sites site was created.

## Easy rollback
This work lives in `sites/personal-homepage-v1`. Until merged, deleting the branch leaves the original site unchanged. If merged, revert the PR commit to restore the previous main branch behavior.
