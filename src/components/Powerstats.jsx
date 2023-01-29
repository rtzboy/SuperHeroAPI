import { useContext } from 'react';
import { HeroDataContext } from '../lib/contexts/HeroDataContext';

const Powerstats = () => {
	const { heroData } = useContext(HeroDataContext);

	return (
		<div className='flex gap-4 flex-col justify-evenly'>
			<div>
				Combat:
				{`${
					heroData.powerstats.combat === 'null'
						? 'Unknow'
						: heroData.powerstats.combat
				}`}
			</div>
			<div>Durability: {heroData.powerstats.durability}</div>
			<div>Intelligence: {heroData.powerstats.intelligence}</div>
			<div>Power: {heroData.powerstats.power}</div>
			<div>Speed: {heroData.powerstats.speed}</div>
			<div>Strength: {heroData.powerstats.strength}</div>
		</div>
	);
};

export default Powerstats;
