'use client';

import { Dispatch, SetStateAction } from 'react';
import { Button } from '../ui/button';

interface Props {
	stateValue: number;
	setState: Dispatch<SetStateAction<number>>;
}

export const AnimationStepper = ({ stateValue, setState }: Props) => {
	const resetAnimation = () => {
		setState(0);
	};

	const incrementAnimation = () => {
		setState((prev) => prev + 1);
	};

	const decrementAnimation = () => {
		setState((prev) => prev - 1);
	};

	return (
		<div className='fixed right-0 bottom-0 m-4 bg-slate-100 border-slate-100 p-4 rounded z-[100]'>
			<p className='text-sm'>Current Animation State: {stateValue}</p>
			<Button onClick={resetAnimation} variant='secondary'>
				Reset Animation
			</Button>
			<Button onClick={incrementAnimation} variant='secondary'>
				Next Animation
			</Button>
			<Button onClick={decrementAnimation} variant='secondary'>
				Prev Animation
			</Button>
		</div>
	);
};
