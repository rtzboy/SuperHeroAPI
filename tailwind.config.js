/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
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
			black: '#000',
			white: '#fff',
			gray: '#878787',
			blue: {
				DEFAULT: '#3175C4',
				100: '#144D90',
				200: '#113B71',
				300: '#0E1F4E'
			},
			green: {
				DEFAULT: '#E2E5CE',
				100: '#BFC4A1',
				200: '#ACB388',
				300: '#4D6242',
				400: '#323F2B'
			}
		}
	},
	plugins: []
};
