import ErrorComp from './ErrorComp';
import SearchRowHero from './SearchRowHero';

const BoxListData = ({ searchBox, resetSearchBox }) => {
	if (!searchBox.search) return;
	return (
		<div className='w-full max-w-sm max-h-[30vh] absolute z-50 top-14 overflow-y-auto bg-gray-100 rounded-xl'>
			{searchBox.loading && null}
			{searchBox.error && <ErrorComp err={searchBox.error} />}
			<SearchRowHero data={searchBox.rowData} resetSearchBox={resetSearchBox} />
		</div>
	);
};

export default BoxListData;
