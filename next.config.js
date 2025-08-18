/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static export so Amplify can serve /index.html from the 'out' folder
  output: 'export',
};
module.exports = nextConfig;
