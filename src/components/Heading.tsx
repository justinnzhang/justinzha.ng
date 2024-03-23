import { Aleo } from 'next/font/google';
import { HTMLAttributes } from 'react';

const aleo = Aleo({ subsets: ['latin'] });

interface Props extends HTMLAttributes<HTMLHeadingElement> {
	size: HeadingSizes;
	children: React.ReactNode;
}

const commonStyles = `text-white`;

const styles = {
	h1: `${commonStyles} text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl`,
	h2: `${commonStyles} text-2xl md:text-3xl font-semibold tracking-tight first:mt-0`,
	h3: `${commonStyles} text-xl md:text-2xl font-semibold tracking-tight`,
	h4: `${commonStyles} text-lg md:text-xl font-semibold tracking-tight`,
};

export const Heading = ({ size, children, ...rest }: Props) => {
	switch (size) {
		case 'h1':
			return (
				<h1 className={styles[size]} {...rest}>
					{children}
				</h1>
			);
		case 'h2':
			return (
				<h2 className={styles[size]} {...rest}>
					{children}
				</h2>
			);
		case 'h3':
			return (
				<h3 className={styles[size]} {...rest}>
					{children}
				</h3>
			);
		case 'h4':
			return (
				<h4 className={styles[size]} {...rest}>
					{children}
				</h4>
			);
	}
};
