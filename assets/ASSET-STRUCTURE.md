# Asset Structure

This folder is organized by website role so the project can be restored and edited from the external drive without guessing where files belong.

## Active shared assets

- `js/` - shared JavaScript used by active HTML pages.
- `styles.css` - shared stylesheet for the site.
- `cv/` - downloadable CV files used by the home/contact section.
- `logos/` - partner, collaborator, and project logos.
  - `logos/cfi/`
  - `logos/nus-ccl/`
  - `logos/prep-aqua/`
  - `logos/3m-dt/`
- `hero-images/` - general hero and page-level visual assets.
- `group-covers/` - publication, project, patent, service, and card-category cover images.
- `journal-covers/` - journal cover images.

## Research assets

- `module1-covers/` to `module6-covers/` - cover images for research modules.
- `research-module-gifs/` - animated module overview images.
- `research-branch-gifs/` - branch-level and home research animations.
- `research-framework/` - 3M-DT / water-resources / water-hazards framework graphics.
- `research-details/` - figures and equation images used inside research cards, named by module/card/figure.
- `research-source/` - research source or preview materials not directly used as final card figures.

## News and source materials

- `news-source/awards/` - award source images grouped by award.
- `news-source/events/` - event and meeting source images grouped by event.
- `news-source/institutions/` - institution logos and related source materials.
- `news-source/raw-pages/` - archived HTML source pages kept for traceability, not active website pages.

## Archives

- `_archive/script-backups/` - old script snapshots retained for rollback/reference.

Root-level files in `assets/` should be kept minimal: normally only `styles.css` and this `ASSET-STRUCTURE.md` file remain here.
