/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export so Amplify hosts /out/index.html and avoids 404s
  output: 'export'
};
module.exports = nextConfig;

