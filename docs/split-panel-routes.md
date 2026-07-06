# Split panels and parallel routes

Work pages can open as resizable previews without changing how their canonical
URLs behave. Client-side navigation opens the work page in a parallel route,
while loading or refreshing that URL renders the normal full page.

## How it works

The root layout exposes the `@panel` parallel-route slot alongside the primary
route:

```tsx
export default function RootLayout({
	children,
	panel,
}: {
	children: React.ReactNode;
	panel: React.ReactNode;
}) {
	return (
		<main id="app-content" className="app-shell">
			<section className="primary-route">{children}</section>
			{panel}
		</main>
	);
}
```

`SplitPanel` accepts arbitrary route content through `children`. It handles the
responsive layout, independent scrolling, pointer dragging, keyboard resizing,
and the accessible separator. On mobile it occupies the bottom of the viewport;
at the `sm` breakpoint and above it occupies the right side. Both orientations
start at 50% and can be resized between 20% and 80%.

The corresponding styles live in `src/app/globals.css`. They use the
`#app-content`, `.app-shell`, `.primary-route`, and `#split-panel` hooks, so keep
those names synchronized if the layout or component is refactored.

## Route structure

RealAssist provides the reference implementation:

```text
src/app/
├── @panel/
│   ├── (.)work/real-assist/page.tsx  # intercepted, split-panel presentation
│   ├── page.tsx                      # clears the panel on soft navigation to /
│   ├── [...catchAll]/page.tsx        # clears the panel on other soft navigations
│   └── default.tsx                   # empty panel on initial/full-page loads
└── work/real-assist/
    ├── RealAssistContent.tsx         # content shared by both presentations
    └── page.tsx                      # canonical full-page route
```

The `(.)` interception convention matches `/work/real-assist` from the same
route level. A normal Next.js `Link` still changes the pathname to
`/work/real-assist`, but a soft navigation fills `@panel` and preserves the
current primary route. A reload resolves the canonical page instead.

## Adding another work preview

For a new route such as `/work/example`, first create its canonical page and
keep reusable content separate:

```tsx
// src/app/work/example/page.tsx
import { ExampleContent } from './ExampleContent';

export default function ExamplePage() {
	return <ExampleContent />;
}
```

Then add the matching intercepted route:

```tsx
// src/app/@panel/(.)work/example/page.tsx
import { ExampleContent } from '@/app/work/example/ExampleContent';
import { SplitPanel } from '@/components/SplitPanel';

export default function ExamplePanel() {
	return (
		<SplitPanel label="Example preview">
			<ExampleContent />
		</SplitPanel>
	);
}
```

Finally, link to the canonical URL. Do not link directly to the `@panel` path;
parallel-route directory names are slots and are not URL segments.

```tsx
import Link from 'next/link';

<Link href="/work/example">View example</Link>
```

Keep `src/app/@panel/page.tsx`, `src/app/@panel/default.tsx`, and the catch-all
route in place. Next.js uses the default during full-page loads. The home page
route clears the panel on soft navigation to `/`, while the catch-all prevents a
previous panel from remaining mounted after a soft navigation to any other route
with path segments.
