import { type MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default function robots(): MetadataRoute.Robots {
	const headersList = headers();
	const domain = headersList.get('host')!;

	return {
		rules: {
			userAgent: '*',
			allow: ['/', '/api/og/*'],
			disallow: '/private/',
		},
		sitemap: `https://${domain}/sitemap.xml`,
	};
}
