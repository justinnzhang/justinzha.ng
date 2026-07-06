'use client';

import clsx from 'clsx';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { useSplitPanel } from './useSplitPanel';

const separatorLayoutStyles =
	'absolute top-[calc(var(--panel-handle-size)*-1)] right-0 left-0 z-30 flex h-(--panel-handle-size) items-center justify-center bg-black sm:inset-y-0 sm:top-0 sm:right-auto sm:left-[calc(var(--panel-handle-size)*-1)] sm:h-auto sm:w-(--panel-handle-size)';
const separatorInteractionStyles =
	'cursor-row-resize touch-none will-change-transform sm:cursor-col-resize';
const separatorPillStyles =
	"after:h-2 after:w-15 after:rounded-full after:bg-white after:content-[''] sm:after:h-15 sm:after:w-2";
const separatorFocusStyles =
	'focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white';
const panelSurfaceStyles =
	'h-full w-full overflow-y-auto bg-background rounded-(--panel-corner-radius) contain-[layout_paint_style]';

interface SplitPanelProps {
	children: ReactNode;
	label?: string;
}

export function SplitPanel({
	children,
	label = 'Preview panel',
}: SplitPanelProps) {
	const router = useRouter();
	const {
		closeButtonRef,
		dragFillRef,
		panelDimmerRef,
		panelRef,
		primaryDimmerRef,
		separatorHandlers,
		separatorRef,
	} = useSplitPanel();

	return (
		<>
			<div
				ref={primaryDimmerRef}
				className="pointer-events-none fixed inset-0 z-30 bg-black/40 opacity-0 transition-opacity duration-150 will-change-[opacity] motion-reduce:transition-none"
				aria-hidden="true"
			/>
			<aside
				ref={panelRef}
				id="split-panel"
				aria-label={label}
				className="fixed isolate inset-x-0 bottom-0 z-40 h-(--panel-height) animate-in bg-black fade-in duration-200 contain-[layout] sm:inset-y-0 sm:right-0 sm:left-auto sm:h-auto sm:w-(--panel-width)"
			>
				<div
					ref={panelDimmerRef}
					className="pointer-events-none absolute inset-0 z-10 bg-black/40 opacity-0 transition-opacity duration-150 will-change-[opacity] motion-reduce:transition-none"
					aria-hidden="true"
				/>
				<div
					ref={dragFillRef}
					className="pointer-events-none absolute top-0 right-0 left-0 z-20 h-px origin-top bg-black opacity-0 will-change-transform sm:inset-y-0 sm:right-auto sm:h-auto sm:w-px sm:origin-left"
					aria-hidden="true"
				/>
				<Button
					ref={closeButtonRef}
					type="button"
					variant="outline"
					size="icon"
					className="absolute top-3 right-3 z-30 shadow-sm transition-opacity duration-150 motion-reduce:transition-none"
					aria-label={`Close ${label}`}
					onClick={() => router.back()}
				>
					<X aria-hidden="true" />
				</Button>
				<div
					ref={separatorRef}
					role="separator"
					tabIndex={0}
					aria-label={`Resize ${label}`}
					className={clsx(
						separatorLayoutStyles,
						separatorInteractionStyles,
						separatorPillStyles,
						separatorFocusStyles,
					)}
					{...separatorHandlers}
				/>
				<div className={panelSurfaceStyles}>{children}</div>
			</aside>
		</>
	);
}
