import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const yazilar = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/yazilar' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    type: z.enum(['şiir', 'düz yazı']),
    date: z.coerce.date(),
    cover: z.string(),
    mobileCover: z.string().optional(),
    excerpt: z.string().optional(),
    featured: z.boolean().default(false),
    published: z.boolean().default(true),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/pages' }),
  schema: z.object({
    title: z.string(),
    menuYazilar: z.string().optional(),
    menuHakkinda: z.string().optional(),
    portrait: z.string().optional(),
  }),
});

export const collections = { yazilar, pages };
