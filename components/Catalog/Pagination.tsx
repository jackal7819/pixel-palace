import React from 'react';
import { pagination } from '@/data';

const Pagination = () => {
	return (
		<div className='flex justify-center gap-3'>
			{pagination.map((page) => (
				<div
					key={page}
					className='flex items-center justify-center duration-500 border rounded-full cursor-pointer size-14 border-orange hover:bg-orange'
				>
					{page}
				</div>
			))}
		</div>
	);
};

export default Pagination;
