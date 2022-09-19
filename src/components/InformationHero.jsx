import { VIEW_FEATURES } from '../constants/viewFeatures';
import { HERO_FEATURE } from '../lib/hero/heroFeature';
import useStats from '../lib/hooks/useStats';
import Biography from './Biography';
import Button from './buttons/Button';
import Powerstats from './Powerstats';

const VIEW = {
	[VIEW_FEATURES.POWERSTATS]: <Powerstats />,
	[VIEW_FEATURES.BIOGRAPHY]: <Biography />
};

const InformationHero = () => {
	const {
		currentView,
		setPowerstats,
		setBiography,
		setAppearance,
		setWork,
		setConnections
	} = useStats();

	console.log(currentView);

	return (
		<div className='px-5'>
			<ul className='flex flex-wrap items-center justify-evenly my-3 gap-3'>
				<Button onClick={setPowerstats}>{HERO_FEATURE.POWERSTATS}</Button>
				<Button onClick={setBiography}>{HERO_FEATURE.BIOGRAPHY}</Button>
				<Button onClick={setAppearance}>{HERO_FEATURE.APPEARANCE}</Button>
				<Button onClick={setWork}>{HERO_FEATURE.WORK}</Button>
				<Button onClick={setConnections}>{HERO_FEATURE.CONNECTIONS}</Button>
			</ul>
			{VIEW[currentView]}
		</div>
	);
};

export default InformationHero;
