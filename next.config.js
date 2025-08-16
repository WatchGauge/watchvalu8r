/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                // generate ./out for static hosting
  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: true }
};
module.exports = nextConfig;
