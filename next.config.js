/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',              // generate static HTML to ./out
  eslint: { ignoreDuringBuilds: true } // keep the build simple
};
module.exports = nextConfig;

