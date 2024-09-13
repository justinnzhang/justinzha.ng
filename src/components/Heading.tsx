import { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Aleo } from 'next/font/google';
const aleo = Aleo({ subsets: ['latin'] });

export const HEADING_STYLES = {
	h1: 'scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl mt-4 first:mt-0',
	h2: 'mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
	h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
	h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
};

const headingVariants = cva('slate-900 dark:slate-100', {
	variants: {
		variant: {
			...HEADING_STYLES,
		},
	},
	defaultVariants: {
		variant: 'h1',
	},
});

export interface HeadingProps
	extends React.HTMLAttributes<HTMLHeadingElement>,
		VariantProps<typeof headingVariants> {}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
	({ variant = 'h1', className, ...props }, ref) => {
		const Comp = variant ?? 'h1';

		return (
			<Comp
				className={cn(headingVariants({ variant, className }), aleo.className)}
				ref={ref}
				{...props}
			/>
		);
	}
);

Heading.displayName = 'Heading';

export { Heading, headingVariants };
