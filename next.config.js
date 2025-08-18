/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',           // writes static site to /out on build
  images: { unoptimized: true }, // <-- required for static hosting (fixes logo)
  trailingSlash: true
};
module.exports = nextConfig;

