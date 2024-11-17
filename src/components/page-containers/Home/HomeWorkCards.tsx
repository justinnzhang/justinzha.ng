'use client';

import { m, LazyMotion, domAnimation } from 'motion/react';

import { workContent } from './content';
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

export const HomeWorkCards = () => {
	return (
		<LazyMotion features={domAnimation}>
			<m.div
				variants={VARIANTS}
				initial='initial'
				animate='animate'
				exit='exit'
				className='overflow-y-auto pb-4 sm:px-4 w-full'
			>
				<div className={`${gridClassName} ${MOBILE_CHILD_SPACING}`}>
					{workContent.map((card) => (
						<GenerateCard key={card.id} {...card} />
					))}
				</div>
			</m.div>
		</LazyMotion>
	);
};
