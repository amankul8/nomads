const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: 'node_modules/leaflet/dist/images',
            to: path.resolve(__dirname, 'public', 'leaflet', 'images')
          },
        ],
      }),
    ) 

    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mcdn.wallpapersafari.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.wallpapersafari.com'
      }
    ],
    
  },
}

module.exports = nextConfig
