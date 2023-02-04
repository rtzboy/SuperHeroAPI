import useTheme from '../lib/hooks/useTheme';
import ButtonDarkTheme from './ButtonDarkTheme';

const DarkTheme = () => {
	const { theme, setThemeDark } = useTheme();

	return (
		<div className='absolute right-5 top-5'>
			<select
				value={theme}
				className='lg:block hidden outline-none px-2 rounded-md border-[1px] border-blue-400'
				onChange={evt => {
					setThemeDark(evt.target.value);
				}}
			>
				<option value='dark'>Dark</option>
				<option value='light'>Light</option>
				<option value='os'>OS</option>
			</select>
			<ButtonDarkTheme theme={theme} setThemeDark={setThemeDark} />
		</div>
	);
};

export default DarkTheme;
