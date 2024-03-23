'use client';

import { motion } from 'framer-motion';
import { MotionImage, MotionLink } from '../utilities';
import { ExternalLink, Link, MoveRight } from 'lucide-react';

import { BaseCardProps, CardMediaProps, CardContentProps } from './types';

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
		scale: 0.98,
		transition: { duration: 0.1 },
	},
};

const LINK_VARIANTS = {
	whileHover: {
		scale: 0.98,
		transition: { duration: 0.1 },
	},
};

export const BaseCard = ({
	children,
	className,
	linkProps,
	isExternal = false,
	minHeightClass = 'min-h-[200px] sm:min-h-[220px]',
}: BaseCardProps) => {
	const computedClassName = `flex flex-col border-[1px] border-slate-700 rounded-xl bg-slate-900 relative h-full ${minHeightClass} ${className} group overflow-hidden`;

	if (!linkProps) {
		return (
			<motion.div className={computedClassName} variants={VARIANTS}>
				{children}
			</motion.div>
		);
	}

	const { href, alt } = linkProps;
	const iconClassName = `text-slate-100 absolute top-4 left-4 w-4 h-4 z-50`;

	if (isExternal) {
		return (
			<motion.a
				href={href}
				target='_blank'
				rel='noopener noreferrer'
				title={alt}
				className={`group cursor-pointer ${computedClassName}`}
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
			className={`group cursor-pointer ${computedClassName}`}
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
				className={`z-0 object-cover ${className}`}
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
		<div className='flex flex-row gap-1 items-center justify-center text-slate-300'>
			<p className='text-xs font-bold uppercase text-slate-300'>{text}</p>
			{iconRight}
		</div>
	);

	return (
		<>
			<div className='absolute rounded-xl z-10 h-full w-full bg-gradient-to-t from-slate-800 from-0% via-slate-800/90 via-40% to-transparent to-100%' />
			<div
				className={`flex flex-col items-start p-4 gap-1 absolute bottom-0 left-0 z-20 ${className}`}
			>
				{aboveTextMarkup}
				<p className='font-bold text-xs sm:text-sm uppercase text-slate-300'>
					{title}
				</p>
				<p className='font-medium text-md sm:text-lg text-slate-100 line-clamp-3'>
					{body}
				</p>
				{ctaMarkup}
				{belowTextMarkup}
			</div>
		</>
	);
};

export const Card = {
	Root: BaseCard,
	Content: CardContent,
	Media: CardMedia,
};
