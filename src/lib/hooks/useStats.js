import { useState } from 'react';
import { VIEW_FEATURES } from '../../constants/viewFeatures';

const useStats = () => {
	const [viewStats, setViewStats] = useState(VIEW_FEATURES.POWERSTATS);

	const setPowerstats = () => setViewStats(VIEW_FEATURES.POWERSTATS);

	const setBiography = () => setViewStats(VIEW_FEATURES.BIOGRAPHY);

	const setAppearance = () => setViewStats(VIEW_FEATURES.APPEARANCE);

	const setWork = () => setViewStats(VIEW_FEATURES.WORK);

	const setConnections = () => setViewStats(VIEW_FEATURES.CONNECTIONS);

	return {
		currentView: viewStats,
		setPowerstats,
		setBiography,
		setAppearance,
		setWork,
		setConnections
	};
};

export default useStats;
