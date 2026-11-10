# Homepage maintenance

The homepage is `_pages/about.html`, published at `/` by GitHub Pages/Jekyll.
Its explicit `layout: null` is intentional: it is a complete HTML document with
its own responsive layout, not content for the legacy AcademicPages layout.
The previous `default` layout omitted the profile/sidebar and main content
wrapper, which caused the missing portrait and full-width body.

- Edit profile, news, publications and other academic information in `_pages/about.html`.
- Edit appearance in `assets/css/homepage.css` and controls in `assets/js/homepage.js`.
- Store publication figures and the portrait under `images/`.
- Keep `aria-controls` values paired with unique preview IDs when adding a paper.
- Keep the existing section IDs so links to the previous homepage continue to work.

The homepage follows the layout and visual styling of
[Percept](https://percept-team.github.io/) / AcaNova-X while retaining Xiang Ma's
own academic content. All text is present in the initial HTML. JavaScript only
enhances the mobile menu, news expansion, navigation highlighting and image previews.
Without JavaScript, navigation and all news remain visible and Image links open
their original figures. Fonts have local fallbacks; layout and icons do not
depend on a third-party CSS/JavaScript CDN.

The two AAAI-26 papers are grouped under their conference year (2026); the
original acceptance announcements remain dated November 2025. The old broken
Lexin Fang link pointing to `/xiangma.github.io/` was removed while preserving
the name and news item.

Validation: `.github/workflows/validate-homepage.yml` builds using the GitHub
Pages Jekyll action and checks the generated homepage, assets, redirect and JS.
For a complete local build in a Ruby environment, use `bundle install` followed
by `bundle exec jekyll serve`.
