import { useState } from 'react';
import { CgScreen } from 'react-icons/cg';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';

const ButtonDarkTheme = ({ theme, setThemeDark }) => {
	const [toggle, setToggle] = useState(false);

	return (
		<div className='lg:hidden flex flex-col items-center relative'>
			<span
				className='block mr-2 text-black-600 dark:text-blue-200 cursor-pointer'
				onClick={() => setToggle(!toggle)}
			>
				{theme === 'dark' ? (
					<HiOutlineMoon size='1.5rem' />
				) : theme === 'light' ? (
					<HiOutlineSun size='1.5rem' />
				) : (
					<CgScreen size='1.5rem' />
				)}
			</span>
			<ul
				className={`flex-col gap-2 p-2 rounded shadow-sm shadow-gray absolute top-8 right-0 z-50 text-black-600 bg-white dark:bg-black-500 ${
					toggle ? 'flex' : 'hidden'
				}`}
			>
				<li
					className='cursor-pointer hover:text-blue-300 dark:text-blue-200 dark:hover:text-white-200'
					onClick={() => {
						setThemeDark('light');
						setToggle(!toggle);
					}}
				>
					<HiOutlineSun size='1.5rem' />
				</li>
				<li
					className='cursor-pointer hover:text-blue-300 dark:text-blue-200 dark:hover:text-white-200'
					onClick={() => {
						setThemeDark('dark');
						setToggle(!toggle);
					}}
				>
					<HiOutlineMoon size='1.5rem' />
				</li>
				<li
					className='cursor-pointer hover:text-blue-300 dark:text-blue-200 dark:hover:text-white-200'
					onClick={() => {
						setThemeDark('os');
						setToggle(!toggle);
					}}
				>
					<CgScreen size='1.5rem' />
				</li>
			</ul>
		</div>
	);
};

export default ButtonDarkTheme;
