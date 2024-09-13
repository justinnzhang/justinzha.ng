export default function BlogLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='w-full max-w-2xl py-4 sm:py-8 sm:mt-4 rounded-xl overflow-clip mx-auto bg-background border'>
			{children}
		</div>
	);
}
