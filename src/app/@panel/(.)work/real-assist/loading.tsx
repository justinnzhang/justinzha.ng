export default function RealAssistPanelLoading() {
	return (
		<div
			className="flex min-h-full items-center justify-center p-8"
			role="status"
			aria-live="polite"
		>
			<div className="flex items-center gap-3 text-sm text-muted-foreground">
				<span
					className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent"
					aria-hidden="true"
				/>
				Loading project…
			</div>
		</div>
	);
}
