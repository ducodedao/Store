import React, { Fragment, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import Register from './pages/User/Register/Register'
import Login from './pages/User/Login/Login'
import NotFound from './components/common/NotFound/NotFound'
import store from './redux/store'
import { loadUser } from './redux/actions/userAction'
import Profile from './pages/User/Profile/Profile'
import { useSelector } from 'react-redux'
import ProtectedRoute from './components/common/ProtectedRoute'
import UpdateProfile from './pages/User/UpdateProfile/UpdateProfile'
import UpdatePassword from './pages/User/UpdatePassword/UpdatePassword'
import ForgotPassword from './pages/User/ForgotPassword/ForgotPassword'
import ResetPassword from './pages/User/ResetPassword/ResetPassword'

const App = () => {
	const { isAuthenticated } = useSelector((state) => state.user)

	useEffect(() => {
		store.dispatch(loadUser())
	}, [])

	return (
		<Fragment>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='register' element={<Register />} />
					<Route path='login' element={<Login />} />
					<Route
						path='password/forgot'
						element={<ForgotPassword />}
					/>
					<Route
						path='password/reset/:token'
						element={<ResetPassword />}
					/>

					<Route
						element={
							<ProtectedRoute isAuthenticated={isAuthenticated} />
						}
					>
						<Route path='account' element={<Profile />} />
						<Route path='me/update' element={<UpdateProfile />} />
						<Route
							path='password/update'
							element={<UpdatePassword />}
						/>
					</Route>
				</Route>

				<Route path='*' element={<NotFound />} />
			</Routes>
		</Fragment>
	)
}

export default App
