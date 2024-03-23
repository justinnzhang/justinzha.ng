const DEFAULT_DESCRIPTION =
	'My space on the internet where I document my journey finding purpose through crafting delightful experience via software!';
const DEFAULT_OG_IMAGE = `/static/og-image.jpeg`;

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
	authors: [{ name: 'Justin Zhang', url: 'https://justinzha.ng' }],
	creator: 'Justin Zhang',
	publisher: 'Justin Zhang',
	description: DEFAULT_DESCRIPTION,
	openGraph: {
		title: `Justin Zhang's Space`,
		description: DEFAULT_DESCRIPTION,
		images: DEFAULT_OG_IMAGE,
		url: 'https://justinzha.ng',
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
			url: `https://justinzha.ng/${DEFAULT_OG_IMAGE}`,
			alt: 'Welcome to my corner of the internet',
		}, // Must be an absolute URL
	},
	category: 'Personal Site',
};
