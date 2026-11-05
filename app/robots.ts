import type { MetadataRoute } from 'next';
import { asset, site } from '@/lib/site';

// Static export (GitHub Pages) cannot render route handlers dynamically.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: new URL(asset('/sitemap.xml'), site.url).toString(),
    host: site.url,
  };
}
