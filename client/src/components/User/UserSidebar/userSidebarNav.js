import {
	FavoriteBorder,
	ListAlt,
	Payment,
	PersonOutline,
	Place,
} from '@mui/icons-material'

const userSidebarNav = [
	{
		icon: <PersonOutline />,
		display: 'Profile',
		num: null,
		path: '',
	},
	{
		icon: <ListAlt />,
		display: 'Orders',
		num: 1,
		path: '/orders',
	},
	{
		icon: <FavoriteBorder />,
		display: 'Wishlist',
		num: 2,
		path: '/wishlist',
	},
	{
		icon: <Place />,
		display: 'Addresses',
		num: 3,
		path: '/addresses',
	},
	{
		icon: <Payment />,
		display: 'Payment Methods',
		num: 4,
		path: '/payment-methods',
	},
]

export default userSidebarNav
