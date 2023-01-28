import { VIEW_FEATURES } from '../constants/viewFeatures';
import { HERO_FEATURE } from '../lib/hero/heroFeature';
import useStats from '../lib/hooks/useStats';
import Appearance from './Appearance';
import Biography from './Biography';
import Button from './buttons/Button';
import Connections from './Connections';
import Powerstats from './Powerstats';
import Work from './Work';

const VIEW = {
	[VIEW_FEATURES.POWERSTATS]: <Powerstats />,
	[VIEW_FEATURES.BIOGRAPHY]: <Biography />,
	[VIEW_FEATURES.APPEARANCE]: <Appearance />,
	[VIEW_FEATURES.WORK]: <Work />,
	[VIEW_FEATURES.CONNECTIONS]: <Connections />
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
