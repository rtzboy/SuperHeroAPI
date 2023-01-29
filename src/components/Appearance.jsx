import { useContext } from 'react';
import { HeroDataContext } from '../lib/contexts/HeroDataContext';

const Appearance = () => {
	const { heroData } = useContext(HeroDataContext);

	return (
		<div className='flex gap-4 flex-col justify-evenly'>
			<div>Gender: {heroData.appearance.gender}</div>
			<div>Race: {heroData.appearance.race}</div>
			<div>Height: {heroData.appearance.height[1]}</div>
			<div>Weight: {heroData.appearance.weight[1]}</div>
			<div>Eye Color: {heroData.appearance['eye-color']}</div>
			<div>Hair Color: {heroData.appearance['hair-color']}</div>
		</div>
	);
};

export default Appearance;
