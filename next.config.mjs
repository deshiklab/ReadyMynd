/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The approved v1.8 route map uses trailing slashes (e.g. /about/).
  trailingSlash: true,
  // Allow the Arena / e2b preview host to talk to the dev server.
  allowedDevOrigins: ['*.e2b.app', '*.arena.ai', 'localhost'],
  images: {
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
