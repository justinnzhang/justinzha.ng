import { ASSETS_PREFIX } from '@/constants';

export const getAssetsUrl = (key: string) => {
	return `${ASSETS_PREFIX}${key}`;
};
