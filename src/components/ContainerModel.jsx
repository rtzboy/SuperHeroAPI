import HeroImage from './HeroImage';
import InformationHero from './information/InformationHero';
import HeroDataProvider from './providers/HeroDataProvider';
import SearchBox from './SearchBox';
import Title from './Title';

const ContainerModel = () => {
	console.log('- render ContainerModel');

	return (
		<div className='p-4 max-w-[1030px] mx-auto'>
			<Title />
			<HeroDataProvider>
				<SearchBox />
				<div className='lg:grid lg:gap-6 lg:grid-cols-[1fr,2fr]'>
					<HeroImage />
					<InformationHero />
				</div>
			</HeroDataProvider>
		</div>
	);
};

export default ContainerModel;
