/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  // optimizeFonts: true,
  // images: {
  //   domains: ['http://127.0.0.1:8000/media/image/tour_pictures/'],
  //   formats: ['image/webp', 'image/avif'],
  //   remotePatterns: [
  //     {
  //       protocol: 'http',
  //       hostname: '127.0.0.1',
  //       port:'',
  //       pathname: 'http://127.0.0.1:8000/media/image/tour_pictures/**'
  //     }
  //   ],
  //   minimumCacheTTL: 1500000,
  // },
};

const withVideos = require('next-videos')
module.exports = withVideos()

module.exports = nextConfig
