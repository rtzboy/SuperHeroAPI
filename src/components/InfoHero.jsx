import { useContext } from 'react';
import { HeroDataContext } from '../lib/contexts/HeroDataContext';
import InformationHero from './InformationHero';

const InfoHero = () => {
	const { heroData, heroLoading } = useContext(HeroDataContext);

	return (
		<div className=''>
			{heroLoading ? (
				<p>Cargando</p>
			) : (
				<div className='flex'>
					<div className='w-2/5 relative'>
						<img
							className='rounded-2xl'
							src={heroData.image.url}
							alt={heroData.name}
						/>
						<p className='absolute top-2 left-2 px-3 py-1 bg-white rounded-2xl'>
							{heroData.name}
						</p>
					</div>
					<div className='w-3/5'>
						<InformationHero />
					</div>
				</div>
			)}
		</div>
	);
};

export default InfoHero;
