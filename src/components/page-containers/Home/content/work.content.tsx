import { GenerateCardProps } from '@/components/Card/GenerateCard';

import { generateUtm } from '@/lib';

const minHeightClass = 'min-h-[250px] sm:min-h-[250px]';

export const workContent: GenerateCardProps[] = [
	{
		id: '1',
		root: {
			className: 'col-span-1 sm:col-span-8',
			minHeightClass,
			linkProps: { href: generateUtm('https://realtor.com/veterans') },
			isExternal: true,
		},
		content: {
			title: 'REALTOR.COM - SOFTWARE ENGINEER',
			body: `Led the engineering of a nation-wide Veteran's day campaign interactive landing page, bringing over 500K impressions`,
			className: 'w-full sm:w-2/3',
			ctaProps: {
				text: 'Visit the site',
			},
		},
		children: (
			<>
				<div
					className={`absolute bottom-0 right-0 -translate-x-8 -translate-y-2/3 md:-translate-y-1/3 w-2/3 h-1/2 md:w-1/3 md:h-3/5 rotate-[1deg] bg-slate-100 z-[5] md:group-hover:-translate-x-4 transition-all duration-100 rounded-md transform-gpu bg-[url('/static/images/work-cards/hashflag-animated.webp')] bg-no-repeat bg-contain bg-center bg-fixed border-2 border-slate-200`}
				/>
				<div
					className={`absolute bottom-0 right-0 invisible sm:visible -translate-x-16 md:-translate-x-16 -translate-y-2/3 md:-translate-y-1/3 w-2/3 h-1/2 md:w-1/3 md:h-3/5 rotate-[3deg] bg-slate-200 z-[4] md:group-hover:-translate-x-32 group-hover:-rotate-1 group-hover:scale-[1.02] transition-all duration-100 rounded-md transform-gpu bg-[url('/static/images/work-cards/vu-site-2-sm.png')] bg-no-repeat bg-cover bg-center bg-fixed border-2 border-slate-200`}
				/>
				<div
					className={`absolute bottom-0 right-0 invisible sm:visible md:-translate-x-32 -translate-y-2/3 md:-translate-y-1/3 w-2/3 h-1/2 md:w-1/3 md:h-3/5 rotate-[-2deg] bg-slate-300 z-[3] md:group-hover:-translate-x-60 group-hover:-rotate-2 group-hover:scale-[1.04] transition-all duration-100 rounded-md transform-gpu bg-[url('/static/images/work-cards/vu-site-3-sm.png')] bg-no-repeat bg-cover bg-center bg-fixed border-2 border-slate-200`}
				/>
			</>
		),
	},
	{
		id: '2',
		root: { className: 'col-span-1 sm:col-span-4', minHeightClass },
		content: {
			title: 'META - PRODUCT INTERN',
			body: `Drove the launch of FB Marketplace summer billboard seller campaigns`,
		},
		children: (
			<>
				<div
					className={`absolute bottom-1 right-1/2 translate-x-1/2 w-1/3 h-4/5 bg-slate-100 z-[5] group-hover:scale-[1.05] group-hover:-translate-y-4 group-hover:-rotate- transition-all duration-100 rounded-md transform-gpu bg-[url('/static/images/work-cards/fb-marketplace.png')] bg-no-repeat bg-contain bg-fixed border-[1px] border-slate-200`}
				/>
				<div
					className={`absolute bottom-1/2 right-[28%] md:right-1/4 translate-x-1/2 w-12 m:w-16 h-12 md:h-16 rotate-2 bg-slate-100 z-[4] group-hover:scale-[1.1] group-hover:-translate-y-4 group-hover:rotate-6 group-hover:translate-x-6 md:group-hover:translate-x-12 transition-all duration-100 rounded-md transform-gpu bg-[url('/static/images/work-cards/meta.png')] bg-no-repeat bg-contain bg-center bg-fixed border-[1px] border-slate-200`}
				/>
			</>
		),
	},
	{
		id: '3',
		root: {
			className: 'col-span-1 row-span-1 sm:col-span-5 sm:row-span-2',
			minHeightClass,
		},
		content: {
			title: 'CASECOM - CO-FOUNDER',
			body: 'Created the first digital platform for case competitions in Canada, landing Shopify as a client & achieving positive cashflow',
		},
		children: (
			<div
				className={`absolute top-0 right-0 w-full h-full z-[5] transition-all duration-100 rounded-md transform-gpu group-hover:scale-[1.02] bg-[url('/static/images/work-cards/casecom-hero-top.png')] bg-no-repeat bg-contain bg-fixed`}
			/>
		),
	},
	{
		id: '4',
		root: {
			className: 'col-span-1 sm:col-span-7',
			minHeightClass,
			linkProps: {
				href: 'https://www.youtube.com/watch?v=FHqo3aYjCw8&t=1s',
			},
			isExternal: true,
		},
		content: {
			title: 'SHOPIFY - SOFTWARE ENGINEER INTERN',
			body: 'Launched the official GitHub Integration for Shopify stores, building the syncing UI & logging capabilities',
			className: 'w-full sm:w-4/5',
			ctaProps: {
				text: 'Watch the announcement video',
			},
		},
		media: {
			src: '/static/images/work-cards/shopify-gh.png',
			alt: 'Shopify GitHub Integration',
			priority: 'high',
		},
	},
	{
		id: '5',
		root: {
			className: 'col-span-1 sm:col-span-3',
			minHeightClass,
			linkProps: { href: generateUtm('https://hackwestern.com') },
			isExternal: true,
		},
		content: {
			title: 'HACK WESTERN - CO-CHAIR',
			body: '3 years of leading one of the largest Canadian student hackathons, reaching 1,200+ students worldwide!',
			ctaProps: {
				text: 'Explore',
			},
		},
		media: {
			src: '/static/images/work-cards/hw9.webp',
			alt: 'Hack Western',
		},
	},
	{
		id: '6',
		root: {
			className: 'col-span-1 sm:col-span-4',
			minHeightClass,
			linkProps: { href: generateUtm('https://wrapped.justinzha.ng') },
			isExternal: true,
		},
		content: {
			title: 'Justin Zhang Wrapped',
			body: 'Interactive resume built for recruiting during 2023',
			ctaProps: {
				text: 'Visit',
			},
		},
		children: (
			<>
				<div
					className={`absolute top-[30px] left-1/2 w-36 h-72 z-[5] -translate-x-1/2 group-hover:top-[10px] transition-all duration-100 rounded-md transform-gpu bg-[url('/static/images/work-cards/wrapped-1.png')] bg-no-repeat bg-contain bg-fixed`}
				/>
				<div
					className={`absolute top-[20px] -right-[50px] w-36 h-72 z-[4] transition-all group-hover:top-[35px] duration-100 rounded-md transform-gpu bg-[url('/static/images/work-cards/wrapped-2.png')] bg-no-repeat bg-contain bg-fixed`}
				/>
				<div
					className={`absolute top-[20px] -left-[50px] w-36 h-72 z-[3] transition-all group-hover:top-[35px] duration-100 rounded-md transform-gpu bg-[url('/static/images/work-cards/wrapped-3.png')] bg-no-repeat bg-contain bg-fixed`}
				/>
			</>
		),
	},
];
