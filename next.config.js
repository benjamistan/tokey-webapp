/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ipfs.infura.io'],
    loader: 'imgix',
    path: 'https://tokey.imgix.net/',
  },
  env: {
    PASSWORD_PROTECT: true,
    AWS_REGION: 'eu-west-2',
    ENVIRONMENT: process.env.ENVIRONMENT || 'production',
    ALCHEMY_KEY_POLYGON_MUMBAI: process.env.ALCHEMY_KEY_POLYGON_MUMBAI,
    TOKEY_MKT_ADDRESS_MUMBAI: process.env.TOKEY_MKT_ADDRESS_MUMBAI,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig;
