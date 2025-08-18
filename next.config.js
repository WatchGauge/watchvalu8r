/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export' // <-- this makes `next build` write to /out
};
module.exports = nextConfig;
