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
	allowedDevOrigins: ['192.168.2.1'],
};

module.exports = withMDX(nextConfig);
