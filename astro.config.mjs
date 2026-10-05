import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://annikaluo.github.io',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
  image: {
    // Every Markdown image gets a srcset so phones download phone-sized files.
    layout: 'constrained',
    breakpoints: [480, 800, 1200, 1600, 2000],
  },
});
