import type { Metadata, Viewport } from 'next';
import { Urbanist } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import { Footer, Navbar } from '@/components';
import { baseMetadata } from '@/constants';
import { Suspense } from 'react';

import './custom.css';
import './globals.css';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
	...baseMetadata,
};

export const viewport: Viewport = {
	colorScheme: 'dark',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'black' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
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
				<Analytics />
			</body>
		</html>
	);
}
