import { BlogPage } from '@/components/page-containers/blog';
import { createPageMetadata } from '@/constants';

export const metadata = createPageMetadata('Blog', '/blog');

export default function Page() {
	return <BlogPage />;
}
