import React, { Fragment } from 'react'
import './MainLayout.scss'
import { Outlet } from 'react-router-dom'
import Header from '../../components/common/Header/Header'
import Footer from '../../components/common/Footer/Footer'

const MainLayout = () => {
	return (
		<Fragment>
			<Header />

			<div className='mainLayout'>
				<Outlet />
			</div>

			<Footer />
		</Fragment>
	)
}

export default MainLayout
