import { getAssetUrl } from '@/utils';

export const ABOUT_CONTENT = [
	{
		id: 'home-page-card-1',
		title: '📍 LOCATION',
		body: 'Currently in Austin, Texas 🇺🇸 - originally from Ottawa, Canada 🇨🇦',
		media: {
			src: getAssetUrl('austin-map-3d.png'),
			alt: 'Justin Zhang',
		},
		className: 'col-span-1 sm:col-span-6',
	},
	{
		id: 'home-page-card-2',
		title: '💼 WORK',
		body: 'Software Engineer at Realtor.com, working on Media (ads) & Mortgage (finance)',
		media: {
			src: getAssetUrl('rdc-image.png'),
			alt: 'Realtor.com',
		},
		className: 'col-span-1 sm:col-span-6',
	},
	{
		id: 'home-page-card-3',
		title: '🎓 EDUCATION',
		body: 'Computer Science & Business double degree graduate from Western University 💜',
		media: {
			src: getAssetUrl('western-university.jpeg'),
			alt: 'Western University',
		},
		className: 'col-span-1 sm:col-span-12',
		linkProps: {
			href: 'https://uwo.ca/',
		},
		isExternal: true,
	},
];
