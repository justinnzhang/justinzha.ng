import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import { Urbanist } from 'next/font/google';

import { Footer, Navbar } from '@/components';
import { Toaster } from '@/components/ui/sonner';
import { baseMetadata } from '@/constants';

import './custom.css';
import './globals.css';
import { ThemeProvider } from '@/components/Theme';
import { cn } from '@/lib/utils';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = baseMetadata;

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
	const googleAnalyticsId = process.env.GOOGLE_TAG_ID;

	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<main
						className={cn(
							`${urbanist.className} bg-linear-to-b from-background dark:from-slate-950 to-slate-100 dark:to-slate-900 bg-background dark:bg-slate-950 min-h-screen pb-[100px]`,
						)}
					>
						{children}
						<Navbar />
						<Footer />
						<Toaster position="top-right" />
					</main>
					<Analytics />
					<SpeedInsights />
				</ThemeProvider>
				{googleAnalyticsId ? (
					<GoogleAnalytics gaId={googleAnalyticsId} />
				) : null}
			</body>
		</html>
	);
}
