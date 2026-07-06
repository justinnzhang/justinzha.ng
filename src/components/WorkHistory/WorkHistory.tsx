import type { ReactNode } from 'react';

export interface WorkHistoryItem {
	title: string;
	company: string;
	imageKey: string;
	body: ReactNode;
	dates: string;
}

interface WorkHistoryProps {
	items: WorkHistoryItem[];
	renderLogo?: (imageKey: string, company: string) => ReactNode;
}

const LOGOS: Record<string, { label: string; className: string }> = {
	realtor: { label: 'R', className: 'bg-red-600 text-white' },
	meta: { label: 'M', className: 'bg-blue-600 text-white' },
	shopify: { label: 'S', className: 'bg-emerald-600 text-white' },
	casecom: { label: 'C', className: 'bg-violet-600 text-white' },
	hackWestern: { label: 'HW', className: 'bg-amber-400 text-black' },
};

const DefaultLogo = ({
	imageKey,
	company,
}: {
	imageKey: string;
	company: string;
}) => {
	const logo = LOGOS[imageKey] ?? {
		label: company.slice(0, 2).toUpperCase(),
		className: 'bg-muted text-muted-foreground',
	};

	return (
		<div
			aria-hidden="true"
			className={`flex size-10 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${logo.className}`}
		>
			{logo.label}
		</div>
	);
};

/** A data-driven timeline with an optional custom logo renderer. */
export const WorkHistory = ({ items, renderLogo }: WorkHistoryProps) => {
	return (
		<ol className="relative ml-5 border-l border-border">
			{items.map((item) => (
				<li
					className="relative pb-10 pl-9 last:pb-0"
					key={`${item.company}-${item.title}-${item.dates}`}
				>
					<div className="absolute -left-5 top-0 rounded-xl bg-background p-0.5">
						{renderLogo ? (
							renderLogo(item.imageKey, item.company)
						) : (
							<DefaultLogo imageKey={item.imageKey} company={item.company} />
						)}
					</div>
					<div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
						<div>
							<h3 className="font-semibold leading-tight">{item.title}</h3>
							<p className="text-sm text-muted-foreground">{item.company}</p>
						</div>
						<time className="shrink-0 text-sm text-muted-foreground">
							{item.dates}
						</time>
					</div>
					<div className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4">
						{item.body}
					</div>
				</li>
			))}
		</ol>
	);
};
