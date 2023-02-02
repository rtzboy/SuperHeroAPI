import { useEffect, useState } from 'react';
import { loadBoxByName } from '../api/herosApi';

// const INITIAL_FILTER = {
// 	search: "",
// 	data: undefined,
// 	loading: true,
// 	error: false
// };

const useSearchHeroBox = () => {
	const [searchBox, setSearchBox] = useState({
		search: '',
		rowData: undefined,
		loading: undefined,
		error: undefined
	});

	const setStartSearch = () => {
		setSearchBox(prev => ({ ...prev, loading: true, error: false }));
	};

	const setRowData = data => {
		setSearchBox(prev => ({ ...prev, rowData: data, loading: false }));
	};

	const setErrSearchBox = error => {
		setSearchBox(prev => ({
			...prev,
			rowData: undefined,
			loading: false,
			error
		}));
	};

	const setSearchTerm = search => {
		setSearchBox(prev => ({ ...prev, search, loading: true }));
	};

	const setResetSearchBox = () =>
		setSearchBox({
			search: '',
			rowData: undefined,
			loading: undefined,
			error: undefined
		});

	useEffect(() => {
		if (!searchBox.search) return;
		const controller = new AbortController();
		const idTimeOut = setTimeout(() => {
			searchConsultHero(
				searchBox.search,
				setStartSearch,
				setRowData,
				setErrSearchBox,
				controller.signal
			);
		}, 350);

		return () => {
			clearTimeout(idTimeOut);
			controller.abort();
		};
	}, [searchBox.search]);

	return {
		searchBox,
		setResetSearchBox,
		setSearchTerm
	};
};

const searchConsultHero = async (
	search,
	setStartSearch,
	setRowData,
	setErrSearchBox,
	signal
) => {
	setStartSearch();

	const { response, results, error } = await loadBoxByName(search, signal);

	if (response === 'success') {
		setRowData(results);
	} else {
		setErrSearchBox(error);
	}
};

export default useSearchHeroBox;
