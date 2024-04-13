import { Card, CardMedia, CardContent } from './Card';
import { BaseCardProps, CardContentProps, CardMediaProps } from './types';

export interface GenerateCardProps {
	id?: string;
	root: Omit<BaseCardProps, 'children'>;
	media?: CardMediaProps;
	content?: CardContentProps;
	children?: React.ReactNode;
}

export const GenerateCard = ({
	root,
	media,
	content,
	children,
}: GenerateCardProps) => {
	const mediaMarkup = media && <CardMedia {...media} />;

	const contentMarkup = content && <CardContent {...content} />;

	return (
		<Card {...root}>
			{mediaMarkup}
			{contentMarkup}
			{children}
		</Card>
	);
};
