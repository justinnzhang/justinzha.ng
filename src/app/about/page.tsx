import { Metadata } from 'next';
import { AboutPage } from '@/components/page-containers';
import { baseMetadata } from '@/constants';

export const metadata: Metadata = {
	...baseMetadata,
	title: 'About',
};

export default function Page() {
	return <AboutPage />;
}
