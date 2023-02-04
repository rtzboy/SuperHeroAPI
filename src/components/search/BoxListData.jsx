import ErrorComp from '../ErrorComp';
import SearchRowHero from './SearchRowHero';

const BoxListData = ({ searchBox, resetSearchBox }) => {
	if (!searchBox.search) return;
	return (
		<div className='w-full max-w-sm max-h-[30vh] absolute shadow-md dark:shadow-black-600 shadow-blue/50 z-50 top-14 overflow-y-auto bg-white/95 rounded-xl dark:bg-black-600/95'>
			{searchBox.loading && null}
			{searchBox.error && <ErrorComp err={searchBox.error} />}
			<SearchRowHero data={searchBox.rowData} resetSearchBox={resetSearchBox} />
		</div>
	);
};

export default BoxListData;
