'use client';

import { ROUTES } from '@/constants/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTrigger,
} from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks';
import { MinWidthBreakpoint } from '@/constants';
import { ChevronUp, Home, LinkIcon, PersonStanding } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '../Theme';
import { Button } from '../ui/button';

const NAV_ITEMS = [
	{
		id: 'nav-item-1',
		label: ROUTES.HOME.title,
		href: ROUTES.HOME.slug,
		icon: ({ className }: { className?: string }) => (
			<Home className={className} />
		),
	},
	{
		id: 'nav-item-2',
		label: ROUTES.BLOG.title,
		href: ROUTES.BLOG.slug,
		icon: ({ className }: { className?: string }) => (
			<LinkIcon className={className} />
		),
	},
	{
		id: 'nav-item-3',
		label: ROUTES.ABOUT.title,
		href: ROUTES.ABOUT.slug,
		icon: ({ className }: { className?: string }) => (
			<PersonStanding className={className} />
		),
	},
];

const isActiveNestedRoute = (currentUrl: string, buttonUrl: string) => {
	const currentUrlParts = currentUrl.split('/');
	const buttonUrlParts = buttonUrl.split('/');

	if (!currentUrlParts?.length || !buttonUrlParts?.length) return false;
	if (currentUrlParts.length < 3) return false;

	return currentUrlParts[1] === buttonUrlParts[1];
};

const getCurrentPage = (pathName: string) => {
	const routes = Object.values(ROUTES);
	return routes.find((el) => el.slug === pathName)?.title;
};

const ThemeToggleSection = () => (
	<div className='flex flex-row items-center gap-2'>
		<div className='w-[2px] h-4 bg-slate-300 dark:bg-slate-400 ' />
		<ThemeToggle />
	</div>
);
export const Navbar = () => {
	const pathname = usePathname();
	const isDesktop = useMediaQuery(MinWidthBreakpoint.minSm, true);

	const desktopMarkup = isDesktop && (
		<>
			{NAV_ITEMS.map((el, index) => {
				const showActiveState =
					el.href === pathname || isActiveNestedRoute(pathname, el.href);

				return (
					<Link
						href={el.href}
						key={`${el.id}-desktop`}
						className={cn(
							'flex flex-row text-secondary-foreground font-md items-center justify-center py-2 px-6 rounded-md overflow-clip cursor-pointer hover:bg-slate-300 hover:dark:bg-slate-700 transition-colors font-medium text-slate-500 dark:text-slate-400',
							{
								['text-slate-800 dark:text-slate-100']: showActiveState,
								['after:content-[""] after:w-10 after:h-[2px] after:bg-slate-400 dark:after:bg-slate-500 after:absolute after:bottom-2 after:rounded-xl']:
									showActiveState,
								['before:content-[""] before:w-8 before:h-[4px] before:bg-slate-500 dark:before:bg-slate-600 before:absolute before:bottom-2 before:rounded-xl']:
									isActiveNestedRoute(pathname, el.href),
								['rounded-l-full rounded-r-md']: index === 0,
							}
						)}
					>
						<el.icon className='w-4 h-4 mr-2' />
						{el.label}
					</Link>
				);
			})}
			<ThemeToggleSection />
		</>
	);

	const currentPageName = getCurrentPage(pathname);

	const mobileMarkup = !isDesktop && (
		<Drawer>
			<div className='flex flex-row w-full'>
				<DrawerTrigger asChild>
					<div className='flex flex-row w-[85%] gap-2 text-secondary-foreground items-center px-4 py-2 rounded-full overflow-clip cursor-pointer transition-colors'>
						<p className='truncate'>{currentPageName}</p>
						<ChevronUp />
					</div>
				</DrawerTrigger>
				<ThemeToggleSection />
			</div>
			<DrawerContent className='bg-slate-100 dark:bg-slate-800 borderdark:border-slate-900 pb-8'>
				<DrawerHeader>
					<div className='flex flex-col items-start justify-start text-left'>
						<p className='text-muted-foreground text-sm'>Current Page</p>
						<p className='font-medium'>{currentPageName}</p>
					</div>
				</DrawerHeader>
				<div className='flex flex-col px-4'>
					{NAV_ITEMS.map((el) => (
						<DrawerClose className='' asChild key={`${el.id}-mobile`}>
							<Link
								href={el.href}
								className={cn(
									`flex flex-row justify-start items-center text-secondary-foreground py-3 rounded-full overflow-clip cursor-pointer transition-colors`,
									{
										['font-bold']: pathname === el.href,
									}
								)}
							>
								<el.icon className='ml-1 w-4 h-4 mr-2 inline' />
								{el.label}
							</Link>
						</DrawerClose>
					))}
				</div>
				<DrawerFooter>
					<DrawerClose className='w-full' asChild>
						<Button variant='outline'>Close</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);

	return (
		<nav
			id='navbar-container'
			className={cn(
				'fixed z-50 bg-slate-100 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-full dark:text-slate-200 text-slate-800',
				'bottom-6 right-0 left-0 gap-2 mx-auto text-center w-[80%] sm:w-fit'
			)}
		>
			<span className='flex flex-row justify-evenly items-center bg-slate-200 dark:bg-slate-800 rounded-full m-[2px] pl-1 sm:pl-4 pr-4 py-2'>
				{desktopMarkup}
				{mobileMarkup}
			</span>
		</nav>
	);
};
