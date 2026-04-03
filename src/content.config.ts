import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tips = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tips' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.enum(['horses', 'pets', 'poultry', 'livestock', 'birds', 'general']),
    readTime: z.number(),
    lang: z.enum(['en', 'fr']),
  }),
});

export const collections = { tips };
