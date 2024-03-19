const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@brainandbones/skeleton/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Quicksand', 'ui-sans-serif', 'system-ui']
			},
			gridTemplateColumns: {
				fluid: 'repeat(auto-fit, minmax(20rem, 1fr))'
			},

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
				seance: {
					DEFAULT: '#6417A2',
					50: '#D1A7F2',
					100: '#C795F0',
					200: '#B571EB',
					300: '#A24EE6',
					400: '#8F2AE1',
					500: '#7A1CC6',
					600: '#6417A2',
					700: '#461071',
					800: '#270940',
					900: '#09020F'
				}
			}
		}
	},

	plugins: [require('daisyui'), require('@tailwindcss/typography')],
	daisyui: {
		themes: ["light"]
	}
};

module.exports = config;
