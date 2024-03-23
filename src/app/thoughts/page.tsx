import { Metadata } from 'next';
import { baseMetadata } from '@/constants';

import { ThoughtsPage } from './ThoughtsPage';

export const metadata: Metadata = {
	...baseMetadata,
	title: 'Thoughts',
};

export default function Page() {
	return <ThoughtsPage />;
}
