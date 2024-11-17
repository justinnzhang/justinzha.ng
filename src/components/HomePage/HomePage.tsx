import { ExternalLinks } from '../ExternalLinks';
import { FullScreenSlide } from '../FullScreenSlide/FullScreenSlide';
import { Heading } from '../Heading';
import { LocationDot } from '../LocationDot';
import { HomeWorkCards } from '../page-containers';

export const HomePage = () => {
	return (
		<div className='flex flex-col justify-start max-w-5xl w-full min-h-screen h-full pt-8 sm:pt-12 gap-4 sm:gap-8 mx-auto'>
			<section className='flex flex-col gap-4'>
				<div className='px-4 flex flex-col gap-4 pb-4'>
					<Heading variant='h1'>👋 Hey! I&apos;m Justin Zhang</Heading>
					<LocationDot />
					<p className='text-lg sm:text-xl font-medium sm:w-1/2'>
						I&apos;m a software engineer with a background in business & design.
						Here&apos;s a couple things that I&apos;m proud of!
					</p>
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
