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
  },
  
  webpack: (config, { isServer }) => {
    // Handle SCSS imports for Reveal.js
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    });
    
    // Handle CSS imports from node_modules
    config.module.rules.push({
      test: /\.css$/,
      include: /node_modules/,
      use: [
        'style-loader',
        'css-loader'
      ]
    });
    
    return config;
  }
}

export default nextConfig
