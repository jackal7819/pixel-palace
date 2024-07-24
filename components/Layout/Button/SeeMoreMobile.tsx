import Link from 'next/link';
import { GoChevronRight } from 'react-icons/go';

const SeeMoreMobile: React.FC = () => {
	return (
		<Link href='/' className='md:hidden'>
			<GoChevronRight
				size={24}
				className='mt-[3px] text-blue hover:text-light-blue'
			/>
		</Link>
	);
};

export default SeeMoreMobile;
