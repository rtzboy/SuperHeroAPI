import { useContext } from 'react';
import {
	GiBrain,
	GiBrokenShield,
	GiCrossedSwords,
	GiLightningBow,
	GiMuscularTorso,
	GiSkiBoot
} from 'react-icons/gi';
import { HeroDataContext } from '../../lib/contexts/HeroDataContext';

const Powerstats = () => {
	const { heroInfo } = useContext(HeroDataContext);

	if (heroInfo.loading) return <p>Cargando...</p>;
	if (!heroInfo.heroData) return;

	return (
		<ul className='flex gap-7 flex-col justify-evenly max-w-[580px] lg:max-w-none'>
			<li>
				<div className='flex justify-between'>
					<div className='flex gap-2'>
						<span className='text-blue-400 dark:text-blue-50'>
							<GiCrossedSwords size='1.5rem' />
						</span>
						<span className='font-semibold text-green-500 dark:text-violet-100 tracking-wide'>
							Combat
						</span>
					</div>
					<span className='font-semibold tracking-wide text-blue-400 dark:text-white text-lg'>
						{heroInfo.heroData.powerstats.combat}
					</span>
				</div>
				<div className='relative'>
					<div className='w-full absolute bg-green dark:bg-blue-100 h-2 rounded-lg z-10'></div>
					<div
						style={{ width: `${heroInfo.heroData.powerstats.combat}%` }}
						className='absolute bg-green-200 dark:bg-green-600 h-2 rounded-lg z-20'
					></div>
				</div>
			</li>
			<li>
				<div className='flex justify-between'>
					<div className='flex gap-2'>
						<span className='text-blue-400 dark:text-blue-50'>
							<GiBrokenShield size='1.5rem' />
						</span>
						<span className='font-semibold text-green-500 dark:text-violet-100 tracking-wide'>
							Durability
						</span>
					</div>
					<span className='font-semibold tracking-wide text-blue-400 dark:text-white text-lg'>
						{heroInfo.heroData.powerstats.durability}
					</span>
				</div>
				<div className='relative'>
					<div className='w-full absolute bg-green dark:bg-blue-100 h-2 rounded-lg z-10'></div>
					<div
						style={{ width: `${heroInfo.heroData.powerstats.durability}%` }}
						className='absolute bg-green-200 dark:bg-green-600 h-2 rounded-lg z-20'
					></div>
				</div>
			</li>
			<li>
				<div className='flex justify-between'>
					<div className='flex gap-2'>
						<span className='text-blue-400 dark:text-blue-50'>
							<GiBrain size='1.5rem' />
						</span>
						<span className='font-semibold text-green-500 dark:text-violet-100 tracking-wide'>
							Intelligence
						</span>
					</div>
					<span className='font-semibold tracking-wide text-blue-400 dark:text-white text-lg'>
						{heroInfo.heroData.powerstats.intelligence}
					</span>
				</div>
				<div className='relative'>
					<div className='w-full absolute bg-green dark:bg-blue-100 h-2 rounded-lg z-10'></div>
					<div
						style={{ width: `${heroInfo.heroData.powerstats.intelligence}%` }}
						className='absolute bg-green-200 dark:bg-green-600 h-2 rounded-lg z-20'
					></div>
				</div>
			</li>
			<li>
				<div className='flex justify-between'>
					<div className='flex gap-2'>
						<span className='text-blue-400 dark:text-blue-50'>
							<GiLightningBow size='1.5rem' />
						</span>
						<span className='font-semibold text-green-500 dark:text-violet-100 tracking-wide'>
							Power
						</span>
					</div>
					<span className='font-semibold tracking-wide text-blue-400 dark:text-white text-lg'>
						{heroInfo.heroData.powerstats.power}
					</span>
				</div>
				<div className='relative'>
					<div className='w-full absolute bg-green dark:bg-blue-100 h-2 rounded-lg z-10'></div>
					<div
						style={{ width: `${heroInfo.heroData.powerstats.power}%` }}
						className='absolute bg-green-200 dark:bg-green-600 h-2 rounded-lg z-20'
					></div>
				</div>
			</li>
			<li>
				<div className='flex justify-between'>
					<div className='flex gap-2'>
						<span className='text-blue-400 dark:text-blue-50'>
							<GiSkiBoot size='1.5rem' />
						</span>
						<span className='font-semibold text-green-500 dark:text-violet-100 tracking-wide'>
							Speed
						</span>
					</div>
					<span className='font-semibold tracking-wide text-blue-400 dark:text-white text-lg'>
						{heroInfo.heroData.powerstats.speed}
					</span>
				</div>
				<div className='relative'>
					<div className='w-full absolute bg-green dark:bg-blue-100 h-2 rounded-lg z-10'></div>
					<div
						style={{ width: `${heroInfo.heroData.powerstats.speed}%` }}
						className='absolute bg-green-200 dark:bg-green-600 h-2 rounded-lg z-20'
					></div>
				</div>
			</li>
			<li>
				<div className='flex justify-between'>
					<div className='flex gap-2'>
						<span className='text-blue-400 dark:text-blue-50'>
							<GiMuscularTorso size='1.5rem' />
						</span>
						<span className='font-semibold text-green-500 dark:text-violet-100 tracking-wide'>
							Strength
						</span>
					</div>
					<span className='font-semibold tracking-wide text-blue-400 dark:text-white text-lg'>
						{heroInfo.heroData.powerstats.strength}
					</span>
				</div>
				<div className='relative'>
					<div className='w-full absolute bg-green dark:bg-blue-100 h-2 rounded-lg z-10'></div>
					<div
						style={{ width: `${heroInfo.heroData.powerstats.strength}%` }}
						className='absolute bg-green-200 dark:bg-green-600 h-2 rounded-lg z-20 transition-all duration-500'
					></div>
				</div>
			</li>
		</ul>
	);
};

export default Powerstats;
