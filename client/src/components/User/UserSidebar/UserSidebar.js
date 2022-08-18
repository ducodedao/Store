import React, { Fragment } from 'react'
import './UserSidebar.scss'
import userSidebarNav from './userSidebarNav'
import { NavLink } from 'react-router-dom'

const UserSidebar = () => {
	return (
		<Fragment>
			<div className='userSidebar'>
				{userSidebarNav.map((item, index) => (
					<NavLink
						to={item.path}
						key={index}
						className='userSidebarItem'
					>
						<div className='userSidebarLeft'>
							<div className='userSidebarIcon'>{item.icon}</div>
							<div className='userSidebarText'>
								{item.display}
							</div>
						</div>
						<div className='userSidebarRight'>{item.num}</div>
					</NavLink>
				))}
			</div>
		</Fragment>
	)
}

export default UserSidebar
