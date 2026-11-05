import type { MetadataRoute } from 'next';
import { legalNav, mainNav, site } from '@/lib/site';

// Static export (GitHub Pages) cannot render route handlers dynamically.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = [...mainNav, ...legalNav].map((item) => ({
    url: new URL(item.href, site.url).toString(),
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: item.href === '/' ? 1 : 0.7,
  }));

  return pages;
}
