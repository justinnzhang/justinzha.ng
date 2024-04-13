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
		label: ROUTES.DOCS.title,
		href: ROUTES.DOCS.slug,
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

const ACTIVE_STYLES = `bg-slate-300 dark:bg-slate-800`;
const NAV_BUTTON_STYLES = `flex flex-row text-secondary-foreground items-center justify-center py-2 px-6 rounded-md overflow-clip cursor-pointer hover:bg-slate-200 hover:dark:bg-slate-700 transition-colors`;

const BASE_NAV_CLASSES =
	'flex flex-row fixed z-50 justify-evenly items-center backdrop-blur-md bg-[rgba(245, 245, 245, 0.6)] dark:bg-[rgba(0, 0, 0, 0.6)] border border-2 rounded-full dark:text-slate-200 text-slate-800';

const getCurrentPage = (pathName: string) => {
	return NAV_ITEMS.find((el) => el.href === pathName)?.label;
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
			{NAV_ITEMS.map((el, index) => (
				<Link
					href={el.href}
					key={`${el.id}-desktop`}
					className={cn(NAV_BUTTON_STYLES, {
						[ACTIVE_STYLES]: pathname === el.href,
						['rounded-l-full rounded-r-md']: index === 0,
					})}
				>
					<el.icon className='w-4 h-4 mr-2' />
					{el.label}
				</Link>
			))}
			<ThemeToggleSection />
		</>
	);

	const currentPageName = getCurrentPage(pathname);

	const mobileMarkup = !isDesktop && (
		<Drawer>
			<DrawerTrigger className='flex flex-row gap-2 text-secondary-foreground w-full items-center px-4 py-2 rounded-full overflow-clip cursor-pointer transition-colors'>
				{currentPageName}
				<ChevronUp />
			</DrawerTrigger>
			<ThemeToggleSection />
			<DrawerContent className='bg-background border-slate-900 pb-8'>
				<DrawerHeader className=''>
					{NAV_ITEMS.map((el) => (
						<DrawerClose className='' asChild key={`${el.id}-mobile`}>
							<Link
								href={el.href}
								className={cn(
									`flex flex-row justify-start items-center text-secondary-foreground px-2 py-4 rounded-full overflow-clip cursor-pointer transition-colors`,
									{
										['font-bold text-slate-100 bg-primary ']:
											pathname === el.href,
									}
								)}
							>
								<el.icon className='ml-4 w-4 h-4 mr-2 inline' />
								{el.label}
							</Link>
						</DrawerClose>
					))}
				</DrawerHeader>
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
				BASE_NAV_CLASSES,
				'bottom-6 right-0 left-0 gap-2 mx-auto text-center w-[80%] sm:w-fit pl-1 pr-2 py-1 sm:py-2 sm:pl-2 sm:pr-4'
			)}
		>
			{desktopMarkup}
			{mobileMarkup}
		</nav>
	);
};
