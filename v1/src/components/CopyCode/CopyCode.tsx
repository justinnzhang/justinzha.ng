'use client';

import { Copy } from 'lucide-react';
import { Button } from '../ui/button';
import { toast } from 'sonner';

interface Props {
	code: string;
}

export const CopyCode = ({ code }: Props) => {
	function copyCode() {
		toast.success('Copied to clipboard, thank you!');
		navigator.clipboard.writeText(code);
	}

	return (
		<div className='flex flex-row gap-2 p-2 h-full items-center rounded-md'>
			<code className='font-medium'>{code}</code>
			<Button
				size='icon'
				variant='outline'
				className='w-8 h-8'
				onClick={copyCode}
			>
				<Copy size={16} className='text-muted-foreground' />
			</Button>
		</div>
	);
};
