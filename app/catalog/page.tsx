'use client';
import GamesCatalog from '@/components/Catalog/GamesCatalog';
import Pagination from '@/components/Catalog/Pagination';
import { CiFilter, CiHome, CiSliderHorizontal } from 'react-icons/ci';
import { HiOutlineXCircle } from 'react-icons/hi2';
import { useState } from 'react';
import Filter from "@/components/common/FilterForm/Filter";
import {useFilterStore} from "@/hooks/useFilter";

const Catalog = () => {
	const [isVisible, setIsVisible] = useState(false);
  const {filters} = useFilterStore()
	const handleVisible = () => {
		setIsVisible(!isVisible);
	};

	return (
		<div className='container pt-10 pb-20'>
			<div className='flex items-center gap-3 mb-10'>
				<CiHome size={24} />
				<p className='text-blue'>&gt;</p>
				<p className='font-orbitron'>Catalog</p>
				<p className='text-blue'>&gt;</p>
				<p className='font-orbitron'>Trending</p>
			</div>
			<div className='flex items-center justify-between gap-5 mb-10'>
				<h2 className='xl:text-[40px] text-[32px] font-medium font-orbitron'>
					Trending
				</h2>
				<button className='flex gap-`2 px-4 py-4 duration-300 border rounded-lg items-center justify-end w-44 h-14 group border-orange hover:border-amber-500'>
					<CiFilter
						size={32}
						className='mt-[3px] text-orange group-hover:text-amber-500'
					/>
				</button>
			</div>
			<div className='flex items-center gap-6 mb-10'>
				<CiSliderHorizontal
					size={24}
					onClick={handleVisible}
					className='mr-2 duration-500 cursor-pointer text-orange hover:text-amber-500'
				/>
				{filters.map((filter) => (
					<button
						key={filter}
						className='flex items-center justify-center gap-3 px-3 py-2 text-xl duration-500 border rounded-2xl border-light-blue hover:border-blue group'
					>
						{filter}
						<HiOutlineXCircle size={24} className='duration-500 group-hover:text-pink-400' />
					</button>
				))}
			</div>
			<div className='flex items-stretch gap-3'>
				{isVisible && <Filter onClose={handleVisible} />}
				<div>
					<GamesCatalog isVisible={isVisible} />
					<Pagination />
				</div>
			</div>
		</div>
	);
};

export default Catalog;
