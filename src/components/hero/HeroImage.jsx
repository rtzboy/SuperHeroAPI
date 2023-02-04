import { useContext } from 'react';
import { HeroDataContext } from '../../lib/contexts/HeroDataContext';

const HeroImage = () => {
	const { heroInfo } = useContext(HeroDataContext);

	return (
		<div className='relative h-[500px] overflow-hidden'>
			{heroInfo.loading && null}
			{heroInfo.heroData && (
				<>
					<img
						className='h-[500px] mx-auto object-cover rounded relative z-10'
						src={heroInfo.heroData.image}
						alt={heroInfo.heroData.name}
						onError={evt => {
							evt.currentTarget.src =
								'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg';
						}}
					/>
					<p
						className='absolute top-2 left-2 px-3 py-1 z-10 bg-white text-blue-300 dark:bg-black-600 dark:text-white dark:shadow-blue-300
					 tracking-wide font-semibold shadow text-lg rounded-lg'
					>
						{heroInfo.heroData.name}
					</p>
					<span
						style={{
							backgroundImage: `url(${heroInfo.heroData.image})`
						}}
						className='inset-0 absolute z-[1] bg-[length:100%_500px] blur rounded-2xl'
					></span>
				</>
			)}
		</div>
	);
};

export default HeroImage;
