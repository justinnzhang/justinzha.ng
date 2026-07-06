import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: ['/', '/api/og/*'],
			disallow: '/private/',
		},
		sitemap: new URL('/sitemap.xml', SITE_URL).toString(),
	};
}
