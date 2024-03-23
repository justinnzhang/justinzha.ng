'use client';

import { AnimatePresence } from 'framer-motion';

interface Props {
	children: React.ReactNode;
}

export const PageWrapper = ({ children }: Props) => {
	return <AnimatePresence mode='wait'>{children}</AnimatePresence>;
};
