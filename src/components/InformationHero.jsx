import { useState } from 'react';
import Appearance from './Appearance';
import Biography from './Biography';
import Connections from './Connections';
import Powerstats from './Powerstats';
import Work from './Work';

const InformationHero = () => {
	const [toogle, setToogle] = useState(1);

	return (
		<div className='px-5'>
			<div className='tab'>
				<nav>
					<ul className='flex justify-evenly items-center rounded-lg p-1 bg-orange-50'>
						<li
							onClick={() => setToogle(1)}
							className={`p-1 relative rounded-lg w-full h-full grid place-items-center text-center select-none cursor-pointer`}
						>
							<div className='z-20'>Appearance</div>
							<div
								className={`h-full inset-0 absolute rounded-lg transition-all duration-500 ${
									toogle === 1 ? 'bg-orange-200 w-full' : 'w-0'
								}`}
							></div>
						</li>
						<li
							onClick={() => setToogle(2)}
							className={`p-1 relative rounded-lg w-full h-full grid place-items-center text-center select-none cursor-pointer transition-all`}
						>
							<div className='z-20'>Biography</div>
							<div
								className={`h-full inset-0 absolute rounded-lg transition-all duration-500 ${
									toogle === 2 ? 'bg-orange-200 w-full' : 'w-0'
								}`}
							></div>
						</li>
						<li
							onClick={() => setToogle(3)}
							className={`p-1 relative rounded-lg w-full h-full grid place-items-center text-center select-none cursor-pointer`}
						>
							<div className='z-20'>Connections</div>
							<div
								className={`h-full inset-0 absolute rounded-lg transition-all duration-500 ${
									toogle === 3 ? 'bg-orange-200 w-full' : 'w-0'
								}`}
							></div>
						</li>
						<li
							onClick={() => setToogle(4)}
							className={`p-1 relative rounded-lg w-full h-full grid place-items-center text-center select-none cursor-pointer`}
						>
							<div className='z-20'>Powerstats</div>
							<div
								className={`h-full inset-0 absolute rounded-lg transition-all duration-500 ${
									toogle === 4 ? 'bg-orange-200 w-full' : 'w-0'
								}`}
							></div>
						</li>
						<li
							onClick={() => setToogle(5)}
							className={`p-1 relative rounded-lg w-full h-full grid place-items-center text-center select-none cursor-pointer`}
						>
							<div className='z-20'>Work</div>
							<div
								className={`h-full inset-0 absolute rounded-lg transition-all duration-500 ${
									toogle === 5 ? 'bg-orange-200 w-full' : 'w-0'
								}`}
							></div>
						</li>
					</ul>
				</nav>
				<div className='block relative w-full overflow-hidden m-2'>
					<div
						className={`leading-relaxed transition-all duration-500 ${
							toogle === 1
								? 'opacity-100 relative visible transform-none top-auto left-auto'
								: 'opacity-0 invisible absolute translate-y-24 top-0 left-0'
						}`}
					>
						<Appearance />
					</div>
					<div
						className={`leading-relaxed transition-all duration-500 ${
							toogle === 2
								? 'opacity-100 relative visible transform-none top-auto left-auto'
								: 'opacity-0 invisible absolute translate-y-24 top-0 left-0'
						}`}
					>
						<Biography />
					</div>
					<div
						className={`leading-relaxed transition-all duration-500 ${
							toogle === 3
								? 'opacity-100 relative visible transform-none top-auto left-auto'
								: 'opacity-0 invisible absolute translate-y-24 top-0 left-0'
						}`}
					>
						<Connections />
					</div>
					<div
						className={`leading-relaxed transition-all duration-500 ${
							toogle === 4
								? 'opacity-100 relative visible transform-none top-auto left-auto'
								: 'opacity-0 invisible absolute translate-y-24 top-0 left-0'
						}`}
					>
						<Powerstats />
					</div>
					<div
						className={`leading-relaxed transition-all duration-500 ${
							toogle === 5
								? 'opacity-100 relative visible transform-none top-auto left-auto'
								: 'opacity-0 invisible absolute translate-y-24 top-0 left-0'
						}`}
					>
						<Work />
					</div>
				</div>
			</div>
		</div>
	);
};

export default InformationHero;
