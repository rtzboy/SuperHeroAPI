import { useContext, useState } from 'react';
import { HeroDataContext } from '../lib/contexts/HeroDataContext';
import useFilters from '../lib/hooks/useFilters';
import BoxListData from './BoxListData';
import InputSearch from './forms/InputSearch';
import Search from './icons/search';

const SearchBox = () => {
	const { setIdHero } = useContext(HeroDataContext);
	const [search, setSearch] = useState('');

	const { filters, resetFilter } = useFilters(search);

	return (
		<div className='w-1/2 relative'>
			<Search className='absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500' />
			<InputSearch
				className='pl-10 border-orange-200 border-2 focus:ring-2 focus:ring-orange-200 focus:outline-none'
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
