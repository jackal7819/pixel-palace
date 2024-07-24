'use client';

import 'swiper/css';
import 'swiper/css/scrollbar';

import Bestsellers from '@/components/Main/Bestsellers';
import Image from 'next/image';
import New from '@/components/News/New';
import Reviews from '@/components/Main/Reviews';
import SeeMore from '@/components/Layout/Button/SeeMore';
import { CiHeart, CiHome } from 'react-icons/ci';
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { games } from '@/data';
import { newsData } from '@/newsData';
import { useRef } from 'react';

const GameCardPage = ({ params }: { params: { id: string } }) => {
	const { id } = params;
	const game = games.find((game) => game.id === Number(id));
	const scrollbarRef = useRef(null);
	return (
		<div className='container pt-10 pb-20'>
			{/* BREADCRUMBS */}
			<div className='flex items-center gap-3 mb-10'>
				<CiHome size={24} />
				<p className='text-blue'>&gt;</p>
				<p className='font-orbitron'>Catalog</p>
				<p className='text-blue'>&gt;</p>
				<p className='font-orbitron'>Trending</p>
				<p className='text-blue'>&gt;</p>
				<p className='font-orbitron text-orange'>{game?.title}</p>
			</div>
			{/* GAME CARD */}
			<section className='flex justify-center gap-6'>
				<div>
					<Image
						className='object-cover w-[420px] h-[236px] rounded-xl 4xl:w-[788px] 2xl:h-[466px]'
						src={game?.image ? game.image : '/tekken.jpg'}
						alt={game?.title || 'Default Image'}
						width={420}
						height={236}
					/>
				</div>
				<div className='flex flex-col gap-3.5 md:w-1/2'>
					<h1 className='text-3xl font-medium truncate font-orbitron'>
						{game?.title}
					</h1>
					<div className='flex justify-between gap-3'>
						<p>Release date</p>
						<p>{game?.date}</p>
					</div>
					<div className='flex items-center justify-between gap-4'>
						<p>Platform</p>
						<select
							name='platform'
							id='platform'
							className='w-32 px-6 py-2 bg-transparent border item text-orange border-orange rounded-2xl'
						>
							<option value='pc'>PC</option>
							<option value='mac'>Mac</option>
							<option value='ps5'>PS5</option>
						</select>
					</div>
					<div className='flex justify-center gap-8'>
						<p className='text-orange'>
							<span className='text-white line-through'>
								40 €
							</span>
							&nbsp;&nbsp;&nbsp;28 %
						</p>
						<p className='mr-20'>{game?.price} €</p>
					</div>
					<div className='flex justify-between gap-3'>
						<div className='flex items-center justify-center p-3.5'>
							<CiHeart
								size={24}
								className='duration-500 hover:fill-white text-orange'
							/>
						</div>
						<button className='w-full px-6 py-3 text-2xl duration-500 bg-orange rounded-2xl hover:bg-amber-500'>
							Add to cart
						</button>
					</div>
				</div>
			</section>
			{/* ABOUT */}
			<section className='flex justify-between py-10 gap-14'>
				<div className='flex flex-col justify-between w-1/2 gap-4'>
					<h2 className='text-[32px] font-orbitron font-medium'>
						About
					</h2>
					<div className='flex gap-4'>
						<div className='px-3 py-2 text-xl border rounded-2xl border-light-blue'>
							Online Co-op
						</div>
						<div className='px-3 py-2 text-xl border rounded-2xl border-light-blue'>
							Action
						</div>
					</div>
					<p className='text-lg'>{game?.description}</p>
					<SeeMore />
				</div>
				<div className='flex flex-col justify-center w-1/2 gap-4'>
					<div className='flex gap-4'>
						<div className='flex items-center justify-center border rounded-full border-orange size-12'>
							{game?.rating}
						</div>
						<div>
							<p>Based on</p>
							<p className='text-xl text-light-blue'>
								214 reviews
							</p>
						</div>
					</div>
					<div className='flex gap-10'>
						<p>Activation:</p>
						<p className='text-light-blue'>
							How to activate your game
						</p>
					</div>
					<div className='flex gap-10'>
						<p>Developer:</p>
						<p>
							Arrowhead Game Studios, Arrowhead Game, Studios AB
						</p>
					</div>
					<div className='flex gap-11'>
						<p>Publisher:</p>
						<p>PlayStation Mobile, Inc., Playstation PC LLC</p>
					</div>
				</div>
			</section>
			{/* VISUALS */}
			<section className='py-10'>
				<h2 className='text-[32px] font-orbitron font-medium mb-10'>
					Visuals
				</h2>
				<Swiper
					slidesPerView={3}
					spaceBetween={24}
					centeredSlides={true}
					scrollbar={{
						el: scrollbarRef.current,
						draggable: true,
						dragClass:
							'swiper-scrollbar-drag !bg-light-blue !rounded',
					}}
					modules={[Scrollbar]}
					className='mySwiper'
				>
					{games.map((game) => (
						<SwiperSlide key={game.id}>
							<Image
								src={game.image}
								alt='Screenshot'
								width={592}
								height={333}
								className='rounded-xl'
							/>
						</SwiperSlide>
					))}
				</Swiper>
				<div
					ref={scrollbarRef}
					className='container w-auto h-2 mt-5 rounded md:w-3/5 lg:w-2/5 xl:w-1/3 2xl:w-1/4 bg-light'
				></div>
			</section>
			{/* CONFIGURATION */}
			<section className='py-10'>
				<h2 className='text-[32px] font-orbitron font-medium mb-10'>
					Configuration
				</h2>
				<div className='flex gap-6'>
					<div className='flex flex-col w-1/2 gap-4'>
						<h3 className='text-xl font-medium'>Minimum</h3>
						<div className='flex gap-40'>
							<p>OS:</p>
							<p>64-bit Windows 10</p>
						</div>
						<div className='flex gap-[105px]'>
							<p>Processor:</p>
							<p>Core i7-6700 or Ryzen 5 1600</p>
						</div>
						<div className='flex gap-[116px]'>
							<p>Memory:</p>
							<p>12 GB RAM</p>
						</div>
						<div className='flex gap-[114px]'>
							<p>Graphics:</p>
							<p>
								Ge Force GTX 1060 6GB or Radeon RX 580 8 GB or
								Arc A380
							</p>
						</div>
						<div className='flex gap-[124px]'>
							<p>DirectX:</p>
							<p>Version 12</p>
						</div>
						<div className='flex gap-[122px]'>
							<p>Storage:</p>
							<p>70 GB available space</p>
						</div>
						<div className='flex gap-[52px]'>
							<p>Additional notes:</p>
							<p>SSD Required</p>
						</div>
					</div>
					<div className='flex flex-col w-1/2 gap-4'>
						<h3 className='text-xl font-medium'>Recommended</h3>
						<div className='flex gap-40'>
							<p>OS:</p>
							<p>64-bit Windows 10</p>
						</div>
						<div className='flex gap-[105px]'>
							<p>Processor:</p>
							<p>Core i7-6700 or Ryzen 5 1600</p>
						</div>
						<div className='flex gap-[116px]'>
							<p>Memory:</p>
							<p>12 GB RAM</p>
						</div>
						<div className='flex gap-[114px]'>
							<p>Graphics:</p>
							<p>
								Ge Force GTX 1060 6GB or Radeon RX 580 8 GB or
								Arc A380
							</p>
						</div>
						<div className='flex gap-[124px]'>
							<p>DirectX:</p>
							<p>Version 12</p>
						</div>
						<div className='flex gap-[122px]'>
							<p>Storage:</p>
							<p>70 GB available space</p>
						</div>
						<div className='flex gap-[52px]'>
							<p>Additional notes:</p>
							<p>SSD Required</p>
						</div>
					</div>
				</div>
			</section>
			{/* REVIEWS */}
			<Reviews />
			<div className='flex justify-center mb-20 -mt-20'>
				<button className='w-[386px] text-center px-9 py-4 bg-orange rounded-2xl duration-500 hover:bg-amber-500 text-2xl'>
					Leave review
				</button>
			</div>
			{/* GAME'S NEWS */}
			{newsData.slice(0, 3).map((item) => (
				<New key={item.id} item={item} />
			))}
			{/* ALSO LIKE */}
			<Bestsellers />
		</div>
	);
};

export default GameCardPage;
