'use client';

import { Heading } from '@/components/Heading';
import { ExternalLinks } from '@/components/Nav';
import { workContent } from './constants/work.content';

import { motion } from 'framer-motion';
import { GenerateCard } from '@/components/Card';

const VARIANTS = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.05,
			beforeChildren: true,
		},
	},
	exit: {
		opacity: 0,
	},
};

const MOBILE_CHILD_SPACING =
	'[&>*:first-child]:ml-4 [&>*:last-child]:mr-4 sm:[&>*:first-child]:ml-0 sm:[&>*:last-child]:mr-0';

const gridClassName = `grid sm:grid-cols-12 gap-4 auto-cols-[20rem] sm:auto-cols-auto grid-flow-col sm:grid-flow-row first:bg-red ${MOBILE_CHILD_SPACING}`;

export default function Page() {
	return (
		<motion.div
			className='flex flex-col justify-start max-w-5xl w-full min-h-screen h-full pt-8 sm:pt-12 gap-4 sm:gap-8'
			variants={VARIANTS}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			<div className='flex flex-col gap-4'>
				<div className='px-4 flex flex-col gap-4'>
					<Heading size='h1'>👋 Hey! I&apos;m Justin Zhang</Heading>
					<p className='text-lg sm:text-2xl font-medium sm:w-1/2'>
						I&apos;m a software engineer with a background in business & design.
						Here's a couple things that I'm proud of!
					</p>
				</div>
				<div className='overflow-y-auto pb-4 sm:px-4 w-full'>
					<div className={`${gridClassName} ${MOBILE_CHILD_SPACING}`}>
						{workContent.map((card) => (
							<GenerateCard key={card.id} {...card} />
						))}
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-2 sm:gap-4 px-4 sm:px-4'>
				<Heading size='h2'>Find me on the internet</Heading>
				<ExternalLinks />
			</div>
		</motion.div>
	);
}
