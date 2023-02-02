import { useContext } from 'react';
import { HeroDataContext } from '../../lib/contexts/HeroDataContext';

const Appearance = () => {
	const { heroInfo } = useContext(HeroDataContext);

	if (heroInfo.loading) return <p>Cargando...</p>;
	if (!heroInfo.heroData) return;

	console.log(heroInfo);

	return (
		<ul className='flex gap-2 flex-col justify-evenly'>
			<li>
				<span className='font-semibold text-green-400 tracking-wide'>
					Gender:{' '}
				</span>
				<span className='tracking-wide text-blue-300'>
					{heroInfo.heroData.appearance.gender}
				</span>
			</li>
			<li>
				<span className='font-semibold text-green-400 tracking-wide'>
					Race:{' '}
				</span>
				<span className='tracking-wide text-blue-300'>
					{heroInfo.heroData.appearance.race}
				</span>
			</li>
			<li>
				<span className='font-semibold text-green-400 tracking-wide'>
					Height:{' '}
				</span>
				<span className='tracking-wide text-blue-300'>
					{heroInfo.heroData.appearance.height[1]}
				</span>
				<span> - </span>
				<span className='tracking-wide text-blue-300'>
					{heroInfo.heroData.appearance.height[0]}
				</span>
			</li>
			<li>
				<span className='font-semibold text-green-400 tracking-wide'>
					Weight:{' '}
				</span>
				<span className='tracking-wide text-blue-300'>
					{heroInfo.heroData.appearance.weight[1]}
				</span>
				<span> - </span>
				<span className='tracking-wide text-blue-300'>
					{heroInfo.heroData.appearance.weight[0]}
				</span>
			</li>
			<li>
				<span className='font-semibold text-green-400 tracking-wide'>
					Eye Color:{' '}
				</span>
				<span className='tracking-wide text-blue-300'>
					{heroInfo.heroData.appearance['eye-color']}
				</span>
			</li>
			<li>
				<span className='font-semibold text-green-400 tracking-wide'>
					Hair Color:{' '}
				</span>
				<span className='tracking-wide text-blue-300'>
					{heroInfo.heroData.appearance['hair-color']}
				</span>
			</li>
		</ul>
	);
};

export default Appearance;
