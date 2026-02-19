/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for FTP deployment
  // basePath: '/latest', // Uncomment this ONLY if deploying to /latest/ subdirectory
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  // Disable features that require server
  trailingSlash: true, // Better for static hosting
}

module.exports = nextConfig

