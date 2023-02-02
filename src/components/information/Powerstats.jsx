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
		<ul className='flex gap-7 flex-col justify-evenly'>
			<li>
				<div className='flex justify-between'>
					<div className='flex gap-2'>
						<GiCrossedSwords size='1.5rem' color='rgb(249, 115, 22)' />
						<span className='font-bold text-orange-500 tracking-wide'>
							Combat
						</span>
					</div>
					<span className='font-bold tracking-wide'>
						{heroInfo.heroData.powerstats.combat}
					</span>
				</div>
				<div className='relative'>
					<div className='w-full absolute bg-orange-50 h-2 rounded-lg z-10'></div>
					<div
						style={{ width: `${heroInfo.heroData.powerstats.combat}%` }}
						className='absolute bg-orange-200 h-2 rounded-lg z-20'
					></div>
				</div>
			</li>
			<li>
				<div className='flex justify-between'>
					<div className='flex gap-2'>
						<GiBrokenShield size='1.5rem' color='rgb(249, 115, 22)' />
						<span className='font-bold text-orange-500 tracking-wide'>
							Durability
						</span>
					</div>
					<span className='font-bold tracking-wide'>
						{heroInfo.heroData.powerstats.durability}
					</span>
				</div>
				<div className='relative'>
					<div className='w-full absolute bg-orange-50 h-2 rounded-lg z-10'></div>
					<div
						style={{ width: `${heroInfo.heroData.powerstats.durability}%` }}
						className='absolute bg-orange-200 h-2 rounded-lg z-20'
					></div>
				</div>
			</li>
			<li>
				<div className='flex justify-between'>
					<div className='flex gap-2'>
						<GiBrain size='1.5rem' color='rgb(249, 115, 22)' />
						<span className='font-bold text-orange-500 tracking-wide'>
							Intelligence
						</span>
					</div>
					<span className='font-bold tracking-wide'>
						{heroInfo.heroData.powerstats.intelligence}
					</span>
				</div>
				<div className='relative'>
					<div className='w-full absolute bg-orange-50 h-2 rounded-lg z-10'></div>
					<div
						style={{ width: `${heroInfo.heroData.powerstats.intelligence}%` }}
						className='absolute bg-orange-200 h-2 rounded-lg z-20'
					></div>
				</div>
			</li>
			<li>
				<div className='flex justify-between'>
					<div className='flex gap-2'>
						<GiLightningBow size='1.5rem' color='rgb(249, 115, 22)' />
						<span className='font-bold text-orange-500 tracking-wide'>
							Power
						</span>
					</div>
					<span className='font-bold tracking-wide'>
						{heroInfo.heroData.powerstats.power}
					</span>
				</div>
				<div className='relative'>
					<div className='w-full absolute bg-orange-50 h-2 rounded-lg z-10'></div>
					<div
						style={{ width: `${heroInfo.heroData.powerstats.power}%` }}
						className='absolute bg-orange-200 h-2 rounded-lg z-20'
					></div>
				</div>
			</li>
			<li>
				<div className='flex justify-between'>
					<div className='flex gap-2'>
						<GiSkiBoot size='1.5rem' color='rgb(249, 115, 22)' />
						<span className='font-bold text-orange-500 tracking-wide'>
							Speed
						</span>
					</div>
					<span className='font-bold tracking-wide'>
						{heroInfo.heroData.powerstats.speed}
					</span>
				</div>
				<div className='relative'>
					<div className='w-full absolute bg-orange-50 h-2 rounded-lg z-10'></div>
					<div
						style={{ width: `${heroInfo.heroData.powerstats.speed}%` }}
						className='absolute bg-orange-200 h-2 rounded-lg z-20'
					></div>
				</div>
			</li>
			<li>
				<div className='flex justify-between'>
					<div className='flex gap-2'>
						<GiMuscularTorso size='1.5rem' color='rgb(249, 115, 22)' />
						<span className='font-bold text-orange-500 tracking-wide'>
							Strength
						</span>
					</div>
					<span className='font-bold tracking-wide'>
						{heroInfo.heroData.powerstats.strength}
					</span>
				</div>
				<div className='relative'>
					<div className='w-full absolute bg-orange-50 h-2 rounded-lg z-10'></div>
					<div
						style={{ width: `${heroInfo.heroData.powerstats.strength}%` }}
						className='absolute bg-orange-200 h-2 rounded-lg z-20 transition-all duration-500'
					></div>
				</div>
			</li>
		</ul>
	);
};

export default Powerstats;
