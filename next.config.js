/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['ipfs.infura.io'],
	},
	env: {
		PASSWORD_PROTECT: true,
	},
};

module.exports = nextConfig;
