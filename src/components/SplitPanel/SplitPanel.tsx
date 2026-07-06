'use client';

import clsx from 'clsx';
import { Maximize2, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
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
	'flex h-full w-full flex-col overflow-hidden bg-background rounded-(--panel-corner-radius) contain-[layout_paint_style]';

interface SplitPanelProps {
	children: ReactNode;
	fullPageHref: string;
	label?: string;
}

export function SplitPanel({
	children,
	fullPageHref,
	label = 'Preview panel',
}: SplitPanelProps) {
	const router = useRouter();
	const {
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
				<div className={panelSurfaceStyles}>
					<div
						className="flex shrink-0 items-center justify-between gap-3 rounded-t-(--panel-corner-radius) border-b border-border bg-zinc-900 px-3 py-2"
						aria-label={`${label} controls`}
					>
						<p className="truncate text-sm font-medium">{label}</p>
						<div className="flex shrink-0 items-center gap-1">
							{/* A document navigation exits the intercepted route state. */}
							<a
								href={fullPageHref}
								className={buttonVariants({
									variant: 'outline',
									size: 'icon',
								})}
								aria-label={`Open ${label} as a full page`}
							>
								<Maximize2 aria-hidden="true" />
							</a>
							<Button
								type="button"
								variant="outline"
								size="icon"
								aria-label={`Close ${label}`}
								onClick={() => router.back()}
							>
								<X aria-hidden="true" />
							</Button>
						</div>
					</div>
					<div className="min-h-0 flex-1 overflow-y-auto">{children}</div>
				</div>
			</aside>
		</>
	);
}
