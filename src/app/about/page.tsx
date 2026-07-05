import { AboutPage } from '@/components/page-containers';
import { createPageMetadata } from '@/constants';

export const metadata = createPageMetadata('About', '/about');

export default function Page() {
	return <AboutPage />;
}
