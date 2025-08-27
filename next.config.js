/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is enabled by the presence of /app; this flag is legacy.
  // Remove it unless you’re pinned to an old Next.
  // experimental: { appDir: true },

  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },

  // Add no-cache headers for favicons
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }],
      },
      {
        source: '/apple-touch-icon.png',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }],
      },
    ];
  },

  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      bufferutil: 'commonjs bufferutil',
    });
    return config;
  },
};

module.exports = nextConfig;
