'use client';

import { Card, ExternalLinks } from '@/components';
import { Heading } from '@/components/Heading';
import { ABOUT_CONTENT } from './content';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PUBLIC_EMAIL, baseMetadata } from '@/constants';
import { Mail } from 'lucide-react';

const VARIANTS = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
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
			className='flex flex-col justify-start max-w-[1000px] w-full h-full sm:pt-12 gap-2 sm:gap-4'
			variants={VARIANTS}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			<div className='px-4 sm:px-0 pt-8 sm:pt-2'>
				<Heading size={'h1'}>About me</Heading>
			</div>
			<div className='flex flex-col sm:flex-row gap-4 sm:gap-5'>
				<div className='flex flex-col gap-4 w-full sm:w-1/3 px-4 sm:px-0'>
					<p className='font-medium text-lg'>
						I&apos;m a videographer-turned-software engineer, who loves the
						intersection of technology, business, and design.
					</p>
					<p className='font-medium text-lg'>
						Today, I'm finding purpose in combining my love for all these
						different fields to create meaningful products and experiences.
					</p>
					<p className='font-medium text-lg'>
						Feel free to reach out on my links or shoot me an email below, I'd
						love to get in touch!
					</p>
					<Button variant='outline' className='w-full' asChild>
						<Link href={`mailto:${PUBLIC_EMAIL}`}>
							<Mail className='mr-2 h-4 w-4' />
							Email me
						</Link>
					</Button>
				</div>
				<div className='flex flex-col gap-4 w-full sm:w-2/3'>
					<div className='overflow-y-auto pb-4 sm:pb-4 sm:px-0'>
						<div className='grid sm:grid-cols-12 gap-4 auto-cols-[20rem] sm:auto-cols-auto grid-flow-col sm:grid-flow-row first:ml-4 last:mr-4 sm:first:ml-0 sm:last:mr-0'>
							{ABOUT_CONTENT.map((content) => (
								<Card.Root
									className={content.className}
									key={content.id}
									linkProps={content?.linkProps}
									isExternal={content?.isExternal}
								>
									<Card.Media src={content.media.src} alt={content.media.alt} />
									<Card.Content title={content.title} body={content.body} />
								</Card.Root>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-2 sm:gap-4 p-4 sm:p-0'>
				<Heading size='h2'>Find me on the internet</Heading>
				<ExternalLinks />
			</div>
		</motion.div>
	);
};
