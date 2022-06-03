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
		NEXT_PUBLIC_ALCHEMY_KEY_POLYGON_MUMBAI:
			process.env.NEXT_PUBLIC_ALCHEMY_KEY_POLYGON_MUMBAI,
		NEXT_PUBLIC_TOKEY_MKT_ADDRESS_MUMBAI:
			process.env.NEXT_PUBLIC_TOKEY_MKT_ADDRESS_MUMBAI,
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
