import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export function RealAssistContent() {
	return (
		<article className="mx-auto flex min-h-full w-full max-w-3xl flex-col gap-6 bg-zinc-900 px-6 py-6 sm:px-10">
			<h1 className="text-3xl font-bold">RealAssist</h1>
			<p className="text-muted-foreground">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
			<p className="text-muted-foreground">
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
				ut aliquip ex ea commodo consequat. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur.
			</p>
			<Link href="/" className={buttonVariants()}>
				Back home
			</Link>
		</article>
	);
}
