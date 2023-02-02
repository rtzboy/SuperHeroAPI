import { HeroDataContext } from '../../lib/contexts/HeroDataContext';
import useHeros from '../../lib/hooks/useHeros';

const HeroDataProvider = ({ children }) => {
	const { heroInfo, setHeroById } = useHeros();

	return (
		<HeroDataContext.Provider value={{ heroInfo, setHeroById }}>
			{children}
		</HeroDataContext.Provider>
	);
};

export default HeroDataProvider;
