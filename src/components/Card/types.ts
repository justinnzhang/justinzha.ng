export interface BaseCardProps {
	children: React.ReactNode;
	className?: string;
	linkProps?: {
		href: string;
		alt?: string;
	};
	isExternal?: boolean;
	minHeightClass?: string;
}

export interface CardMediaProps {
	src: string;
	alt: string;
	className?: string;
	sizes?: string;
	priority?: 'high' | 'low' | 'auto';
}

export interface CardContentProps {
	title: string;
	body: string;
	className?: string;
	aboveTextMarkup?: React.ReactNode;
	belowTextMarkup?: React.ReactNode;
	ctaProps?: {
		text: string;
		iconRight?: React.ReactNode;
	};
}
