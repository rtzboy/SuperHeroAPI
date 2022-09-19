import { useContext } from 'react';
import { HeroContextData } from '../lib/contexts/heroContextData';

const Powerstats = () => {
	const { heroData } = useContext(HeroContextData);

	return (
		<div className='flex gap-4 flex-col justify-evenly py-8'>
			<div>Combat: {heroData.powerstats.combat}</div>
			<div>Durability: {heroData.powerstats.durability}</div>
			<div>Intelligence: {heroData.powerstats.intelligence}</div>
			<div>Power: {heroData.powerstats.power}</div>
			<div>Speed: {heroData.powerstats.speed}</div>
			<div>Strength: {heroData.powerstats.strength}</div>
		</div>
	);
};

export default Powerstats;
