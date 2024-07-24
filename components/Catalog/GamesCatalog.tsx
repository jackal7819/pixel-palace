import { games } from '@/data';
import CardGame from '../Main/CardGame';

interface GamesCatalogProps {
	isVisible: boolean;
}

const GamesCatalog: React.FC<GamesCatalogProps> = ({ isVisible }) => {
	return (
		<div className='mb-10'>
			{/* DESKTOP CARDS */}
			<div
				className={
					isVisible
						? 'hidden grid-cols-1 gap-4 md:grid md:grid-cols-2 4xl:gap-7 xl:gap-5 2xl:gap-6 4xl:grid-cols-3'
						: 'hidden grid-cols-1 gap-4 md:grid lg:grid-cols-2 xl:grid-cols-3 4xl:gap-7 xl:gap-5 2xl:gap-6 4xl:grid-cols-4'
				}
			>
				{games.map((game) => (
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

export default GamesCatalog;
