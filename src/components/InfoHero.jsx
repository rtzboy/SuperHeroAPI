import { useContext } from 'react';
import { HeroContextData } from '../lib/contexts/heroContextData';
import InformationHero from './InformationHero';

const InfoHero = () => {
	const { heroData, heroLoading } = useContext(HeroContextData);

	return (
		<div className='border-2 border-slate-500'>
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
						<p className='absolute bottom-2 right-2 px-3 py-1 bg-white rounded-2xl'>
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
