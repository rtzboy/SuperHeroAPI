import InfoHero from './InfoHero';
import HeroDataProvider from './providers/HeroDataProvider';
import SearchBox from './SearchBox';
import Title from './Title';

const ContainerModel = () => {
	console.log('- render ContainerModel');

	return (
		<div className='w-full max-w-5xl mt-10 m-auto px-10'>
			<Title />
			<HeroDataProvider>
				<SearchBox />
				<InfoHero />
			</HeroDataProvider>
		</div>
	);
};

export default ContainerModel;
