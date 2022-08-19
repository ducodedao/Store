import React, { Fragment, useEffect, useState } from 'react'
import './ForgotPassword.scss'
import Meta from '../../../components/common/Meta'
import Loading from '../../../components/common/Loading'
import { Container } from '@mui/material'
import { Mail } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, forgotPassword } from '../../../redux/actions/userAction'
import { toast } from 'react-toastify'

const ForgotPassword = () => {
	const dispatch = useDispatch()

	const { error, message, loading } = useSelector(
		(state) => state.forgotPassword,
	)

	const [email, setEmail] = useState('')

	const forgotPasswordSubmit = (e) => {
		e.preventDefault()

		const myForm = new FormData()

		myForm.set('email', email)

		dispatch(forgotPassword(myForm))
	}

	useEffect(() => {
		if (error) {
			toast.error(error)
			dispatch(clearErrors())
		}

		if (message) {
			toast.success(message)
		}
	}, [dispatch, error, message])

	return (
		<Fragment>
			{loading ? (
				<Loading />
			) : (
				<Fragment>
					<Meta title='Forgot Password' />

					<Container>
						<div className='forgotPassword'>
							<h2>Forgot Password</h2>

							<form
								className='forgotPasswordForm'
								onSubmit={forgotPasswordSubmit}
							>
								<div className='forgotPasswordEmail'>
									<Mail className='forgotPasswordIcon' />
									<input
										type='email'
										id='email'
										name='email'
										placeholder='Email'
										required
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</div>

								<LoadingButton
									type='submit'
									variant='outlined'
									loading={loading}
									fullWidth
									sx={{ marginTop: '1rem' }}
								>
									Send
								</LoadingButton>
							</form>
						</div>
					</Container>
				</Fragment>
			)}
		</Fragment>
	)
}

export default ForgotPassword
