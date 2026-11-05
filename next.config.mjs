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
const repoName = 'ReadyMynd';
const basePath = isPages ? `/${repoName}` : '';

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
    unoptimized: isPages,
  },
  ...(isPages
    ? {
        output: 'export',
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {
        async headers() {
          return [{ source: '/:path*', headers: securityHeaders }];
        },
      }),
};

export default nextConfig;
