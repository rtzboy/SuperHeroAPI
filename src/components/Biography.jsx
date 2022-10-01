import { useContext } from 'react';
import { HeroDataContext } from '../lib/contexts/HeroDataContext';
import DoubleArrow from './icons/doubleArrow';

const Biography = () => {
	const { heroData } = useContext(HeroDataContext);

	return (
		<div className='flex gap-4 flex-col justify-evenly py-8'>
			<div className='flex items-center gap-3'>
				<DoubleArrow className='h-5' />
				Full Name:{heroData.biography['full-name']}
			</div>
			<div className='flex items-center gap-3'>
				<DoubleArrow className='h-5' />
				Alter Egos: {heroData.biography['alter-egos']}
			</div>
			<div className='flex items-center gap-3'>
				<DoubleArrow className='h-5' />
				Aliases: {heroData.biography.aliases.toString()}
			</div>
			<div className='flex items-center gap-3'>
				<DoubleArrow className='h-5' />
				Place Of Birth: {heroData.biography['place-of-birth']}
			</div>
			<div className='flex items-center gap-3'>
				<DoubleArrow className='h-5' />
				First Appearance: {heroData.biography['first-appearance']}
			</div>
			<div className='flex items-center gap-3'>
				<DoubleArrow className='h-5' />
				Publisher: {heroData.biography.publisher}
			</div>
			<div className='flex items-center gap-3'>
				<DoubleArrow className='h-5' />
				Alignment: {heroData.biography.alignment}
			</div>
		</div>
	);
};

export default Biography;
