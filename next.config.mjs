/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/derick-portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/derick-portfolio' : ''
};

export default nextConfig;
