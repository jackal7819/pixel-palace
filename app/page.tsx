import Bestsellers from '@/components/Main/Bestsellers'
import HeroMain from '@/components/Main/Hero/HeroMain';
import Icons from '@/components/Main/Icons'
import Links from '@/components/Main/Links'
import NewReleases from '@/components/Main/NewReleases';
import Reviews from '@/components/Main/Reviews'
import Trending from '@/components/Main/Trending'

const Home = () => {
	return (
		<>
			<HeroMain />
			<NewReleases />
      <Links />
      <Trending />
      <Icons />
      <Bestsellers />
      <Reviews />
		</>
	);
};

export default Home;
