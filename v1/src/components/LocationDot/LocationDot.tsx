import { Locate } from 'lucide-react';

export const LocationDot = () => {
	return (
		<div className='flex flex-row items-center justify-center gap-2 pl-3 pr-4 py-1 rounded-full bg-muted w-fit text-sm font-medium'>
			<div className='relative inline-flex'>
				<div className='w-2 h-2 bg-green-500 rounded-full'></div>
				<div className='w-2 h-2 bg-green-500 rounded-full absolute top-0 left-0 motion-safe:animate-ping'></div>
				<div className='w-2 h-2 bg-green-500 rounded-full absolute top-0 left-0 motion-safe:animate-pulse'></div>
			</div>
			Austin, TX
		</div>
	);
};
