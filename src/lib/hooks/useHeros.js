import { useEffect, useState } from 'react';
import { loadHeroById } from '../api/herosApi';

const useHeros = () => {
	const [hero, setHero] = useState({
		idHero: 1,
		data: [],
		loading: true,
		error: false
	});

	const setIdHero = newId =>
		setHero({
			idHero: newId,
			dataInfo: [],
			loading: true,
			error: false
		});

	const setDataHero = newInfo =>
		setHero(prev => ({
			...prev,
			data: newInfo,
			loading: false,
			error: false
		}));

	const setErrorHero = newError =>
		setHero({
			idHero: 99999,
			data: newError,
			loading: false,
			error: true
		});

	useEffect(() => {
		const controller = new AbortController();
		loadInitialHero(hero.idHero, setDataHero, setErrorHero, controller.signal);
	}, [hero.idHero]);

	return {
		heroData: hero.data,
		heroLoading: hero.loading,
		heroError: hero.error,
		setIdHero
	};
};

const loadInitialHero = async (idHero, setDataHero, setErrorHero, signal) => {
	const data = await loadHeroById(idHero, signal);

	if (data.response === 'success') {
		setDataHero(data);
	}
	if (data.response === 'error') {
		setErrorHero(data);
	}
};

export default useHeros;
