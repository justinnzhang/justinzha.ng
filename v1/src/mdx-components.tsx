import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';

import { HEADING_STYLES } from '@/components/Heading';

/**
 * Overwritten with Shadcn typography styles
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: ({ children }) => <h1 className={HEADING_STYLES.h1}>{children}</h1>,
		h2: ({ children }) => <h1 className={HEADING_STYLES.h2}>{children}</h1>,
		h3: ({ children }) => <h1 className={HEADING_STYLES.h3}>{children}</h1>,
		h4: ({ children }) => <h1 className={HEADING_STYLES.h4}>{children}</h1>,
		p: ({ children }) => (
			<p className='leading-5 [&:not(:first-child)]:mt-6'>{children}</p>
		),
		ul: ({ children }) => (
			<ul className='my-6 ml-6 [&>li>ol]:my-2 [&>li>ul]:my-2 list-disc [&>li]:mt-1 [&:not(:first-child)]:mt-1'>
				{children}
			</ul>
		),
		ol: ({ children }) => (
			<ol className='my-6 ml-6 [&>li>ol]:my-2 [&>li>ul]:my-2 list-decimal [&>li]:mt-1 [&:not(:first-child)]:mt-1'>
				{children}
			</ol>
		),
		a: ({ children, ...props }) => (
			<a className='underline' {...props}>
				{children}
			</a>
		),
		code: ({ children }) => (
			<code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
				{children}
			</code>
		),
		blockquote: ({ children }) => (
			<blockquote className='my-6 border-l-2 pl-6 italic'>
				{children}
			</blockquote>
		),
		img: (props) => (
			<Image
				sizes='100vw'
				style={{ width: '100%', height: 'auto' }}
				{...(props as ImageProps)}
				alt={props?.alt ?? ''}
			/>
		),
		...components,
	};
}
