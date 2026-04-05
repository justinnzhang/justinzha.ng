import Link from 'next/link';
import { Button } from '../ui/button';
import { CopyCode } from '../CopyCode';
import { SponsorshipDisclaimer } from './SponsorshipDisclaimer';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { RecCardProps } from './types';

export const RecCard = ({
	headlineMarkup,
	category,
	cta,
	imageUrl,
}: RecCardProps) => {
	const imageMarkup = imageUrl && (
		<div
			className='flex flex-col basis-1/2 relative justify-center items-center rounded-md overflow-hidden'
			style={{ minHeight: '100px' }}
		>
			<Image
				src='/static/images/promo-cards/visible_promo.webp'
				alt=''
				fill
				className='object-cover'
			/>
		</div>
	);

	const copyCodeMarkup = cta?.code && <CopyCode code={cta?.code} />;

	return (
		<section className='border-2 border-solid rounded-xl flex flex-col md:flex-row gap-8 relative p-4'>
			<div
				className={cn('flex flex-col gap-4 items-start', {
					['basis-1/2']: !!imageUrl,
				})}
			>
				{headlineMarkup}
				<div className='flex flex-row gap-4 items-center justify-center'>
					<Button asChild>
						<Link href={cta.link}>Sign up today</Link>
					</Button>
					{copyCodeMarkup}
				</div>
				<SponsorshipDisclaimer />
			</div>
			{imageMarkup}
		</section>
	);
};
