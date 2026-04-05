import { MetadataRoute } from 'next';
import { ROUTES } from '@/constants';

const BASE_URL = 'https://justinzha.ng';

export default function sitemap(): MetadataRoute.Sitemap {
	const sitemap = Object.values(ROUTES).map((route) => ({
		url: `${BASE_URL}/${route.slug.substring(1)}`, // Remove leading slash
		lastModified: new Date(),
		changeFrequency: route.changeFrequency,
		priority: route.priority,
	}));

	return sitemap;
}
