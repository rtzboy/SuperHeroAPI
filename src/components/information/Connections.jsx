import { useContext } from 'react';
import { HeroDataContext } from '../../lib/contexts/HeroDataContext';

const Connections = () => {
	const { heroInfo } = useContext(HeroDataContext);

	if (heroInfo.loading) return <p>Cargando...</p>;
	if (!heroInfo.heroData) return;

	return (
		<ul className='flex gap-2 flex-col justify-evenly'>
			<li>
				<span className='font-bold text-orange-500 tracking-wide'>
					Group Affiliation:{' '}
				</span>
				<span className='tracking-wide'>
					{heroInfo.heroData.connections['group-affiliation']
						.split(';')
						.join(' \\ ')}
				</span>
			</li>
			<li>
				<span className='font-bold text-orange-500 tracking-wide'>
					Relatives:{' '}
				</span>
				<span className='tracking-wide'>
					{heroInfo.heroData.connections.relatives}
				</span>
			</li>
		</ul>
	);
};

export default Connections;
