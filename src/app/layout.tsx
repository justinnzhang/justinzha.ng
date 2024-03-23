import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import './custom.css';
import { Navbar } from '@/components/Nav/Navbar';
import { Suspense } from 'react';
import { Footer } from '@/components';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: `Justin Zhang's Space`,
	description: 'Holding & learning',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${urbanist.className} bg-gradient-to-b from-slate-950 to-slate-900 flex flex-col w-full min-h-screen items-center pb-[100px] bg-slate-950 after:absolute after:h-1/2 after:max-h-[700px] after:w-screen after:rounded-full after:top-16 after:right-16 after:bg-gradient-to-r after:from-transparent after:to-indigo-950 after:blur-3xl after:rotate-12 after:z-[-1]`}
			>
				<Suspense fallback={null}>{children}</Suspense>
				<Suspense fallback={null}>
					<Navbar />
				</Suspense>
				<Footer />
			</body>
		</html>
	);
}
