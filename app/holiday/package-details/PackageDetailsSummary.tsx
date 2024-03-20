'use client';

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

export const Counter = ({
	onCountChange,
}: {
	onCountChange: (newCount: number) => void;
}) => {
	const [count, setCount] = useState<number>(1);

	const handleCountChange = (newCount: number) => {
		setCount(newCount);
		onCountChange(newCount);
	};

	return (
		<div className='md:p-2 inline-block bg-white md:border border-gray-200 md:rounded-lg'>
			<div className='flex items-center gap-x-1.5'>
				<button
					type='button'
					onClick={() => {
						handleCountChange(Math.max(count - 1, 1));
					}}
					className='w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none'>
					<svg
						className='flex-shrink-0 w-4 h-4'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'>
						<path d='M5 12h14' />
					</svg>
				</button>

				<input
					className='p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0'
					type='text'
					value={count}
					onChange={(e) => {
						const newCount = parseInt(e.target.value);
						handleCountChange(isNaN(newCount) ? 1 : newCount);
					}}
				/>
				<button
					type='button'
					onClick={() => {
						handleCountChange(count + 1);
					}}
					className='w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none'>
					<svg
						className='flex-shrink-0 w-4 h-4'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth={2}
						strokeLinecap='round'
						strokeLinejoin='round'>
						<path d='M5 12h14' />
						<path d='M12 5v14' />
					</svg>
				</button>
			</div>
		</div>
	);
};

const PackageDetailsSummary: React.FC<any> = () => {
	const [count, setCount] = useState<number>(1);

	const handleCountChange = (newCount: number) => {
		setCount(newCount);
	};
    
	return (
		<div className='bg-white rounded-xl shadow max-wd-md flex flex-col justify-center items-center p-4'>
            <div className="flex w-full justify-between items-center p-2">
            <p className='font-semibold'>Quantity</p>
            <Counter onCountChange={handleCountChange} />
            </div>
            <div className='w-full flex flex-col gap-1 p-2'>
            <div className='w-full flex justify-between'>
                    <span>
                        1x Package
                    </span>
                    <span>
                        BDT 48,000
                    </span>
                </div>
                <div className='w-full flex justify-between'>
                    <span>
                        Courier Charge
                    </span>
                    <span>
                        BDT 150
                    </span>
                </div>
                <div className='w-full flex justify-between'>
                    <span>
                        VAT 5%
                    </span>
                    <span>
                        BDT 120 
                    </span>
                </div>
                <div className='w-full flex justify-between font-semibold mt-5'>
                    <span>
                        Total
                    </span>
                    <span>
                        BDT 52,000
                    </span>
                </div>
            </div>
						<Link
								href='/holiday/checkout'
								className='items-center px-8 py-3 bg-green-500 font-medium gap-2 hover:bg-green-600 inline-flex rounded-lg text-center text-white'
								type='submit'>
								Book now
							</Link>
		</div>
	);
};

export default PackageDetailsSummary;
