import { useContext } from 'react';
import { HeroContextData } from '../lib/contexts/heroContextData';

const Biography = () => {
	const { heroData } = useContext(HeroContextData);

	return (
		<div className='flex gap-4 flex-col justify-evenly py-8'>
			<div>Full Name: {heroData.biography['full-name']}</div>
			<div>Alter Egos: {heroData.biography['alter-egos']}</div>
			<div>Aliases: {heroData.biography.aliases[0]}</div>
			<div>Place Of Birth: {heroData.biography['place-of-birth']}</div>
			<div>First Appearance: {heroData.biography['first-appearance']}</div>
			<div>Publisher: {heroData.biography.publisher}</div>
			<div>Alignment: {heroData.biography.alignment}</div>
		</div>
	);
};

export default Biography;
