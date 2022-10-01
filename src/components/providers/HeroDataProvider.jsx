import { HeroDataContext } from '../../lib/contexts/HeroDataContext';
import useHeros from '../../lib/hooks/useHeros';

const HeroDataProvider = ({ children }) => {
	const { heroData, heroLoading, heroError, setIdHero } = useHeros();

	return (
		<HeroDataContext.Provider
			value={{
				heroData,
				heroLoading,
				heroError,
				setIdHero
			}}
		>
			{children}
		</HeroDataContext.Provider>
	);
};

export default HeroDataProvider;
