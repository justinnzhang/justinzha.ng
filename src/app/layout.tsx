import type { Metadata, Viewport } from 'next';
import { Urbanist } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';

import { Footer, Navbar } from '@/components';
import { baseMetadata } from '@/constants';
import { Suspense } from 'react';

import './custom.css';
import './globals.css';
import { ThemeProvider } from '@/components/Theme';
import { cn } from '@/lib/utils';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
	...baseMetadata,
};

export const viewport: Viewport = {
	colorScheme: 'dark',
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: '#020617' },
	],
};

const AFTER_GRADIENT =
	'after:absolute after:h-1/2 after:max-h-[700px] after:w-screen after:rounded-full after:top-16 after:right-16 after:bg-gradient-to-r after:from-transparent after:to-indigo-300 dark:after:to-indigo-950 after:blur-3xl after:rotate-12 after:z-[-1]';

const BASE_CLASSES =
	'flex flex-col w-full min-h-screen items-center pb-[100px]';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					`${urbanist.className} bg-gradient-to-b from-background dark:from-slate-950 to-slate-100 dark:to-slate-900 bg-background dark:bg-slate-950`,
					AFTER_GRADIENT,
					BASE_CLASSES
				)}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Suspense fallback={null}>{children}</Suspense>
					<Footer />
					<Suspense fallback={null}>
						<Navbar />
					</Suspense>
					<Analytics />
					<SpeedInsights />
				</ThemeProvider>
			</body>
			<GoogleAnalytics gaId={process.env.GOOGLE_TAG_ID!} />
		</html>
	);
}
