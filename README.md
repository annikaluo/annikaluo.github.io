# annikaluo.github.io

Annika Luo's portfolio. A static site built with [Astro](https://astro.build): every page is plain HTML and CSS with no
JavaScript, and images are resized at build time so phones download phone-sized files.

## Run it locally

```
npm install
npm run dev
```

## Add or edit a project

Each project is a folder in `src/content/projects/`:

```
src/content/projects/rose-study/
  index.md     text and settings
  cover.jpg    image shown on the category page and on hover in the index
  01.jpg ...   images used in the page
```

The block at the top of `index.md` sets the title, category (`fashion`, `fine-arts` or `sustainability`), year, the short
italic note shown in the index, and the context lines (size, materials). Below it, write the page in Markdown:

- A blank line between images stacks them full width.
- Images on consecutive lines, with no blank line between, sit side by side in a grid.

Site-wide details (email, links, category names) are in `src/site.ts`. The About text is in `src/pages/about.astro`.

## Publish

Pushing to `main` builds and deploys the site through GitHub Actions (`.github/workflows/deploy.yml`). In the repository
settings, Pages must have its source set to "GitHub Actions".
