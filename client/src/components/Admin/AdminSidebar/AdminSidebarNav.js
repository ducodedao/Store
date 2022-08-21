import {
	Category,
	Dashboard,
	List,
	ListAlt,
	Person,
	QueryStats,
	RateReview,
} from '@mui/icons-material'

const AdminSidebarNav = [
	{
		icon: <Dashboard />,
		display: 'Dashboard',
		path: 'dashboard',
	},
	{
		icon: <Category />,
		display: 'Categories',
		path: 'categories',
	},
	{
		icon: <List />,
		display: 'Products',
		path: 'products',
	},
	{
		icon: <ListAlt />,
		display: 'Orders',
		path: 'orders',
	},
	{
		icon: <Person />,
		display: 'Customers',
		path: 'customers',
	},
	{
		icon: <RateReview />,
		display: 'Reviews',
		path: 'reviews',
	},
	{
		icon: <QueryStats />,
		display: 'Stats',
		path: 'stats',
	},
]

export default AdminSidebarNav
