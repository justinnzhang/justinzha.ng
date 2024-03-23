import { Card } from '.';
import { BaseCardProps, CardContentProps, CardMediaProps } from './types';

export interface GenerateCardProps {
	id: string;
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
	const mediaMarkup = media && <Card.Media {...media} />;

	const contentMarkup = content && <Card.Content {...content} />;

	return (
		<Card.Root {...root}>
			{mediaMarkup}
			{contentMarkup}
			{children}
		</Card.Root>
	);
};
