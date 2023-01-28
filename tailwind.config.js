/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				serif: ['Poppins', 'serif']
			},
			keyframes: {
				fadeIn: {
					'0% ': { opacity: 0 },
					'100% ': { opacity: 1 }
				}
			},
			animation: {
				fadeIn: 'fadeIn 1s ease-in-out'
			}
		}
	},
	plugins: []
};
