import { Card } from '@/components';

const LINKS_CONTENT = [
	{
		title: 'GITHUB',
		body: '@justinnzhang',
		linkProps: {
			href: 'https://github.com/justinnzhang',
		},
		isExternal: true,
		media: {
			src: '/static/images/github-card-bg.png',
		},
	},
	{
		title: 'LINKEDIN',
		body: 'Justin Zhang',
		linkProps: {
			href: 'https://linkedin.com/in/justinzhang000',
		},
		isExternal: true,
		media: {
			src: '/static/images/linkedin-card-bg.png',
		},
	},
	{
		title: 'THREADS',
		body: '@justinnzhang',
		linkProps: {
			href: 'https://threads.net/justinnzhang',
		},
		isExternal: true,
		media: {
			src: '/static/images/threads-card-bg.png',
		},
	},
	{
		title: 'YOUTUBE',
		body: 'Justin Zhang',
		linkProps: {
			href: 'https://youtube.com/justinzhang',
		},
		isExternal: true,
		media: {
			src: '/static/images/youtube-card-bg.png',
		},
	},
];

export const ExternalLinks = () => {
	return (
		<div className='grid grid-cols-6 sm:grid-cols-12 gap-4 h-fit'>
			{LINKS_CONTENT.map((content) => (
				<Card.Root
					className='col-span-3 sm:col-span-3 h-fit'
					linkProps={content.linkProps}
					isExternal
					key={content.title}
					minHeightClass='min-h-[125px]'
				>
					<Card.Media
						src={content.media.src}
						alt={content.title}
						className='rotate-12 scale-150 group-hover:blur-[2px]'
					/>
					<Card.Content
						title={content.title}
						body={content.body}
						className='text-center'
					/>
				</Card.Root>
			))}
		</div>
	);
};
