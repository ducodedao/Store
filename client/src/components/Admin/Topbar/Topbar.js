import React, { Fragment } from 'react'
import './Topbar.scss'
import { Menu } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'

const Topbar = () => {
	const { user } = useSelector((state) => state.user)

	const openAdminSidebar = () => {
		document.body.classList.add('sidebarOpen')
	}

	return (
		<Fragment>
			<div className='topbar'>
				<div className='adminSidebarInfo'>
					<Avatar
						src={user.avatar.url}
						sx={{ width: '50px', height: '50px' }}
					/>
					<span>{user.name}</span>
				</div>

				<div className='adminSidebarToggle' onClick={openAdminSidebar}>
					<Menu />
				</div>
			</div>
		</Fragment>
	)
}

export default Topbar
