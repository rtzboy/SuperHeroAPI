const SearchRowHero = ({ data, setSearch, setIdHero, resetFilter }) => (
	<div>
		{data.map(hero => (
			<div
				className='flex items-center justify-start py-2 hover:bg-orange-200/80
				 bg-orange-100/90 cursor-pointer'
				key={hero.id}
				onClick={() => {
					setSearch('');
					resetFilter();
					setIdHero(hero.id);
				}}
			>
				<img
					className='block w-12 h-12 rounded-full mx-3'
					src={hero.image.url}
					alt={hero.name}
				/>
				<p>{hero.name}</p>
			</div>
		))}
	</div>
);

export default SearchRowHero;
