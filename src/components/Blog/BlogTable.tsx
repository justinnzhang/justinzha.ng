import { cn } from '@/lib/utils';

export interface BlogTableProps {
	headers: { content: string; className?: string }[];
	rows: string[][];
	tableClassName?: string;
}

export const BlogTable = ({
	headers,
	rows,
	tableClassName,
}: BlogTableProps) => {
	if (!headers?.length || !rows?.length)
		return "Double check this table's content";

	return (
		<table className={cn('w-full', tableClassName)}>
			<thead>
				<tr className='m-0 border-t p-0 even:bg-muted'>
					{headers.map(({ content, className }, index) => (
						<th
							className={cn(
								'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
								className
							)}
							key={`${content}-${index}`}
						>
							{content}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{rows.map((row, index) => (
					<tr className='m-0 border-t p-0' key={`${row}-${index}`}>
						{row.map((cell, index) => (
							<td
								className={cn(
									'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right'
								)}
								key={`${cell}-${index}`}
							>
								{cell}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};
