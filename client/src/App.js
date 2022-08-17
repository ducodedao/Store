import React, { Fragment, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import Register from './pages/User/Register/Register'
import Login from './pages/User/Login/Login'
import NotFound from './components/common/NotFound/NotFound'
import store from './redux/store'
import { loadUser } from './redux/actions/userAction'

const App = () => {
	useEffect(() => {
		store.dispatch(loadUser())
	}, [])

	return (
		<Fragment>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='register' element={<Register />} />
					<Route path='login' element={<Login />} />
				</Route>

				<Route path='*' element={<NotFound />} />
			</Routes>
		</Fragment>
	)
}

export default App
