const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'static.justinzha.ng',
			},
		],
	},
};

module.exports = withMDX(nextConfig);
