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
		STAGING_AWS_ACCESS_KEY_ID: process.env.STAGING_AWS_ACCESS_KEY_ID,
		STAGING_AWS_SECRET_ACCESS_KEY: process.env.STAGING_AWS_SECRET_ACCESS_KEY,
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
