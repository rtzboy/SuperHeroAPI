import { useContext } from 'react';
import { HeroDataContext } from '../lib/contexts/HeroDataContext';

const SearchRowHero = ({ data, resetSearchBox }) => {
	const { setHeroById } = useContext(HeroDataContext);

	if (!data) return;

	return (
		<>
			{data.map(hero => (
				<div
					className='flex items-center justify-start py-2 dark:text-white hover:bg-green/40 hover:text-blue-300 cursor-pointer transition-all focus:bg-green/40'
					key={hero.id}
					onClick={() => {
						setHeroById(hero.id);
						resetSearchBox();
					}}
				>
					<img
						className='block w-12 h-12 rounded-full mx-3 object-cover'
						src={hero.image}
						alt={hero.name}
						onError={evt => {
							evt.currentTarget.src =
								'https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg';
						}}
					/>
					<p>{hero.name}</p>
				</div>
			))}
		</>
	);
};

export default SearchRowHero;
