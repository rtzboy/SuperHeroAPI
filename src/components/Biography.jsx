import { useContext } from 'react';
import { HeroDataContext } from '../lib/contexts/HeroDataContext';

const Biography = () => {
	const { heroData } = useContext(HeroDataContext);

	return (
		<div className='flex gap-4 flex-col justify-evenly'>
			<div>Full Name:{heroData.biography['full-name']}</div>
			<div>Alter Egos: {heroData.biography['alter-egos']}</div>
			<div>Aliases: {heroData.biography.aliases.toString()}</div>
			<div>Place Of Birth: {heroData.biography['place-of-birth']}</div>
			<div>First Appearance: {heroData.biography['first-appearance']}</div>
			<div>Publisher: {heroData.biography.publisher}</div>
			<div>Alignment: {heroData.biography.alignment}</div>
		</div>
	);
};

export default Biography;
