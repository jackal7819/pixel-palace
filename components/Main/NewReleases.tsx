'use client';
import { games } from '@/data';
import CardGame from './CardGame';
import SeeMore from '../Layout/Button/SeeMore';
import SeeMoreMobile from '../Layout/Button/SeeMoreMobile';
import { useMedia } from '@/hooks/useMedia';

const NewReleases: React.FC = () => {
	const { deviceType } = useMedia();
	const visible = deviceType === '4xl' ? 8 : 6;
	return (
		<div className='mb-20 md:container'>
			<div className='container flex items-center justify-between gap-5 mb-14'>
				{/* TITLE */}
				<h2 className='xl:text-[40px] text-[32px] font-medium font-orbitron'>
					New Releases
				</h2>
				{/* DESKTOP LINK */}
				<SeeMore />
				{/* MOBILE LINK */}
				<SeeMoreMobile />
			</div>
			{/* DESKTOP CARDS */}
			<div className='hidden grid-cols-1 gap-4 md:grid md:grid-cols-2 xl:grid-cols-3 4xl:gap-7 xl:gap-5 2xl:gap-6 4xl:grid-cols-4'>
				{games.slice(0, visible).map((game) => (
					<CardGame key={game.id} game={game} />
				))}
			</div>
			{/* MOBILE CARDS */}
			<div className='mx-4 md:hidden'>
				<div className='w-full gap-1 p-px pb-8 carousel rounded-box md:hidden profile'>
					{games.map((game) => (
						<CardGame key={game.id} game={game} />
					))}
				</div>
			</div>
		</div>
	);
};

export default NewReleases;
