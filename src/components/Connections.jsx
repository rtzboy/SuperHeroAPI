import { useContext } from 'react';
import { HeroDataContext } from '../lib/contexts/HeroDataContext';

const Connections = () => {
	const { heroData } = useContext(HeroDataContext);

	return (
		<div className='flex gap-4 flex-col justify-evenly'>
			<div>Group Affiliation: {heroData.connections['group-affiliation']}</div>
			<div>Relatives: {heroData.connections.relatives}</div>
		</div>
	);
};

export default Connections;
