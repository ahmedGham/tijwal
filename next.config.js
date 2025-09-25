/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  typescript: {
    // ⚠️ This will let builds succeed even with type errors
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
