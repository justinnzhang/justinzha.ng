'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Home() {
	const [count, setCount] = useState(0);

	return (
		<div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
			<Button onClick={() => setCount(count + 1)}>{count}</Button>
		</div>
	);
}
