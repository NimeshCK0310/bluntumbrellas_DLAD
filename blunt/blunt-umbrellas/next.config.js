/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['bluntumbrellas.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'bluntumbrellas.com',
        port: '',
        pathname: '/cdn/shop/files/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

module.exports = nextConfig