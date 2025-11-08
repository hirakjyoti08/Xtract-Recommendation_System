/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable static generation for dynamic routes
  experimental: {
    serverComponentsExternalPackages: [],
  },
}

export default nextConfig