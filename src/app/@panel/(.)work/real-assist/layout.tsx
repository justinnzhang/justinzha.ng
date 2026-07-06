import type { ReactNode } from 'react';
import { SplitPanel } from '@/components/SplitPanel';

export default function RealAssistPanelLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	return <SplitPanel label="RealAssist preview">{children}</SplitPanel>;
}
