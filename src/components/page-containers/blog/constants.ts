import { generateUtm } from '@/lib';

export const PublicToolsMeta = {
	linkProps: { href: generateUtm('https://tools.justinzha.ng') },
	content: {
		title: 'PUBLIC TOOLS',
		body: `Simple and delightful tools to use. These are things that I end up googling a lot.`,
		ctaProps: {
			text: 'Visit the site',
		},
	},
	media: {
		src: '/static/images/blog/public-tools-og.jpeg',
		alt: 'Public Tools',
		priority: 'high',
	},
};
