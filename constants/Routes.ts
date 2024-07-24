export const ROUTES = {
	home: '/',
	login: '/login',
	support: '/support',
	basket: '/basket',
	favorites: '/favorites',
	footerLinks: {
		catalogues: [
			{ path: '/', name: 'PC' },
			{ path: '/', name: 'PlayStation' },
			{ path: '/', name: 'XBox' },
			{ path: '/', name: 'Nintendo' },
			{ path: '/', name: 'Giftcards' },
		],
		resources: [
			{ path: '/', name: 'Term of Use' },
			{ path: '/', name: 'Privacy Policy' },
			{ path: '/', name: 'Support 24/7' },
			{ path: '/', name: 'FAQ' },
			{ path: '/', name: 'News' },
		],
	},

	platform: {
		pc: [
			{ path: '/', name: 'Steam', logo: '/items/steam.svg' },
			{ path: '/', name: 'Battle.net', logo: '/items/battle.svg' },
			{ path: '/', name: 'Ubisoft Connect', logo: '/items/ubisoft.svg' },
			{ path: '/', name: 'EA App', logo: '/items/ea-app.svg' },
			{
				path: '/',
				name: 'Microsoft store',
				logo: '/items/microsoft.svg',
			},
			{ path: '/', name: 'Epic', logo: '/items/epic.svg' },
		],
		ps: [
			{ path: '/', name: 'PS4', logo: '/items/ps4.svg' },
			{ path: '/', name: 'PS5', logo: '/items/ps5.svg' },
		],
		xBox: [
			{ path: '/', name: 'Xbox One', logo: '/items/xbox-one.svg' },
			{
				path: '/',
				name: 'Xbox Series X|S',
				logo: '/items/xbox-series.svg',
			},
		],
		nintendo: [
			{ path: '/', name: 'Nintendo Switch', logo: '/items/nintendo.svg' },
		],
	},
};
