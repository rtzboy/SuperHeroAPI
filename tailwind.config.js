/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				serif: ['Poppins', 'serif']
			}
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: {
				DEFAULT: '#000',
				500: '#1e293b',
				600: '#202a3b',
				800: '#0D1426'
			},
			white: {
				DEFAULT: '#fff',
				200: '#c9faff'
			},
			gray: '#878787',
			blue: {
				DEFAULT: '#1e3a8a',
				50: '#46c3fa',
				100: '#c1d9f7',
				200: '#13a9ed',
				300: '#113B71',
				400: '#0E1F4E'
			},
			green: {
				DEFAULT: '#E2E5CE',
				100: '#BFC4A1',
				200: '#ACB388',
				300: '#708a63',
				400: '#4D6242',
				500: '#323F2B',
				600: '#6bd15e'
			},
			turquoise: {
				100: '#17e3d0'
			},
			violet: {
				100: '#a5adfa'
			}
		}
	},
	darkMode: 'class',
	plugins: []
};
