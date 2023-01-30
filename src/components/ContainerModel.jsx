import InfoHero from './InfoHero';
import HeroDataProvider from './providers/HeroDataProvider';
import SearchBox from './SearchBox';
import Title from './Title';

const ContainerModel = () => {
	console.log('- render ContainerModel');

	return (
		<div className=''>
			<Title />
			<HeroDataProvider>
				<SearchBox />
				<InfoHero />
			</HeroDataProvider>
		</div>
	);
};

export default ContainerModel;
