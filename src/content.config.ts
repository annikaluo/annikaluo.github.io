import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One folder per project: src/content/projects/<slug>/index.md plus its images.
const projects = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/projects',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      category: z.enum(['fashion', 'visual-arts', 'environmental-art']),
      year: z.number(),
      month: z.number().default(1),
      date: z.string(),
      // Short italic line shown next to the title in the index.
      note: z.string(),
      // One or two sentences, shown on the category page and used as the page description.
      summary: z.string().optional(),
      // Dimensions, materials, tools.
      context: z.array(z.string()).default([]),
      related: z.array(z.string()).default([]),
      cover: image(),
      // Archived projects stay in the repo but are left off the site.
      archived: z.boolean().default(false),
    }),
});

export const collections = { projects };
