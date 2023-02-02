import useSearchHeroBox from '../lib/hooks/useSearchHeroBox';
import BoxListData from './BoxListData';
import InputSearch from './forms/InputSearch';
import LoadingIcon from './icons/LoadingIcon';
import Search from './icons/search';
import Xmark from './icons/xmark';

const SearchBox = () => {
	const { searchBox, setResetSearchBox, setSearchTerm } = useSearchHeroBox();

	return (
		<div className='relative'>
			<div className='max-w-sm relative'>
				<InputSearch
					className='border-2 border-gray-500 px-9 py-1 my-4 focus:ring-1 ring-gray-500 peer'
					placeholder='Search...'
					value={searchBox.search}
					onChange={evt => {
						setSearchTerm(evt.target.value);
						if (evt.target.value === '') setResetSearchBox();
					}}
				/>
				<span className='absolute left-2 top-1/2 -translate-y-1/2 peer-focus:text-red-500 transition-all'>
					<Search className='h-5' />
				</span>

				{searchBox.search &&
					(searchBox.loading ? (
						<span className='absolute right-2 top-1/2 -translate-y-1/2 peer-focus:text-red-500 transition-all'>
							<LoadingIcon className='h-5 animate-spin' />
						</span>
					) : (
						<span
							onClick={() => setResetSearchBox()}
							className='absolute right-2 top-1/2 -translate-y-1/2 peer-focus:text-red-500 transition-all'
						>
							<Xmark className='h-5' />
						</span>
					))}
			</div>
			<BoxListData searchBox={searchBox} resetSearchBox={setResetSearchBox} />
		</div>
	);
};

export default SearchBox;
