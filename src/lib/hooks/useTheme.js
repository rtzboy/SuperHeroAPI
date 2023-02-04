import { useEffect, useState } from 'react';
import {
	changeTheme,
	checkDarkTheme,
	getThemeValue
} from '../helpers/local_storage';

const useTheme = () => {
	const initialState = () => getThemeValue('theme') || 'light';
	const [theme, setTheme] = useState(initialState);

	const setThemeDark = theme => {
		setTheme(theme);
		changeTheme(theme);
	};

	useEffect(() => {
		checkDarkTheme(theme);
	}, [theme]);

	return { theme, setThemeDark };
};

export default useTheme;
