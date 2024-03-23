export const Footer = () => {
	return (
		<footer className='flex flex-row w-full max-w-5xl p-4'>
			<div className='flex flex-grow justify-start'>
				<p className='text-slate-300'>Created with a lot of love</p>
			</div>
			<div className='flex flex-col justify-end'>
				<p className='text-slate-300'>
					© {new Date().getFullYear()} Justin Zhang
				</p>
			</div>
		</footer>
	);
};
