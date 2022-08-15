import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'

const App = () => {
	return (
		<Fragment>
			<Routes>
				<Route path='/' element={<MainLayout />}></Route>
			</Routes>
		</Fragment>
	)
}

export default App
