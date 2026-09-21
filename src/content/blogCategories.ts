export const blogCategories = [
  {
    slug: 'real-world-case-analysis',
    en: 'Real-World Case Analysis',
    es: 'Análisis de casos reales'
  },
  {
    slug: 'applied-learning',
    en: 'Applied Learning',
    es: 'Aprendizajes aplicados'
  },
  {
    slug: 'professional-insights',
    en: 'Professional Insights',
    es: 'Opinión profesional'
  }
] as const;

export type BlogCategorySlug = (typeof blogCategories)[number]['slug'];

export function blogCategoryLabel(slug: BlogCategorySlug, lang: 'en' | 'es') {
  return blogCategories.find((c) => c.slug === slug)?.[lang] ?? slug;
}
