import React, { Fragment } from 'react'
import './AdminSidebar.scss'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Close, Logout } from '@mui/icons-material'
import AdminSidebarNav from './AdminSidebarNav'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { logout } from '../../../redux/actions/userAction'

const AdminSidebar = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const logoutUser = () => {
		dispatch(logout())
		toast.success('Logout successfully.')

		navigate('/login')
	}

	const closeAdminSidebar = () => {
		document.querySelector('.adminContent').style.transform =
			'scale(1) translateX(0)'
		setTimeout(() => {
			document.body.classList.remove('sidebarOpen')
			document.querySelector('.adminContent').style = ''
		}, 500)
	}

	return (
		<Fragment>
			<div className='adminSidebar'>
				<h3 className='adminSidebarLogo'>
					<Link to='/'>
						<span>DStore</span>
					</Link>
					<div
						className='adminSidebarClose'
						onClick={closeAdminSidebar}
					>
						<Close />
					</div>
				</h3>

				<div className='adminSidebarMenu'>
					{AdminSidebarNav.map((nav, index) => (
						<NavLink
							to={nav.path}
							key={index}
							className='adminSidebarItem'
							onClick={closeAdminSidebar}
						>
							<div className='adminSidebarIcon'>{nav.icon}</div>
							<div className='adminSidebarText'>
								{nav.display}
							</div>
						</NavLink>
					))}
					<div className='adminSidebarItem' onClick={logoutUser}>
						<div className='adminSidebarIcon'>
							<Logout />
						</div>
						<div className='adminSidebarText'>Logout</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default AdminSidebar
