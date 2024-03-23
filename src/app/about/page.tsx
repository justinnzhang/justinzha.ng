import { Metadata } from 'next';
import { AboutPage } from './AboutPage';
import { baseMetadata } from '@/constants';

export const metadata: Metadata = {
	...baseMetadata,
	title: 'About',
};

export default function Page() {
	return <AboutPage />;
}
