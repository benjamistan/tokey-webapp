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
		MYVAR: process.env.MY_VAR,
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
