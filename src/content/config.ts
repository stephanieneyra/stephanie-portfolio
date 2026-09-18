import { defineCollection, z } from 'astro:content';

// Real category taxonomy — must match src/content/categories.ts exactly.
const categoryEnum = z.enum([
  'marketing-analytics',
  'sales-profitability',
  'forecasting-inventory',
  'bi-dashboards'
]);

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.enum(['en', 'es']),
    // Shared across the en/es pair of the same project so we can link between
    // language versions and match cards 1:1.
    slug: z.string(),
    category: categoryEnum,
    title: z.string(),
    summary: z.string(),
    problem: z.string(),
    dataSource: z.string(),
    analysis: z.string(),
    solution: z.string(),
    results: z.string(),
    tools: z.array(z.string()),
    image: z.string().optional(),
    order: z.number().default(0),
    // Keeps draft/example entries out of getStaticPaths and the listing page
    // until Stephanie's real content is ready — see _example.md.
    published: z.boolean().default(false)
  })
});

export const collections = { projects };
