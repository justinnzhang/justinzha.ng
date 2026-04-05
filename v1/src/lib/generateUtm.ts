const UTM_PARAMS: [string, string][] = [
	['utm_source', 'justinzhang-site'],
	['medium', 'blog'],
];

export const generateUtm = (link: string) => {
	const url = new URL(link);

	for (const el in UTM_PARAMS) {
		url.searchParams.set(UTM_PARAMS[el][0], UTM_PARAMS[el][1]);
	}

	return url.toString();
};
