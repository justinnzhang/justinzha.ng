import { ASSETS_PREFIX } from '@/constants';

/**
 * Get the URL of an asset without a prefixed `/`
 * @param key - The key of the asset
 *
 * @returns The URL of the asset with the given static CDN prefix
 */
export const getAssetUrl = (key: string) => {
	return `${ASSETS_PREFIX}/landing-site/images/${key}`;
};
