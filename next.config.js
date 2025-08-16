/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // generate static HTML to ./out
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true }
};
module.exports = nextConfig;
