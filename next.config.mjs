import path from 'node:path';
import { fileURLToPath } from 'node:url';

import createMDX from '@next/mdx';

const withMDX = createMDX();
const projectDirectory = path.dirname(fileURLToPath(import.meta.url));

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
		root: path.join(projectDirectory, '..'),
	},
	allowedDevOrigins: ['192.168.2.1'],
};

export default withMDX(nextConfig);
