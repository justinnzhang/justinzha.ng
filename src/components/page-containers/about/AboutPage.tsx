'use client';

import { Card, CardMedia, CardContent, ExternalLinks } from '@/components';
import { Heading } from '@/components/Heading';
import { ABOUT_CONTENT } from './content';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PUBLIC_EMAIL, PUBLIC_RESUME_LINK } from '@/constants';
import { Mail, Download } from 'lucide-react';

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

export const AboutPage = () => {
	return (
		<motion.div
			className='flex flex-col justify-start max-w-[1000px] w-full h-full sm:pt-12 gap-2 sm:gap-4 sm:px-4 mx-auto'
			variants={VARIANTS}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			<div className='px-4 sm:px-0 pt-8 sm:pt-2'>
				<Heading variant='h1'>About me</Heading>
			</div>
			<div className='flex flex-col sm:flex-row gap-4 sm:gap-5'>
				<div className='flex flex-col gap-4 w-full sm:w-1/3 px-4 sm:px-0'>
					<p className='font-medium text-lg'>
						I&apos;m a videographer-turned-software engineer, who loves the
						intersection of technology, business, and design.
					</p>
					<p className='font-medium text-lg'>
						Today, I&apos;m finding purpose in combining my love for all these
						different fields to create meaningful products and experiences.
					</p>
					<p className='font-medium text-lg'>
						Feel free to reach out on my links or shoot me an email below,
						I&apos;d love to get in touch!
					</p>
					<div className='flex flex-col gap-2'>
						<Button variant='outline' className='w-full' asChild>
							<Link href={`mailto:${PUBLIC_EMAIL}`}>
								<Mail className='mr-2 h-4 w-4' />
								Email me
							</Link>
						</Button>
						<Button variant='default' className='w-full' asChild>
							<Link href={PUBLIC_RESUME_LINK}>
								<Download className='mr-2 h-4 w-4' />
								Resume
							</Link>
						</Button>
					</div>
				</div>
				<div className='flex flex-col gap-4 w-full sm:w-2/3'>
					<div className='overflow-y-auto pb-4 sm:pb-4 sm:px-0'>
						<div className='grid sm:grid-cols-12 gap-4 auto-cols-[20rem] sm:auto-cols-auto grid-flow-col sm:grid-flow-row first:ml-4 last:mr-4 sm:first:ml-0 sm:last:mr-0'>
							{ABOUT_CONTENT.map((content) => (
								<Card
									className={content.className}
									key={content.id}
									linkProps={content?.linkProps}
									isExternal={content?.isExternal}
								>
									<CardMedia src={content.media.src} alt={content.media.alt} />
									<CardContent title={content.title} body={content.body} />
								</Card>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-2 sm:gap-4 p-4 sm:p-0'>
				<Heading variant='h2'>Find me on the internet</Heading>
				<ExternalLinks />
			</div>
		</motion.div>
	);
};
