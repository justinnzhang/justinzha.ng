import { Heading } from '@/components/Heading';

import { PublicToolsMeta } from './constants';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ComputerIcon, ExternalLink } from 'lucide-react';

export const BlogPage = () => {
	return (
		<main className='flex flex-col flex-wrap gap-8 max-w-5xl w-full p-4 pt-12'>
			<Heading>Blog</Heading>
			<div className='grid grid-flow-row-dense grid-cols-12 gap-8'>
				<div className='flex flex-col gap-4 col-span-12 sm:col-span-6'>
					<Image
						src={PublicToolsMeta.media!.src}
						width={500}
						height={250}
						alt={PublicToolsMeta.media!.alt!}
						className='rounded-lg'
					/>
					<div className='flex flex-col gap-2'>
						<Heading variant='h3'>Public Tools</Heading>
						<p>
							A project to build simple and delightful tools ranging in finance,
							technology, and more. Inspired by things I&apos;m constantly
							looking up - I hope that this site helps you as much as it helps
							me!
						</p>
					</div>
					<Link href={PublicToolsMeta.linkProps.href} passHref>
						<Button className='w-full sm:w-fit'>
							Visit the site <ExternalLink className='ml-2 w-4 h-4' />
						</Button>
					</Link>
				</div>
				<div className='flex flex-col gap-4 col-span-12 sm:col-span-6 p-8 bg-background h-fit rounded-lg'>
					<div className='flex flex-col gap-2'>
						<Heading variant='h3'>
							<ComputerIcon className='inline w-4 h-4 mr-2 align-baseline' /> My
							Toolbox
						</Heading>
						<p>All my favorite gadgets and tools that I use on a daily basis</p>
					</div>
					<Button className='w-full sm:w-fit' disabled>
						Coming soon
					</Button>
				</div>
			</div>
		</main>
	);
};
