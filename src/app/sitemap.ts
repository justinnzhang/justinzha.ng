import type { MetadataRoute } from 'next';
import { ROUTES, SITE_URL } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
	const sitemap = Object.values(ROUTES).map((route) => ({
		url: new URL(route.slug, SITE_URL).toString(),
		changeFrequency: route.changeFrequency,
		priority: route.priority,
	}));

	return sitemap;
}
