import { HeroContextData } from '../lib/contexts/heroContextData';
import useHeros from '../lib/hooks/useHeros';
import InfoHero from './InfoHero';
import SearchBox from './SearchBox';
import Title from './Title';

const ContainerModel = () => {
	console.log('- render ContainerModel');
	const { heroData, heroLoading, heroError, setIdHero } = useHeros();

	return (
		<div className='w-full max-w-5xl mt-10 m-auto px-10'>
			<Title />
			<SearchBox setIdHero={setIdHero} />
			<HeroContextData.Provider value={{ heroData, heroLoading, heroError }}>
				<InfoHero />
			</HeroContextData.Provider>
		</div>
	);
};

export default ContainerModel;
