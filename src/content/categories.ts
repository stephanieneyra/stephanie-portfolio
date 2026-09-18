export const categories = [
  {
    slug: 'marketing-analytics',
    en: 'Marketing Analytics',
    es: 'Marketing Analytics'
  },
  {
    slug: 'sales-profitability',
    en: 'Sales & Profitability',
    es: 'Ventas y Rentabilidad'
  },
  {
    slug: 'forecasting-inventory',
    en: 'Forecasting & Inventory',
    es: 'Forecasting e Inventarios'
  },
  {
    slug: 'bi-dashboards',
    en: 'Business Intelligence & Dashboards',
    es: 'Business Intelligence & Dashboards'
  }
] as const;

export type CategorySlug = (typeof categories)[number]['slug'];

export function categoryLabel(slug: CategorySlug, lang: 'en' | 'es') {
  return categories.find((c) => c.slug === slug)?.[lang] ?? slug;
}
