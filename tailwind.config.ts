import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			sm: '360px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1440px',
			'3xl': '1680px',
			'4xl': '1920px',
		},
		extend: {
      transitionProperty: {
        'height': 'max-height, opacity, height',
      },
      boxShadow: {
        heroButton: '1px 4px 64px 0px rgb(6 182 212 / 0.5)',
        filter: '0px 4px 16px 0px rgba(0, 0, 0, 0.25);'
      },
			backgroundImage: {
				'linear-dark-blue':
					'linear-gradient(184.2deg, #1F1559 -0.46%, #030035 42.77%, #1F1559 84.31%)',
				'linear-light-blue':
					'linear-gradient(180deg, #00204F 0%, #0072DC 100%)',
				'linear-orange':
					'linear-gradient(180deg, #DB5B32 0%, #FFC7B6 100%)',
				'linear-blur':
					'linear-gradient(225.34deg, #1f1559cc 4.417%, #030035cc 47.993%, #1f1559cc 89.861%);',
        'bg-menu': 'linear-gradient(225.34deg, rgba(31, 21, 89, 0.6) -0.648%,rgba(3, 0, 53, 0.6) 42.567%,rgba(31, 21, 89, 0.6) 84.088%)'
			},
			colors: {
				'dark-blue': '#050021',
				'light-blue': '#00b8ff',
				'light-gray': '#7D809F',
				light: '#f1fbff',
				blue: '#0166FB',
				orange: '#db5b32',
			},
      backdropBlur: {
        "4px": '4px',
      },
			fontFamily: {
				orbitron: 'var(--font-orbitron)',
				montserrat: 'var(--font-montserrat)',
        roboto: 'var(--font-roboto)',
			},
		},
	},
	plugins: [daisyui],
};

export default config;
