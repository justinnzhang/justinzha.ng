import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { WorkHistory, type WorkHistoryItem } from '../WorkHistory/WorkHistory';

const WORK_HISTORY = [
	{
		title: 'Frontend Tech Lead',
		company: 'Realtor.com',
		imageKey: 'realtor',
		dates: '2023 — Present',
		body: (
			<p>
				Building RealAssist and Realtor.com&apos;s consumer-facing AI
				applications, while leading frontend architecture and delivery.
			</p>
		),
	},
	{
		title: 'Product Intern',
		company: 'Meta',
		imageKey: 'meta',
		dates: '2022',
		body: <p>Drove the launch of Facebook Marketplace seller campaigns.</p>,
	},
	{
		title: 'Software Engineer Intern',
		company: 'Shopify',
		imageKey: 'shopify',
		dates: '2021',
		body: (
			<p>
				Launched Shopify&apos;s GitHub integration, including its syncing UI and
				logging capabilities.
			</p>
		),
	},
	{
		title: 'Co-founder',
		company: 'Casecom',
		imageKey: 'casecom',
		dates: '2020 — 2022',
		body: (
			<p>
				Created a digital platform for Canadian case competitions, landed
				Shopify as a client, and reached positive cash flow.
			</p>
		),
	},
	{
		title: 'Co-chair',
		company: 'Hack Western',
		imageKey: 'hackWestern',
		dates: '2019 — 2022',
		body: (
			<p>
				Helped lead one of Canada&apos;s largest student hackathons, reaching
				more than 1,200 students worldwide.
			</p>
		),
	},
] satisfies WorkHistoryItem[];

export const HomePage = () => {
	return (
		<div className="min-h-full w-full pb-16 bg-zinc-900">
			<div className="mx-auto flex min-h-full w-full max-w-5xl flex-col justify-start gap-4 px-4 pt-8 sm:gap-8 sm:pt-12">
				<h1 className="text-lg font-bold sm:text-2xl">
					I&apos;m Justin Zhang, a Senior Software Engineer who combines
					business, design, and technology to build products.
				</h1>
				<p>
					Currently the Frontend Tech Lead at{' '}
					<Link
						href="/work/real-assist"
						className={buttonVariants({
							size: 'sm',
							variant: 'secondary',
						})}
					>
						Realtor.com
					</Link>{' '}
					building RealAssist & our consumer-facing AI applications.
				</p>
				<section
					className="mt-4 flex flex-col gap-6"
					aria-labelledby="work-heading"
				>
					<h2 id="work-heading" className="text-lg font-bold sm:text-xl">
						Selected work
					</h2>
					<WorkHistory items={WORK_HISTORY} />
				</section>
			</div>
		</div>
	);
};
