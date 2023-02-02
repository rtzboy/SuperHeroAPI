import { useContext } from 'react';
import { HeroDataContext } from '../../lib/contexts/HeroDataContext';

const Work = () => {
	const { heroInfo } = useContext(HeroDataContext);

	if (heroInfo.loading) return <p>Cargando...</p>;
	if (!heroInfo.heroData) return;

	return (
		<ul className='flex flex-col justify-evenly'>
			<li>
				<span className='font-semibold text-green-400 tracking-wide'>
					Occupation:{' '}
				</span>
				<span className='tracking-wide text-blue-300'>
					{heroInfo.heroData.work.occupation}
				</span>
			</li>
			<li>
				<span className='font-semibold text-green-400 tracking-wide'>
					Base:{' '}
				</span>
				<span className='tracking-wide text-blue-300'>
					{heroInfo.heroData.work.base}
				</span>
			</li>
		</ul>
	);
};

export default Work;
