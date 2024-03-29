import DarkTheme from '../darktheme/DarkTheme';
import InformationHero from '../information/InformationHero';
import HeroDataProvider from '../providers/HeroDataProvider';
import SearchBox from '../search/SearchBox';
import Title from '../Title';
import HeroImage from './HeroImage';

const ContainerModel = () => {
	return (
		<div className='relative p-4 max-w-[1030px] mx-auto dark:bg-transparent transition-all duration-300'>
			<DarkTheme />
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
