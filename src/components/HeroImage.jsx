import { useContext } from 'react';
import { HeroDataContext } from '../lib/contexts/HeroDataContext';

const HeroImage = () => {
	const { heroInfo } = useContext(HeroDataContext);
	/* if (heroInfo.loading) return <p>Cargando...</p>;
	if (!heroInfo.heroData) return <p>Cargando...</p>; */

	return (
		<div className='relative h-[500px] overflow-hidden'>
			{heroInfo.loading && null}
			{heroInfo.heroData && (
				<>
					<img
						// className='block w-full max-w-sm min-w-[360px] mx-auto z-50'
						className='h-[500px] mx-auto object-cover rounded'
						src={heroInfo.heroData.image}
						alt={heroInfo.heroData.name}
						onError={evt => {
							evt.currentTarget.src =
								'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg';
						}}
					/>
					<p className='absolute top-2 left-2 px-3 py-1 bg-white rounded-lg'>
						{heroInfo.heroData.name}
					</p>
					<span
						style={{
							backgroundImage: `url(${heroInfo.heroData.image})`
						}}
						className='inset-0 absolute -z-10 bg-[length:100%_500px] blur rounded-2xl'
					></span>
				</>
			)}
		</div>
	);
};

export default HeroImage;
