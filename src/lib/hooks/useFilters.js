import { useEffect, useState } from 'react';
import { loadBoxByName } from '../api/herosApi';

const INITIAL_FILTER = {
	data: [],
	loading: true,
	error: false
};

const useFilters = search => {
	const [filters, setFilter] = useState(INITIAL_FILTER);

	const setData = newData =>
		setFilter({
			data: newData,
			error: false,
			loading: false
		});

	const setError = () =>
		setFilter({
			loading: false,
			error: true,
			data: []
		});

	const resetFilter = () => setFilter({ ...INITIAL_FILTER });

	useEffect(() => {
		if (!search) return;
		const controller = new AbortController();
		const idTimeOut = setTimeout(() => {
			loadSearch(search, setData, setError, controller.signal);
		}, 300);

		return () => {
			clearTimeout(idTimeOut);
			controller.abort();
		};
	}, [search]);

	return {
		filters,
		resetFilter
	};
};

const loadSearch = async (search, setData, setError, signal) => {
	const data = await loadBoxByName(search, signal);
	console.log(data);
	if (data.response === 'success') {
		setData(data.results);
	}
	if (data.response === 'error') {
		setError();
	}
};

export default useFilters;
