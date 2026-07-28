# Asset Structure

This folder is organized by website/page hierarchy rather than by temporary source-material names.

## Root-Level Folders

- `group-covers/`: home/profile/group-related cover visuals.
- `journal-covers/`: publication and journal cover visuals.
- `module1-covers/` to `module6-covers/`: research module card cover images.
- `news-source/`: news, awards, events, and institution-logo materials.
- `project-covers/`: project-page cover visuals. Present in source; published only when referenced.
- `research-branch-gifs/`: branch-level research animations.
- `research-details/`: detailed figures used inside research module/card modals.
- `research-module-gifs/`: module-level research animations.
- `research-source/`: retained research source/reference materials. Present in source; published only when referenced.

## News Source Structure

Use the website hierarchy:

- `news-source/awards/<award-or-program-name>/`
- `news-source/events/<event-name>/`
- `news-source/institutions/<institution-or-logo-name>/`

Examples:

- `news-source/awards/forbes-u30-2023/`
- `news-source/awards/tsinghua-shuimu-scholar/`
- `news-source/events/zijin-salon-2022/`
- `news-source/institutions/tju-jgxy-logo/`

## Research Details Structure

Use module and card hierarchy:

- `research-details/module<module-number>-card<card-number>-<topic>/`

Example:

- `research-details/module1-card1-acoustic-theory/`

## Naming Rule

New folders should describe where the asset belongs on the website, not where the raw material came from.

Preferred:

```text
research-details/module2-card1-ecological-replenishment/
news-source/awards/forbes-u30-2023/
```

Avoid root-level temporary folders such as:

```text
acoustic-theory/
forbes-u30-2023/
tsinghua-shuimu/
```

## Publishing Rule

Edit and organize assets first in:

```text
I:\00NUS_misc\AcademicHP\site-source\assets
```

Then sync the required changed assets and HTML/CSS references into:

```text
I:\00NUS_misc\AcademicHP\github-pages-dist\assets
```
