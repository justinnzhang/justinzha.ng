'use client';

import { motion } from 'framer-motion';
import { MotionImage, MotionLink } from '../utilities';
import { ExternalLink, Link, MoveRight } from 'lucide-react';

import { BaseCardProps, CardMediaProps, CardContentProps } from './types';
import { cn } from '@/lib/utils';

const VARIANTS = {
	initial: {
		opacity: 0,
		y: 10,
		filter: 'blur(3px)',
	},
	animate: {
		opacity: 1,
		y: 0,
		filter: 'blur(0px)',
		transition: {
			duration: 0.2,
		},
	},
	hover: {
		scale: 0.99,
		transition: { duration: 0.1 },
	},
};

const LINK_VARIANTS = {
	whileHover: {
		scale: 0.98,
		transition: { duration: 0.1 },
	},
};

export const Card = ({
	children,
	className,
	linkProps,
	isExternal = false,
	minHeightClass = 'min-h-[200px] sm:min-h-[220px]',
}: BaseCardProps) => {
	const computedClassName = cn(
		`flex flex-col border-[1px] border-border rounded-xl bg-slate-100 dark:bg-slate-900 relative h-full group overflow-hidden`,
		className,
		minHeightClass
	);

	if (!linkProps) {
		return (
			<motion.div className={computedClassName} variants={VARIANTS}>
				{children}
			</motion.div>
		);
	}

	const { href, alt } = linkProps;
	const iconClassName = `text-foreground absolute top-4 left-4 w-4 h-4 z-50`;
	const bgGradientClass = `after:content-[''] after:bg-gradient-to-r after:rotate-45 after:from-background after:to-transparent after:position-absolute after:top-0 after:left-0 after:w-20 after:h-20 after:z-40 after:scale-150 after:-translate-x-1/2 after:-translate-y-1/2`;

	if (isExternal) {
		return (
			<motion.a
				href={href}
				target='_blank'
				rel='noopener noreferrer'
				title={alt}
				className={cn(
					`group cursor-pointer`,
					computedClassName,
					bgGradientClass
				)}
				variants={VARIANTS}
				{...LINK_VARIANTS}
			>
				<ExternalLink className={iconClassName} />
				{children}
			</motion.a>
		);
	}

	return (
		<MotionLink
			href={href}
			title={alt}
			className={cn(`group cursor-pointer`, computedClassName)}
			variants={VARIANTS}
			{...LINK_VARIANTS}
		>
			<Link className={iconClassName} />
			{children}
		</MotionLink>
	);
};

export const CardMedia = ({
	src,
	alt,
	className,
	priority = 'auto',
	sizes = '(max-width: 768px) 70vw, (max-width: 1200px) 20vw',
}: CardMediaProps) => {
	return (
		<div className='absolute w-full h-full overflow-clip rounded-xl'>
			<MotionImage
				src={src}
				alt={alt}
				fill={true}
				className={cn(`z-0 object-cover`, className)}
				fetchPriority={priority}
				sizes={sizes}
			/>
		</div>
	);
};

export const CardContent = ({
	title,
	body,
	className,
	aboveTextMarkup = null,
	belowTextMarkup = null,
	ctaProps,
}: CardContentProps) => {
	const {
		text,
		iconRight = (
			<MoveRight
				className='group-hover:translate-x-1 transition-all'
				size={16}
			/>
		),
	} = ctaProps || {};

	const ctaMarkup = ctaProps && (
		<div className='flex flex-row gap-1 items-center justify-center text-slate-800 dark:text-slate-300'>
			<p className='text-xs font-bold uppercase text-slate-800 dark:text-slate-300'>
				{text}
			</p>
			{iconRight}
		</div>
	);

	return (
		<>
			<div className='absolute rounded-xl z-10 bottom-0 h-4/5 w-full bg-gradient-to-t from-slate-200 dark:from-slate-800 from-0% via-slate-100 dark:via-slate-800/90 via-30% to-transparent to-100%' />
			<div
				className={cn(
					`flex flex-col items-start p-4 gap-1 absolute bottom-0 left-0 z-20`,
					className
				)}
			>
				{aboveTextMarkup}
				<motion.p
					className='font-bold text-xs sm:text-sm uppercase text-foreground'
					variants={VARIANTS}
				>
					{title}
				</motion.p>
				<motion.p
					className='font-medium text-md sm:text-lg text-foreground line-clamp-3'
					variants={VARIANTS}
				>
					{body}
				</motion.p>
				{ctaMarkup}
				{belowTextMarkup}
			</div>
		</>
	);
};
