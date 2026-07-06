'use client';

import {
	type KeyboardEvent,
	type PointerEvent,
	useEffect,
	useRef,
} from 'react';

const MIN_PANEL_RATIO = 0.2;
const MAX_PANEL_RATIO = 0.8;
const KEYBOARD_STEP = 16;

interface DragSession {
	availableSize: number;
	isDesktop: boolean;
	startPointerPosition: number;
	startSize: number;
}

function clampPanelSize(size: number, availableSize: number) {
	return Math.min(
		availableSize * MAX_PANEL_RATIO,
		Math.max(availableSize * MIN_PANEL_RATIO, size),
	);
}

export function useSplitPanel() {
	const dragging = useRef(false);
	const shellRef = useRef<HTMLElement | null>(null);
	const panelRef = useRef<HTMLElement | null>(null);
	const separatorRef = useRef<HTMLDivElement | null>(null);
	const dragFillRef = useRef<HTMLDivElement | null>(null);
	const primaryDimmerRef = useRef<HTMLDivElement | null>(null);
	const panelDimmerRef = useRef<HTMLDivElement | null>(null);
	const closeButtonRef = useRef<HTMLButtonElement | null>(null);
	const desktopMediaRef = useRef<MediaQueryList | null>(null);
	const resizeFrameRef = useRef<number | null>(null);
	const dragSessionRef = useRef<DragSession | null>(null);
	const pendingPointerRef = useRef<{ clientX: number; clientY: number } | null>(
		null,
	);

	useEffect(() => {
		shellRef.current = document.querySelector<HTMLElement>('#app-content');
		desktopMediaRef.current = window.matchMedia('(min-width: 640px)');

		return () => {
			if (resizeFrameRef.current !== null) {
				window.cancelAnimationFrame(resizeFrameRef.current);
			}

			const shell = shellRef.current;
			shell?.style.removeProperty('--panel-width');
			shell?.style.removeProperty('--panel-height');

			shellRef.current = null;
			panelRef.current = null;
			separatorRef.current = null;
			dragFillRef.current = null;
			primaryDimmerRef.current = null;
			panelDimmerRef.current = null;
			closeButtonRef.current = null;
			desktopMediaRef.current = null;
			document.body.style.removeProperty('cursor');
			document.body.style.removeProperty('user-select');
		};
	}, []);

	const commitPanelSize = (size: number, isDesktop: boolean) => {
		const shell = shellRef.current;

		if (!shell) return;

		if (isDesktop) {
			shell.style.setProperty('--panel-width', `${size}px`);
			return;
		}

		shell.style.setProperty('--panel-height', `${size}px`);
	};

	const getPreviewSize = (clientX: number, clientY: number) => {
		const session = dragSessionRef.current;

		if (!session) return null;

		const pointerPosition = session.isDesktop ? clientX : clientY;
		const pointerDelta = session.startPointerPosition - pointerPosition;

		return clampPanelSize(
			session.startSize + pointerDelta,
			session.availableSize,
		);
	};

	const renderDragPreview = (clientX: number, clientY: number) => {
		const session = dragSessionRef.current;
		const separator = separatorRef.current;
		const size = getPreviewSize(clientX, clientY);

		if (!session || !separator || size === null) return;

		const boundaryOffset = session.startSize - size;
		const fillDistance = Math.abs(boundaryOffset);
		const fillStart = Math.min(boundaryOffset, 0);
		separator.style.transform = session.isDesktop
			? `translate3d(${boundaryOffset}px, 0, 0)`
			: `translate3d(0, ${boundaryOffset}px, 0)`;

		if (dragFillRef.current) {
			dragFillRef.current.style.transform = session.isDesktop
				? `translate3d(${fillStart}px, 0, 0) scaleX(${fillDistance})`
				: `translate3d(0, ${fillStart}px, 0) scaleY(${fillDistance})`;
		}
	};

	const setDragVisualsActive = (active: boolean) => {
		const opacity = active ? '1' : '';
		if (dragFillRef.current) dragFillRef.current.style.opacity = opacity;
		if (primaryDimmerRef.current) {
			primaryDimmerRef.current.style.opacity = opacity;
		}
		if (panelDimmerRef.current) {
			panelDimmerRef.current.style.opacity = opacity;
		}
		if (closeButtonRef.current) {
			closeButtonRef.current.style.opacity = active ? '0' : '';
		}
	};

	const resetDrag = (event: PointerEvent<HTMLDivElement>) => {
		dragging.current = false;
		dragSessionRef.current = null;
		pendingPointerRef.current = null;

		if (resizeFrameRef.current !== null) {
			window.cancelAnimationFrame(resizeFrameRef.current);
			resizeFrameRef.current = null;
		}

		separatorRef.current?.style.removeProperty('transform');
		dragFillRef.current?.style.removeProperty('transform');
		setDragVisualsActive(false);

		if (event.currentTarget.hasPointerCapture(event.pointerId)) {
			event.currentTarget.releasePointerCapture(event.pointerId);
		}

		document.body.style.removeProperty('cursor');
		document.body.style.removeProperty('user-select');
	};

	const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
		const panel = panelRef.current;
		const isDesktop = desktopMediaRef.current?.matches ?? false;

		if (!panel) return;

		const panelBounds = panel.getBoundingClientRect();
		dragSessionRef.current = {
			availableSize: isDesktop ? window.innerWidth : window.innerHeight,
			isDesktop,
			startPointerPosition: isDesktop ? event.clientX : event.clientY,
			startSize: isDesktop ? panelBounds.width : panelBounds.height,
		};
		if (dragFillRef.current) {
			dragFillRef.current.style.transform = isDesktop
				? 'scaleX(0)'
				: 'scaleY(0)';
		}
		setDragVisualsActive(true);
		dragging.current = true;
		event.currentTarget.setPointerCapture(event.pointerId);
		document.body.style.setProperty('cursor', 'grabbing');
		document.body.style.setProperty('user-select', 'none');
	};

	const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
		if (!dragging.current) return;

		pendingPointerRef.current = {
			clientX: event.clientX,
			clientY: event.clientY,
		};

		if (resizeFrameRef.current !== null) return;

		resizeFrameRef.current = window.requestAnimationFrame(() => {
			resizeFrameRef.current = null;
			const pointer = pendingPointerRef.current;

			if (pointer) renderDragPreview(pointer.clientX, pointer.clientY);
		});
	};

	const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
		const session = dragSessionRef.current;
		const size = getPreviewSize(event.clientX, event.clientY);

		if (session && size !== null) commitPanelSize(size, session.isDesktop);
		resetDrag(event);
	};

	const handlePointerCancel = (event: PointerEvent<HTMLDivElement>) => {
		resetDrag(event);
	};

	const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
		const shell = shellRef.current;
		const panel = panelRef.current;
		const isDesktop = desktopMediaRef.current?.matches;

		if (!shell || !panel) return;

		if (isDesktop && ['ArrowLeft', 'ArrowRight'].includes(event.key)) {
			event.preventDefault();
			const direction = event.key === 'ArrowLeft' ? 1 : -1;
			const size = clampPanelSize(
				panel.getBoundingClientRect().width + direction * KEYBOARD_STEP,
				window.innerWidth,
			);
			commitPanelSize(size, true);
		}

		if (!isDesktop && ['ArrowUp', 'ArrowDown'].includes(event.key)) {
			event.preventDefault();
			const direction = event.key === 'ArrowUp' ? 1 : -1;
			const size = clampPanelSize(
				panel.getBoundingClientRect().height + direction * KEYBOARD_STEP,
				window.innerHeight,
			);
			commitPanelSize(size, false);
		}
	};

	return {
		closeButtonRef,
		dragFillRef,
		panelDimmerRef,
		panelRef,
		primaryDimmerRef,
		separatorRef,
		separatorHandlers: {
			onKeyDown: handleKeyDown,
			onPointerCancel: handlePointerCancel,
			onPointerDown: handlePointerDown,
			onPointerMove: handlePointerMove,
			onPointerUp: handlePointerUp,
		},
	};
}
