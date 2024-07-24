import Image from 'next/image';
import Link from 'next/link';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { FaRegStar, FaStar } from 'react-icons/fa';

interface Game {
	id: number;
	title: string;
	date: string;
	price: string;
	rating: number;
	image: string;
}

interface CardGameProps {
	game: Game;
}

const CardGame: React.FC<CardGameProps> = ({ game }) => {
	return (
		<Link
			href={`/catalog/${game.id}`}
			className='xl:max-w-[514px] 3xl:h-[393px] flex flex-col gap-2 hover:shadow-xl md:hover:shadow-[0_4px_32px_0_#d3e2ff4c] rounded-xl duration-500 md:hover:-translate-y-3 cursor-pointer carousel-item w-full relative md:max-w-[336px] lg:max-w-[424px] border border-slate-600 4xl:h-[347px]'
		>
			<div className='flex-1 rounded-xl'>
				<Image
					className='object-cover h-[242px] rounded-xl md:h-[218px] 3xl:h-[261px] 4xl:h-[215px]'
					src={game.image}
					alt={game.title}
					width={514}
					height={261}
				/>
			</div>
			<div className='flex flex-col justify-start flex-1 gap-1 p-4 pt-0'>
				<div className='flex items-center justify-between w-full'>
					{/* <p>{game.date}</p> */}
					<div className='flex gap-1'>
						{Array.from({ length: 5 }, (_, i) =>
							game.rating > i ? (
								<FaStar
									key={i}
									size={19}
									className='fill-orange'
								/>
							) : (
								<FaRegStar
									key={i}
									size={19}
									className='fill-orange'
								/>
							)
						)}
					</div>
					<p className='text-2xl'>{game.price} €</p>
				</div>
				<div className='flex items-center justify-center flex-1 w-full md:justify-between'>
					<h2 className='flex-1 text-xl xl:text-2xl line-clamp-2'>
						{game.title}
					</h2>
					<div className='absolute top-0 flex items-center justify-center p-3 right-10 md:relative md:right-0'>
						<CiHeart size={27} />
					</div>
					<div className='absolute flex items-center justify-center p-3 rounded-full bg-orange top-1 right-1 md:relative md:top-0 md:right-0'>
						<CiShoppingCart size={18} />
					</div>
				</div>
			</div>
		</Link>
	);
};

export default CardGame;
