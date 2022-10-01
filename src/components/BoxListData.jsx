import LoadingIcon from './icons/LoadingIcon';
import SearchRowHero from './SearchRowHero';

const BoxListData = ({
	search,
	setSearch,
	filters,
	setIdHero,
	resetFilter
}) => {
	if (!search) return;

	return (
		<div
			className='w-full h-[25vh] absolute z-50 top-16 overflow-y-auto
		 bg-slate-200/95 rounded-xl'
		>
			{filters.loading ? (
				<div className='w-full h-full flex justify-center items-center'>
					<LoadingIcon className='h-7 animate-spin' />
				</div>
			) : (
				<SearchRowHero
					data={filters.data}
					setSearch={setSearch}
					setIdHero={setIdHero}
					resetFilter={resetFilter}
				/>
			)}
			{filters.error ? <p>NotFound!</p> : ''}
		</div>
	);
};

export default BoxListData;
