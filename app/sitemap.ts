import type { MetadataRoute } from 'next';
import { insights } from '@/lib/content';
import { asset, legalNav, mainNav, site } from '@/lib/site';

// Static export (GitHub Pages) cannot render route handlers dynamically.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = [...mainNav, ...legalNav].map((item) => ({
    url: new URL(asset(item.href), site.url).toString(),
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: item.href === '/' ? 1 : 0.7,
  }));

  // Insight articles are real indexed pages, so they belong in the sitemap
  // even though they are not in the nav. Each carries its own publish date.
  const articles = insights.map((insight) => ({
    url: new URL(asset(`/insights/${insight.slug}/`), site.url).toString(),
    lastModified: new Date(insight.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...pages, ...articles];
}
