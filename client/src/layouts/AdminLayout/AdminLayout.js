import React, { Fragment } from 'react'
import './AdminLayout.scss'
import { Outlet } from 'react-router-dom'
import AdminSidebar from '../../components/Admin/AdminSidebar/AdminSidebar'
import Topbar from '../../components/Admin/Topbar/Topbar'

const AdminLayout = () => {
	return (
		<Fragment>
			<AdminSidebar />

			<div className='adminLayout'>
				<div className='adminContent'>
					<Topbar />
					<Outlet />
				</div>
			</div>
		</Fragment>
	)
}

export default AdminLayout
