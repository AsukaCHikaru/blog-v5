/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  trailingSlash: true,
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  basePath: '/blog-stage'
};

module.exports = nextConfig;
