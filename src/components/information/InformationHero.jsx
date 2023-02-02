import { useState } from 'react';
import { BiBuildings, BiIdCard } from 'react-icons/bi';
import { GiBroadsword, GiInternalInjury } from 'react-icons/gi';
import { RiTeamLine } from 'react-icons/ri';
import Appearance from './Appearance';
import Biography from './Biography';
import Connections from './Connections';
import Powerstats from './Powerstats';
import Work from './Work';

const INFO_COMPONENTS = [
	{ id: 1, infoName: 'Appearance', infoComp: <Appearance /> },
	{ id: 2, infoName: 'Biography', infoComp: <Biography /> },
	{ id: 3, infoName: 'Connections', infoComp: <Connections /> },
	{ id: 4, infoName: 'Powerstats', infoComp: <Powerstats /> },
	{ id: 5, infoName: 'Work', infoComp: <Work /> }
];

export const LIST_INFORMATION = [
	{ id: 1, info: 'Appearance', icon: <GiInternalInjury size='1.5rem' /> },
	{ id: 2, info: 'Biography', icon: <BiIdCard size='1.5rem' /> },
	{ id: 3, info: 'Connections', icon: <RiTeamLine size='1.5rem' /> },
	{ id: 4, info: 'Powerstats', icon: <GiBroadsword size='1.5rem' /> },
	{ id: 5, info: 'Work', icon: <BiBuildings size='1.5rem' /> }
];

const InformationHero = () => {
	const [toogle, setToogle] = useState(1);

	return (
		<div className='mt-5 lg:mt-0'>
			<nav className='sm:block hidden'>
				<ul className='flex justify-evenly items-center rounded-lg p-1 bg-green'>
					{LIST_INFORMATION.map(list => (
						<li
							key={list.id}
							onClick={() => setToogle(list.id)}
							className='p-1 relative rounded-lg w-full h-full grid place-items-center text-center select-none cursor-pointer'
							style={{ color: toogle === list.id ? 'white' : '#191919' }}
						>
							<div className='z-20 flex gap-1'>
								<span>{list.icon}</span>
								<span>{list.info}</span>
							</div>
							<div
								className={`h-full inset-0 absolute rounded-lg transition-all duration-500 ${
									toogle === list.id ? 'bg-blue w-full' : 'w-0'
								}`}
							></div>
						</li>
					))}
				</ul>
			</nav>
			{/* mobile */}
			<nav className='sm:hidden'>
				<ul className='flex justify-evenly items-center rounded-lg p-1 bg-green'>
					{LIST_INFORMATION.map(list => (
						<li
							key={list.id}
							onClick={() => setToogle(list.id)}
							className='p-1 relative rounded-lg w-full h-full grid place-items-center text-center select-none cursor-pointer'
							style={{ color: toogle === list.id ? 'white' : '#191919' }}
						>
							<div className='z-20'>{list.icon}</div>
							<div
								className={`h-full absolute rounded-full transition-all duration-500 ${
									toogle === list.id ? 'bg-blue w-full' : 'w-0'
								}`}
							></div>
						</li>
					))}
				</ul>
			</nav>
			<div className='sm:block relative mt-2 hidden'>
				{INFO_COMPONENTS.map(component => (
					<div
						key={component.id}
						className={`leading-relaxed transition-all duration-500 ${
							toogle === component.id
								? 'opacity-100 relative visible scale-100 top-auto left-auto'
								: 'opacity-0 invisible absolute scale-90 inset-0 overflow-hidden'
						}`}
					>
						{component.infoComp}
					</div>
				))}
			</div>
			<div className='relative mt-2 sm:hidden'>
				{INFO_COMPONENTS.map(component => (
					<div
						key={component.id}
						className={`leading-relaxed transition-all duration-500 ${
							toogle === component.id
								? 'opacity-100 relative visible scale-100 top-auto left-auto'
								: 'opacity-0 invisible absolute scale-90 inset-0 overflow-hidden'
						}`}
					>
						<span className='block text-2xl font-semibold text-blue-300 tracking-wide mb-2'>
							{component.infoName}
						</span>
						{component.infoComp}
					</div>
				))}
			</div>
		</div>
	);
};

/*  */
export default InformationHero;
