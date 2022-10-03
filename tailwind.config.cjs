const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				wasabi: {
					DEFAULT: '#7EA22B',
					50: '#D0E69F',
					100: '#C8E18F',
					200: '#B9D96F',
					300: '#A9D04E',
					400: '#97C234',
					500: '#7EA22B',
					600: '#5C761F',
					700: '#394913',
					800: '#171D08',
					900: '#000000'
				},
				'russian-violet': {
					DEFAULT: '#2A2159',
					50: '#796AC8',
					100: '#6C5BC2',
					200: '#5442B2',
					300: '#463795',
					400: '#382C77',
					500: '#2A2159',
					600: '#171230',
					700: '#030307',
					800: '#000000',
					900: '#000000'
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
