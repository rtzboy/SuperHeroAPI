import { useContext } from 'react';
import { HeroDataContext } from '../lib/contexts/HeroDataContext';

const Work = () => {
	const { heroData } = useContext(HeroDataContext);

	return (
		<div className='flex gap-4 flex-col justify-evenly'>
			<div>Occupation: {heroData.work.occupation}</div>
			<div>Base: {heroData.work.base}</div>
		</div>
	);
};

export default Work;
