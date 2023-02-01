/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  reactStrictMode: false,
  swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    nextScriptWorkers: true,
  },
};

module.exports = nextConfig;
