import { Card, CardMedia, CardContent } from '@/components';
import { cn } from '@/lib/utils';
import { getAssetUrl } from '@/utils';

const LINKS_CONTENT = [
	{
		title: 'GITHUB',
		body: '@justinnzhang',
		linkProps: {
			href: 'https://github.com/justinnzhang',
		},
		isExternal: true,
		media: {
			src: getAssetUrl('external-links/github-card-bg.png'),
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
			src: getAssetUrl('external-links/linkedin-card-bg.png'),
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
			src: getAssetUrl('external-links/threads-card-bg.png'),
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
			src: getAssetUrl('external-links/youtube-card-bg.png'),
		},
	},
];

export const ExternalLinks = () => {
	return (
		<div className='grid grid-cols-6 sm:grid-cols-12 gap-4'>
			{LINKS_CONTENT.map((content) => (
				<Card
					className='col-span-3 sm:col-span-3 h-fit'
					linkProps={content.linkProps}
					isExternal
					key={content.title}
					minHeightClass='min-h-[125px]'
				>
					<CardMedia
						src={content.media.src}
						alt={content.title}
						className={cn('rotate-12 scale-150 group-hover:blur-[1px]', {
							['bg-slate-500']: content.title === 'GITHUB',
						})}
					/>
					<CardContent
						title={content.title}
						body={content.body}
						className='text-center'
					/>
				</Card>
			))}
		</div>
	);
};
