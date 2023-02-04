import useTheme from '../lib/hooks/useTheme';

const DarkTheme = () => {
	const { theme, setThemeDark } = useTheme();
	return (
		<div className='absolute right-4 top-4'>
			<select
				value={theme}
				className='outline-none'
				onChange={evt => {
					setThemeDark(evt.target.value);
				}}
			>
				<option value='dark'>dark</option>
				<option value='light'>light</option>
			</select>
		</div>
	);
};

export default DarkTheme;
