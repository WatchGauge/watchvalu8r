/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Do NOT set `output: 'export'` for Amplify SSR hosting.
  // Leave below options as-is unless you know you need them.

  // images: { domains: ['example.com'] }, // <- add remote image domains here
  // trailingSlash: false,
  // poweredByHeader: false,
};

module.exports = nextConfig;
