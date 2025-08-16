/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: { ignoreBuildErrors: true },  // belt-and-suspenders
  eslint: { ignoreDuringBuilds: true }
};
module.exports = nextConfig;
