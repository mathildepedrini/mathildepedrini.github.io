# Mathilde Pedrini — refined editorial portfolio

The original French newspaper design, refined for readability and mobile use. This is a static GitHub Pages website: no build command, installation, database or server is required.

## Upload

1. Unzip the package and upload its **contents** into the repository’s publishing folder. `index.html` must be at the top level. Do not upload the ZIP or an enclosing folder.
2. Replace matching files and upload the complete `assets` folder. Keep any existing custom-domain `CNAME` and repository workflows.
3. Keep your existing Pages settings if they already work. Otherwise select **Settings → Pages → Deploy from a branch**, your publishing branch (usually `main`) and **/(root)**.
4. Wait for the Pages deployment to complete in **Actions**, then visit the website. Use **Command + Shift + R** if an old version remains visible.

The previous `portfolio-editorial-20260930-v2.css` and `.js` are no longer used. Remove them after checking the new site, if no other page references them. The included `.nojekyll` file supports direct static publishing.

[GitHub publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Contents and editing

- `index.html`: text, sections, contact links and expandable project explanations.
- `styles.css`: original editorial styling with consolidated responsive rules. Colours and type families are defined in `:root`.
- `script.js`: mobile navigation, current-section indication, direct project links and print support.
- `404.html` and `robots.txt`: fallback page and crawler guidance.
- `assets/images/`: original portrait and project illustrations, favicon variants and social preview.
- `assets/fonts/`: the original GFS Didot, EB Garamond, Inter and Caveat type families, stored locally with their SIL licences.
- `assets/documents/Mathilde-Pedrini-CV.pdf`: the supplied CV, unchanged.

Open `index.html` to preview locally with the folder intact. The essential content, navigation and project disclosures also work without JavaScript.

Replace the CV under the same filename to preserve its links. Update the footer’s file-size label if needed. Change both visible text and `mailto:`/`tel:` destinations when updating contact details.

## Content and evidence

Positions, dates and qualifications follow the supplied CV. The original portrait, illustrations, overall composition and section order are preserved. The Carnaval description is explicitly a planning sample; it does not claim completed teaching or measured outcomes.

The project images are illustrations, as their captions state. The expanded Shadow Theatre and Francophonie sections suggest suitable evidence to add: a cleared stage photograph, public event programme or display photograph. Remove identifying student information from the actual uploaded files, not just from the visible crop. No student records or internal school documents are included.

## Metadata and checks

The original `noindex, follow` preference is retained. It requests exclusion from search results; the site and CV remain publicly accessible. Change it to `index, follow` if you want search indexing.

For a different website address, update the canonical URL, Open Graph URL, both social-image URLs and the return link in `404.html`.

Verified in Chromium at 320, 375, 390, 430, 640, 641, 768, 980, 981, 1024, 1280, 1512, 1728 and 1920 px, with projects closed and expanded. Checks covered keyboard navigation, menu focus, section positioning, CV download, local links, no-JavaScript access and reduced motion. Automated axe checks found no WCAG A/AA violations in the tested mobile and desktop states. Safari and Firefox were not tested.

Before-and-after comparisons use the same intended fonts, served locally for reliable rendering. The page makes no external asset requests and contains no analytics or tracking. The original LinkedIn profile URL is retained; automated access to its destination was unavailable. Email and telephone links open the visitor’s own applications.
