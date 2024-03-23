'use client';

import { motion } from 'framer-motion';
import { ROUTES } from '@/constants/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTrigger,
} from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks';
import { MinWidthBreakpoint } from '@/constants';
import { ChevronUp } from 'lucide-react';

const NAV_ITEMS = [
	{
		id: 'nav-item-1',
		label: ROUTES.HOME.title,
		href: ROUTES.HOME.slug,
	},
	{
		id: 'nav-item-2',
		label: ROUTES.DOCS.title,
		href: ROUTES.DOCS.slug,
	},
	{
		id: 'nav-item-3',
		label: ROUTES.ABOUT.title,
		href: ROUTES.ABOUT.slug,
	},
];

const ANIMATION_VARIANTS = {
	initial: {
		opacity: 0,
		y: 20,
		filter: 'blur(3px)',
	},
	animate: {
		opacity: 1,
		y: 0,
		filter: 'blur(0px)',
		transition: {
			duration: 0.25,
			ease: 'easeInOut',
			beforeChildren: true,
			staggerChildren: 0.1,
		},
	},
	exit: {
		opacity: 0,
		y: -10,
		filter: 'blur(3px)',
	},
};

const ACTIVE_STYLES = `font-bold text-slate-100 bg-slate-800`;
const NAV_BUTTON_STYLES = `flex flex-col text-slate-100 items-center justify-center py-2 px-8 rounded-full overflow-clip cursor-pointer hover:bg-slate-800 transition-colors`;

const getCurrentPage = (pathName: string) => {
	return NAV_ITEMS.find((el) => el.href === pathName)?.label;
};

export const Navbar = () => {
	const pathname = usePathname();
	const isDesktop = useMediaQuery(MinWidthBreakpoint.minSm, true);

	const desktopMarkup =
		isDesktop &&
		NAV_ITEMS.map((el) => (
			<Link
				href={el.href}
				key={`${el.id}-desktop`}
				className={`${NAV_BUTTON_STYLES} ${
					pathname === el.href ? ACTIVE_STYLES : ''
				}`}
			>
				{el.label}
			</Link>
		));

	const currentPageName = getCurrentPage(pathname);

	const mobileMarkup = !isDesktop && (
		<Drawer>
			<DrawerTrigger className='flex flex-row text-slate-100 w-full items-center px-3 py-2 rounded-full overflow-clip cursor-pointer hover:bg-slate-800 transition-colors'>
				<div className='flex flex-row grow'>{currentPageName}</div>
				<ChevronUp />
			</DrawerTrigger>
			<DrawerContent className='bg-slate-800 border-slate-900 pb-8'>
				<DrawerHeader className='text-left'>
					{NAV_ITEMS.map((el) => (
						<Link
							href={el.href}
							className={`flex flex-col text-slate-100 items-center justify-center px-8 rounded-full overflow-clip cursor-pointer hover:bg-slate-800 transition-colors py-4 ${
								pathname === el.href
									? 'font-bold text-slate-100 bg-slate-800 '
									: ''
							}`}
							passHref
							key={`${el.id}-mobile`}
						>
							<DrawerClose className='w-full h-full'>{el.label}</DrawerClose>
						</Link>
					))}
				</DrawerHeader>
			</DrawerContent>
		</Drawer>
	);

	return (
		<motion.nav
			id='navbar-container'
			className='flex flex-row fixed z-50 justify-evenly bottom-6 left-0 right-0 backdrop-blur-md px-6 sm:px-8 py-2 gap-2 mx-auto text-center bg-[rgba(0, 0, 0, 0.6)] border-slate-600 border-2 rounded-full w-[80%] sm:w-[95%] max-w-md'
			variants={ANIMATION_VARIANTS}
			initial='initial'
			animate='animate'
			exit='exit'
		>
			{desktopMarkup}
			{mobileMarkup}
		</motion.nav>
	);
};
