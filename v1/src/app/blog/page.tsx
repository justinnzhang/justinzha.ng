import { Metadata } from 'next';
import { baseMetadata } from '@/constants';

import { BlogPage } from '@/components/page-containers/blog';

export const metadata: Metadata = {
	...baseMetadata,
	title: 'Blog',
};

export default function Page() {
	return <BlogPage />;
}
