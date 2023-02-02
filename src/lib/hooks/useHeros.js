import { useEffect, useState } from 'react';
import { loadHeroById } from '../api/herosApi';

const useHeros = () => {
	const [heroInfo, setHeroInfo] = useState({
		id: 1,
		heroData: undefined,
		loading: undefined,
		error: undefined
	});

	const setStartInitial = () => {
		setHeroInfo(prev => ({ ...prev, loading: true, error: false }));
	};

	const setHeroById = id =>
		setHeroInfo(prev => ({
			...prev,
			id
		}));

	const setHeroSuccess = heroData =>
		setHeroInfo(prev => ({
			...prev,
			heroData,
			loading: false
		}));

	const setHeroError = error =>
		setHeroInfo({
			id: 99999,
			heroData: undefined,
			loading: false,
			error
		});

	useEffect(() => {
		const controller = new AbortController();
		loadInitialHero(
			heroInfo.id,
			setStartInitial,
			setHeroSuccess,
			setHeroError,
			controller.signal
		);
	}, [heroInfo.id]);

	return {
		heroInfo,
		setHeroById
	};
};

const loadInitialHero = async (
	idHero,
	setStartInitial,
	setHeroSuccess,
	setHeroError,
	signal
) => {
	setStartInitial();

	const { response, results, error } = await loadHeroById(idHero, signal);

	if (response === 'success') {
		setHeroSuccess(results[0]);
	} else {
		setHeroError(error);
	}
};

export default useHeros;
