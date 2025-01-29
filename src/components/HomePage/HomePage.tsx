import { PUBLIC_EMAIL } from '@/constants';
import { Mail, Download } from 'lucide-react';
import { ExternalLinks } from '../ExternalLinks';
import { Heading } from '../Heading';
import { LocationDot } from '../LocationDot';
import { HomeWorkCards } from '../page-containers';
import { Button } from '@/components/ui/button';
import { PUBLIC_RESUME_LINK } from '@/constants';
import Link from 'next/link';
export const HomePage = () => {
	return (
		<div className='flex flex-col justify-start max-w-5xl w-full min-h-screen h-full pt-8 sm:pt-12 gap-4 sm:gap-8 mx-auto'>
			<section className='flex flex-col gap-4'>
				<div className='px-4 flex flex-col gap-4 pb-2'>
					<Heading variant='h1'>👋 Hey! I&apos;m Justin Zhang</Heading>
					<LocationDot />
					<p className='text-lg sm:text-xl font-medium sm:w-2/3'>
						I&apos;m a full-stack software engineer with a background in
						business & design. Here&apos;s a couple things that I&apos;m proud
						of!
					</p>
					<div className='flex flex-row gap-4 sm:w-1/3'>
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
				<HomeWorkCards />
			</section>
			<section className='flex flex-col gap-2 sm:gap-4 px-4 sm:px-4'>
				<Heading variant='h2'>Find me on the internet</Heading>
				<ExternalLinks />
			</section>
		</div>
	);
};
