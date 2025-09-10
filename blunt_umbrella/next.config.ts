// next.config.js or next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bluntumbrellas.com',
        port: '',
        pathname: '/cdn/shop/files/**',
      },
    ],
  },
};

module.exports = nextConfig;
