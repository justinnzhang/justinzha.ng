export const Breakpoints = {
	xs: '320px',
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
	'2xl': '1536px',
};

const getMinWidthBreakpoint = (width: string): string =>
	`(min-width: ${width})`;

export const MinWidthBreakpoint = {
	minXs: getMinWidthBreakpoint(Breakpoints.xs),
	minSm: getMinWidthBreakpoint(Breakpoints.sm),
	minMd: getMinWidthBreakpoint(Breakpoints.md),
	minLg: getMinWidthBreakpoint(Breakpoints.lg),
	minXl: getMinWidthBreakpoint(Breakpoints.xl),
	min2xl: getMinWidthBreakpoint(Breakpoints['2xl']),
};
