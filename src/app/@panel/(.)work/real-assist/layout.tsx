import type { ReactNode } from 'react';
import { SplitPanel } from '@/components/SplitPanel';

export default function RealAssistPanelLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	return (
		<SplitPanel fullPageHref="/work/real-assist" label="RealAssist preview">
			{children}
		</SplitPanel>
	);
}
