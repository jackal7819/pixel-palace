import New from '@/components/News/New';
import Pagination from '@/components/News/Pagination';
import Sales from '@/components/News/Sales';
import Upcoming from '@/components/News/Upcoming';

import {newsData} from "@/newsData";

const News = () => {
	return (
		<div className='container'>
			<h1 className='xl:text-5xl text-[32px] font-bold font-orbitron mb-8 md:mb-14'>
				Latest news
			</h1>

			{newsData.map((value, index) => {
				if (index === 2) {
					return (
						<>
							<New key={value.id} item={value}/>
							<Upcoming />
						</>
					);
				} else if (index === 5) {
					return (
						<>
							<New key={value.id} item={value}/>
							<Sales />
						</>
					);
				} else return <New key={value.id} item={value}/>;
			})}
			<Pagination />
		</div>
	);
};

export default News;
