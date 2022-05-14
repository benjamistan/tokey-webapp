module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				tblue: '#0d559d',
				tlightblue: '#bdd5ea',
				twhite: '#f7f7ff',
				tred: '#fe5f55',
				tpink: '#a2708a',
			},
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
			},
			padding: {
				'1/2': '50%',
				'full': '100%',
			},
		},
	},
	plugins: [],
};
