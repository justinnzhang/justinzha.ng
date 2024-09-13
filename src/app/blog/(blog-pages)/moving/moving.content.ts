import { BlogTableProps } from '@/components/Blog';

export const visaTable: BlogTableProps = {
	headers: [
		{ content: 'Type', className: 'w-36' },
		{ content: 'Name', className: 'w-20' },
		{ content: 'Description', className: 'w-80' },
	],
	rows: [
		[
			'Intern',
			'J-1',
			'The de-facto intern visa, also known as a “trainee” or “cultural exchange” visa.',
		],
		[
			'New Grad or experienced hire',
			'TN',
			'Non-immigrant, easy-to-get work visa (given the right credentials and documentation) for Canadians to work in the US. Three-year terms with renewals. You get this at border crossings (most major Canadian airports or land crossings.',
		],
		[
			'New Grad or experienced hire',
			'H1-B',
			'Lottery-based system that provides three-year terms with the option to renew. This is also a dual-intent visa, where there is a path to citizenship. More complicated and many factors beyond your control.',
		],
		[
			'Experienced hire (1+ years)',
			'L1',
			'Intra-company transfer non-immigrant visa. This visa is for employees who have been working for a company for at least one year and are transferring to a US office.',
		],
	],
	tableClassName: 'min-w-[600px]',
};
