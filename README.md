# jamclee.github.io

Personal academic website, served by GitHub Pages at https://jamclee.github.io.
Visual style carried over from [portfolio-2021](https://github.com/jamclee/portfolio-2021).

## Pages

| File            | Tab                   |
|-----------------|-----------------------|
| `index.html`    | About (home page)     |
| `research.html` | Research              |
| `teaching.html` | Teaching & Coursework |
| `cv.html`       | CV                    |
| `beyond.html`   | Beyond Research       |

Shared styling is in `css/style.css`; the mobile menu is `js/hamburger.js`.
The downloadable CV is `files/cv.pdf` — replace that file to update it (keep the name).

## Editing

Plain HTML, no build step. The header/nav and footer are repeated in each page,
so a change to the menu must be made in all five files.

Text with `class="todo"` shows a yellow highlight — it marks placeholders to fill in.

## Publishing

Commit and push to `main`. GitHub Pages republishes within a minute or two
(Settings → Pages → Source: "Deploy from a branch", `main` / root).
