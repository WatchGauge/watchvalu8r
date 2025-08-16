/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                 // build static site to ./out
  typescript: { ignoreBuildErrors: true }, // don't fail on TS
  eslint: { ignoreDuringBuilds: true }     // don't fail on lint
};
module.exports = nextConfig;
