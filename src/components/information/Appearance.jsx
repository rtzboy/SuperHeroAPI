import { useContext } from 'react';
import { HeroDataContext } from '../../lib/contexts/HeroDataContext';

const Appearance = () => {
	const { heroInfo } = useContext(HeroDataContext);

	if (heroInfo.loading) return <p>Cargando...</p>;
	if (!heroInfo.heroData) return;

	console.log(' - Appearance');

	return (
		<ul className='flex gap-2 flex-col justify-evenly max-w-[580px] lg:max-w-max'>
			<li>
				<span className='font-semibold text-green-500 dark:text-violet-100 tracking-wide'>
					Gender:{' '}
				</span>
				<span className='tracking-wide text-blue-400 dark:text-white'>
					{heroInfo.heroData.appearance.gender}
				</span>
			</li>
			<li>
				<span className='font-semibold text-green-500 dark:text-violet-100 tracking-wide'>
					Race:{' '}
				</span>
				<span className='tracking-wide text-blue-400 dark:text-white'>
					{heroInfo.heroData.appearance.race}
				</span>
			</li>
			<li>
				<span className='font-semibold text-green-500 dark:text-violet-100 tracking-wide'>
					Height:{' '}
				</span>
				<span className='tracking-wide text-blue-400 dark:text-white'>
					{heroInfo.heroData.appearance.height[1]}
				</span>
				<span className='dark:text-white'> - </span>
				<span className='tracking-wide text-blue-400 dark:text-white'>
					{heroInfo.heroData.appearance.height[0]}
				</span>
			</li>
			<li>
				<span className='font-semibold text-green-500 dark:text-violet-100 tracking-wide'>
					Weight:{' '}
				</span>
				<span className='tracking-wide text-blue-400 dark:text-white'>
					{heroInfo.heroData.appearance.weight[1]}
				</span>
				<span className='dark:text-white'> - </span>
				<span className='tracking-wide text-blue-400 dark:text-white'>
					{heroInfo.heroData.appearance.weight[0]}
				</span>
			</li>
			<li>
				<span className='font-semibold text-green-500 dark:text-violet-100 tracking-wide'>
					Eye Color:{' '}
				</span>
				<span className='tracking-wide text-blue-400 dark:text-white'>
					{heroInfo.heroData.appearance['eye-color']}
				</span>
			</li>
			<li>
				<span className='font-semibold text-green-500 dark:text-violet-100 tracking-wide'>
					Hair Color:{' '}
				</span>
				<span className='tracking-wide text-blue-400 dark:text-white'>
					{heroInfo.heroData.appearance['hair-color']}
				</span>
			</li>
		</ul>
	);
};

export default Appearance;
