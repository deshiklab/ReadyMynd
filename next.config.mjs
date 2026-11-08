/**
 * ReadyMynd — Next.js configuration
 *
 * Two build modes:
 *
 *  • default (`npm run build`)      – full Next.js build for Node hosting
 *                                    (Vercel, a container, `npm start`).
 *  • `GITHUB_PAGES=true`            – static export (`output: 'export'`) for
 *                                    GitHub Pages, which can only serve files.
 *                                    Adds a basePath, disables the image
 *                                    optimiser and drops the security headers
 *                                    that a static host cannot apply.
 *
 * The repo is served from https://deshiklab.github.io/ReadyMynd/, so the
 * exported build is rooted at /ReadyMynd.
 */
const isPages = process.env.GITHUB_PAGES === 'true';
/**
 * Static export for a file-only host that serves from the domain root —
 * cPanel, shared hosting, an S3 bucket. Same output as the Pages build but
 * without a base path, since the site is not in a subdirectory.
 */
const isStaticRoot = process.env.STATIC_ROOT === 'true';
const isExport = isPages || isStaticRoot;
const repoName = 'ReadyMynd';
const basePath = isPages ? `/${repoName}` : '';

/**
 * Absolute origin every canonical, Open Graph and sitemap URL is built from.
 * Next resolves relative metadata paths against `metadataBase`, so this has to
 * match wherever the build is actually served — otherwise the Pages deployment
 * hands out canonicals pointing at the production domain, which does not serve
 * it. Defaults per build mode; set NEXT_PUBLIC_SITE_URL to override either.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (isPages ? `https://deshiklab.github.io/${repoName}` : 'https://readymynd.com');

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The approved v1.8 route map uses trailing slashes (e.g. /about/).
  trailingSlash: true,
  // Allow the Arena / e2b preview host to talk to the dev server.
  allowedDevOrigins: ['*.e2b.app', '*.arena.ai', 'localhost'],
  images: {
    remotePatterns: [],
    // Static hosting has no /_next/image endpoint.
    unoptimized: isExport,
  },
  // Lets <img src> / <a href> (which Next does not prefix) build correct URLs,
  // and lets lib/site.ts resolve the deployed origin.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
    // GitHub Discussions-backed comments. Leave GISCUS_CATEGORY_ID unset and
    // the widget stays hidden; see README "Comments" for the one-time setup.
    NEXT_PUBLIC_GISCUS_REPO: process.env.NEXT_PUBLIC_GISCUS_REPO ?? 'deshiklab/ReadyMynd',
    NEXT_PUBLIC_GISCUS_REPO_ID:
      process.env.NEXT_PUBLIC_GISCUS_REPO_ID ?? 'R_kgDOVjQV7g',
    NEXT_PUBLIC_GISCUS_CATEGORY: process.env.NEXT_PUBLIC_GISCUS_CATEGORY ?? 'Insights',
    NEXT_PUBLIC_GISCUS_CATEGORY_ID: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID ?? '',
  },
  ...(isExport
    ? {
        output: 'export',
        basePath,
        // assetPrefix must stay undefined at the root, or every asset URL
        // picks up a stray leading slash.
        assetPrefix: basePath ? `${basePath}/` : undefined,
      }
    : {
        async headers() {
          return [{ source: '/:path*', headers: securityHeaders }];
        },
      }),
};

export default nextConfig;
