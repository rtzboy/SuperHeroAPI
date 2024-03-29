import { useContext } from 'react';
import { HeroDataContext } from '../../lib/contexts/HeroDataContext';

const Biography = () => {
	const { heroInfo } = useContext(HeroDataContext);

	if (heroInfo.loading) return <p>Cargando...</p>;
	if (!heroInfo.heroData) return;

	return (
		<ul className='flex gap-2 flex-col justify-evenly max-w-[580px] lg:max-w-max'>
			<li>
				<span className='font-semibold text-green-500 dark:text-violet-100 tracking-wide'>
					Full Name:{' '}
				</span>
				<span className='tracking-wide text-blue-400 dark:text-white'>
					{heroInfo.heroData.biography['full-name']}
				</span>
			</li>
			<li>
				<span className='font-semibold text-green-500 dark:text-violet-100 tracking-wide'>
					Alter Egos:{' '}
				</span>
				<span className='tracking-wide text-blue-400 dark:text-white'>
					{heroInfo.heroData.biography['alter-egos']}
				</span>
			</li>
			<li>
				<span className='font-semibold text-green-500 dark:text-violet-100 tracking-wide'>
					Aliases:{' '}
				</span>
				<span className='tracking-wide text-blue-400 dark:text-white'>
					{heroInfo.heroData.biography.aliases.join(' \\ ')}
				</span>
			</li>
			<li>
				<span className='font-semibold text-green-500 dark:text-violet-100 tracking-wide'>
					Place Of Birth:{' '}
				</span>
				<span className='tracking-wide text-blue-400 dark:text-white'>
					{heroInfo.heroData.biography['place-of-birth']}
				</span>
			</li>
			<li>
				<span className='font-semibold text-green-500 dark:text-violet-100 tracking-wide'>
					First Appearance:{' '}
				</span>
				<span className='tracking-wide text-blue-400 dark:text-white'>
					{heroInfo.heroData.biography['first-appearance']}
				</span>
			</li>
			<li>
				<span className='font-semibold text-green-500 dark:text-violet-100 tracking-wide'>
					Publisher:{' '}
				</span>
				<span className='tracking-wide text-blue-400 dark:text-white'>
					{heroInfo.heroData.biography.publisher}
				</span>
			</li>
			<li>
				<span className='font-semibold text-green-500 dark:text-violet-100 tracking-wide'>
					Alignment:{' '}
				</span>
				<span className='tracking-wide text-blue-400 dark:text-white'>
					{heroInfo.heroData.biography.alignment}
				</span>
			</li>
		</ul>
	);
};

export default Biography;
