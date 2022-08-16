import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import Register from './pages/User/Register/Register'
import Login from './pages/User/Login/Login'

const App = () => {
	return (
		<Fragment>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='register' element={<Register />} />
					<Route path='login' element={<Login />} />
				</Route>
			</Routes>
		</Fragment>
	)
}

export default App
