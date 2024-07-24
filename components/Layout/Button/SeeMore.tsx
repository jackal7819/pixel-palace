import Link from 'next/link';
import { GoChevronRight } from 'react-icons/go';

const SeeMore: React.FC = () => {
	return (
		<Link
			href='/'
			className='items-center justify-center hidden gap-2 px-4 py-4 text-transparent duration-500 border rounded-lg md:flex border-b-light-blue w-44 h-14 border-r-blue border-t-blue border-l-light-blue hover:border-r-light-blue hover:border-b-blue hover:border-l-blue hover:border-t-light-blue group'
		>
			<span className='text-xl bg-gradient-to-r from-blue to-light-blue bg-clip-text group-hover:bg-gradient-to-l'>
				See more
			</span>
			<GoChevronRight
				size={24}
				className='mt-[3px] text-blue group-hover:text-light-blue'
			/>
		</Link>
	);
};

export default SeeMore;
