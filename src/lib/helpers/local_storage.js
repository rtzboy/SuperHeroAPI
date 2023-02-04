const getThemeValue = key => {
	if (!localStorage) return;
	try {
		return localStorage.getItem(key);
	} catch (err) {
		console.error(`Error getting item ${key} from localStorage`, err);
	}
};

const checkDarkTheme = theme => {
	if (
		theme === 'dark' ||
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) &&
			window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
};

const changeTheme = theme => {
	if (theme === 'os') localStorage.removeItem('theme');
	else localStorage.setItem('theme', theme);
};

export { checkDarkTheme, changeTheme, getThemeValue };
