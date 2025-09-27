const withMDX = require('@next/mdx')();
const path = require('path');

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
	turbopack: {
		root: path.join(__dirname, '..'),
	},
};

module.exports = withMDX(nextConfig);
