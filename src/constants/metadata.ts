import type { Metadata } from 'next';

export const SITE_URL = 'https://justinzha.ng';

const DEFAULT_DESCRIPTION =
	'My space on the internet where I document my journey finding purpose through crafting delightful experience via software!';
const DEFAULT_OG_IMAGE = '/static/og-image.jpg';

export const baseMetadata = {
	title: {
		template: `%s @ Justin Zhang's Space`,
		default: `Justin Zhang's Space`,
	},
	keywords: [
		'Justin Zhang',
		'Portfolio',
		'Personal Site',
		'Software Engineer',
		'Software',
		'Product',
		'Design',
	],
	authors: [{ name: 'Justin Zhang', url: SITE_URL }],
	creator: 'Justin Zhang',
	publisher: 'Justin Zhang',
	description: DEFAULT_DESCRIPTION,
	openGraph: {
		title: `Justin Zhang's Space`,
		description: DEFAULT_DESCRIPTION,
		images: DEFAULT_OG_IMAGE,
		url: SITE_URL,
		siteName: `Justin Zhang's Space`,
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: `Justin Zhang's Space`,
		description: DEFAULT_DESCRIPTION,
		creator: '@justinnzhang',
		images: {
			url: new URL(DEFAULT_OG_IMAGE, SITE_URL).toString(),
			alt: 'Welcome to my corner of the internet',
		},
	},
	category: 'Personal Site',
	metadataBase: new URL(SITE_URL),
	alternates: {
		canonical: '/',
	},
} satisfies Metadata;

export function createPageMetadata(title: string, path: string): Metadata {
	return {
		title,
		alternates: {
			canonical: path,
		},
		openGraph: {
			...baseMetadata.openGraph,
			title,
			url: path,
		},
		twitter: {
			...baseMetadata.twitter,
			title,
		},
	};
}
