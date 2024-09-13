export interface RecCardProps {
	headlineMarkup: string | React.ReactNode;
	category: string;
	cta: {
		link: string;
		code?: string;
	};
	imageUrl?: string;
}
