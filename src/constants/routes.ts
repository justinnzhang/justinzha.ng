import type { MetadataRoute } from 'next';

interface RouteMetadata {
	[key: string]: {
		slug: string;
		title: string;
		priority: number;
		changeFrequency?:
			| 'always'
			| 'hourly'
			| 'daily'
			| 'weekly'
			| 'monthly'
			| 'yearly'
			| 'never';
	};
}

export const ROUTES: RouteMetadata = {
	HOME: {
		slug: '/',
		title: 'Home',
		priority: 1,
		changeFrequency: 'monthly',
	},
	ABOUT: {
		slug: '/about',
		title: 'About',
		priority: 0.8,
		changeFrequency: 'monthly',
	},
	BLOG: {
		slug: '/blog',
		title: 'Blog',
		priority: 0.5,
		changeFrequency: 'monthly',
	},
	BLOG_MOVING: {
		slug: '/blog/moving',
		title: 'Moving to the USA',
		priority: 0.5,
		changeFrequency: 'monthly',
	},
};
