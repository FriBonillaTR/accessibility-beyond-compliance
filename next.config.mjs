/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/accessibility-presentation' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/accessibility-presentation/' : '',
  
  experimental: {
    optimizePackageImports: ['reveal.js']
  }
}

export default nextConfig
