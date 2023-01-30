import { useContext } from 'react';
import { HeroDataContext } from '../lib/contexts/HeroDataContext';

const Powerstats = () => {
	const { heroData } = useContext(HeroDataContext);

	return (
		<div className='flex gap-4 flex-col justify-evenly'>
			<div>
				<div className='flex justify-between'>
					<span>Combat</span>
					<span>{heroData.powerstats.combat}</span>
				</div>
				<div className='relative'>
					<div className='w-full absolute bg-orange-50 h-2 rounded-lg z-10'></div>
					<div
						style={{ width: `${heroData.powerstats.combat}%` }}
						className='absolute bg-orange-200 h-2 rounded-lg z-20'
					></div>
				</div>
			</div>
			<div>
				<div className='flex justify-between'>
					<span>Durability</span>
					<span>{heroData.powerstats.durability}</span>
				</div>
				<div className='relative'>
					<div className='w-full absolute bg-orange-50 h-2 rounded-lg z-10'></div>
					<div
						style={{ width: `${heroData.powerstats.durability}%` }}
						className='absolute bg-orange-200 h-2 rounded-lg z-20'
					></div>
				</div>
			</div>
			<div>
				<div className='flex justify-between'>
					<span>Intelligence</span>
					<span>{heroData.powerstats.intelligence}</span>
				</div>
				<div className='relative'>
					<div className='w-full absolute bg-orange-50 h-2 rounded-lg z-10'></div>
					<div
						style={{ width: `${heroData.powerstats.intelligence}%` }}
						className='absolute bg-orange-200 h-2 rounded-lg z-20'
					></div>
				</div>
			</div>
			<div>
				<div className='flex justify-between'>
					<span>Power</span>
					<span>{heroData.powerstats.power}</span>
				</div>
				<div className='relative'>
					<div className='w-full absolute bg-orange-50 h-2 rounded-lg z-10'></div>
					<div
						style={{ width: `${heroData.powerstats.power}%` }}
						className='absolute bg-orange-200 h-2 rounded-lg z-20'
					></div>
				</div>
			</div>
			<div>
				<div className='flex justify-between'>
					<span>Speed</span>
					<span>{heroData.powerstats.speed}</span>
				</div>
				<div className='relative'>
					<div className='w-full absolute bg-orange-50 h-2 rounded-lg z-10'></div>
					<div
						style={{ width: `${heroData.powerstats.speed}%` }}
						className='absolute bg-orange-200 h-2 rounded-lg z-20'
					></div>
				</div>
			</div>
			<div>
				<div className='flex justify-between'>
					<span>Strength</span>
					<span>{heroData.powerstats.strength}</span>
				</div>
				<div className='relative'>
					<div className='w-full absolute bg-orange-50 h-2 rounded-lg z-10'></div>
					<div
						style={{ width: `${heroData.powerstats.strength}%` }}
						className='absolute bg-orange-200 h-2 rounded-lg z-20 transition-all duration-500'
					></div>
				</div>
			</div>
		</div>
	);
};

export default Powerstats;
