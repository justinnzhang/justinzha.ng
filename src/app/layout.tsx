import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata, Viewport } from 'next';
import { Figtree } from 'next/font/google';

import { Toaster } from '@/components/ui/sonner';
import { baseMetadata } from '@/constants';

import './custom.css';
import './globals.css';
import { ThemeProvider } from '@/components/Theme';
import { cn } from '@/lib/utils';

const figtree = Figtree({ subsets: ['latin'], variable: '--font-sans' });

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
	panel,
}: Readonly<{
	children: React.ReactNode;
	panel: React.ReactNode;
}>) {
	const googleAnalyticsId = process.env.GOOGLE_TAG_ID;

	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={cn('font-sans', 'font-sans', figtree.variable)}
		>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<main
						id="app-content"
						className={cn('app-shell bg-white dark:bg-black')}
					>
						<section className="primary-route overflow-hidden">
							{children}
						</section>
						{panel}
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
