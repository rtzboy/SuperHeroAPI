import { useState } from 'react';
import useFilters from '../lib/hooks/useFilters';
import BoxListData from './BoxListData';
import InputSearch from './forms/InputSearch';

const SearchBox = ({ setIdHero }) => {
	const [search, setSearch] = useState('');

	const { filters, resetFilter } = useFilters(search);
	console.log(' - render SearchBox');

	return (
		<div className='w-1/2 relative'>
			<InputSearch
				placeholder='Search...'
				value={search}
				onChange={evt => {
					setSearch(evt.target.value);
					resetFilter();
				}}
			/>
			<BoxListData
				search={search}
				setSearch={setSearch}
				filters={filters}
				setIdHero={setIdHero}
				resetFilter={resetFilter}
			/>
		</div>
	);
};

export default SearchBox;
