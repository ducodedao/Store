import React, { Fragment } from 'react'
import './NotFound.scss'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<Fragment>
			<div className='notFound'>
				<div className='notFoundContainer'>
					<div className='notFoundContent'>
						<h1 data-text='404'>404</h1>
						<h4 data-text='Opps! Page not found'>
							Opps! Page not found
						</h4>
						<p>
							Sorry, the page you're looking for does'n exist. If
							you think something is broken, report a problem.
						</p>

						<div className='notFoundActions'>
							<Button
								component={Link}
								to='/'
								variant='outlined'
								size='small'
							>
								Return Home
							</Button>
							<Button
								component={Link}
								to='/contact'
								variant='outlined'
								size='small'
							>
								Report Problem
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default NotFound
