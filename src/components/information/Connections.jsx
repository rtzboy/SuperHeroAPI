import { useContext } from 'react';
import { HeroDataContext } from '../../lib/contexts/HeroDataContext';

const Connections = () => {
	const { heroInfo } = useContext(HeroDataContext);

	if (heroInfo.loading) return <p>Cargando...</p>;
	if (!heroInfo.heroData) return;

	return (
		<ul className='flex gap-2 flex-col justify-evenly'>
			<li>
				<span className='font-semibold text-green-400 tracking-wide'>
					Group Affiliation:{' '}
				</span>
				<span className='tracking-wide text-blue-300'>
					{heroInfo.heroData.connections['group-affiliation']
						.split(';')
						.join(' \\ ')}
				</span>
			</li>
			<li>
				<span className='font-semibold text-green-400 tracking-wide'>
					Relatives:{' '}
				</span>
				<span className='tracking-wide text-blue-300'>
					{heroInfo.heroData.connections.relatives}
				</span>
			</li>
		</ul>
	);
};

export default Connections;
