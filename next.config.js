const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,

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

  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
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
