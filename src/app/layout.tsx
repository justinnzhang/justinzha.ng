import type { Metadata, Viewport } from 'next';
import { Urbanist } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';

import { Footer, Navbar } from '@/components';
import { baseMetadata } from '@/constants';
import { Toaster } from '@/components/ui/sonner';
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					`${urbanist.className} bg-gradient-to-b from-background dark:from-slate-950 to-slate-100 dark:to-slate-900 bg-background dark:bg-slate-950 min-h-screen pb-[100px]`
				)}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Suspense fallback={null}>
						<main>
							{children}
							<Suspense fallback={null}>
								<Navbar />
							</Suspense>
							<Footer />
							<Toaster position='top-right' />
						</main>
					</Suspense>
					<Analytics />
					<SpeedInsights />
				</ThemeProvider>
			</body>
			<GoogleAnalytics gaId={process.env.GOOGLE_TAG_ID!} />
		</html>
	);
}
