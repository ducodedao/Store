import React, { Fragment, useEffect, useState } from 'react'
import './ResetPassword.scss'
import Meta from '../../../components/common/Meta'
import Loading from '../../../components/common/Loading'
import { Container } from '@mui/material'
import { Lock, Visibility, VisibilityOff } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, resetPassword } from '../../../redux/actions/userAction'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

const ResetPassword = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	let { token } = useParams()

	const { error, success, loading } = useSelector(
		(state) => state.forgotPassword,
	)

	const [eye, setEye] = useState(false)

	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const resetPasswordSubmit = (e) => {
		e.preventDefault()

		const myForm = new FormData()

		myForm.set('password', password)
		myForm.set('confirmPassword', confirmPassword)

		dispatch(resetPassword(token, myForm))
	}

	useEffect(() => {
		if (error) {
			toast.error(error)
			dispatch(clearErrors())
		}

		if (success) {
			toast.success('Reset password successfully.')

			navigate('/login')
		}
	}, [dispatch, error, navigate, success])

	return (
		<Fragment>
			{loading ? (
				<Loading />
			) : (
				<Fragment>
					<Meta title='Reset Password' />

					<Container>
						<div className='resetPassword'>
							<h2>Reset Password</h2>

							<form
								className='resetPasswordForm'
								onSubmit={resetPasswordSubmit}
							>
								<div className='authPassword'>
									<Lock className='authIcon' />
									<input
										type={eye ? 'text' : 'password'}
										id='newPassword'
										name='newPassword'
										placeholder='New Password'
										required
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
									/>
									{eye ? (
										<Visibility
											className='authEye'
											onClick={() => setEye(!eye)}
										/>
									) : (
										<VisibilityOff
											className='authEye'
											onClick={() => setEye(!eye)}
										/>
									)}
								</div>

								<div className='authConfirmPassword'>
									<Lock className='authIcon' />
									<input
										type={eye ? 'text' : 'password'}
										id='confirmPassword'
										name='confirmPassword'
										placeholder='Confirm Password'
										required
										value={confirmPassword}
										onChange={(e) =>
											setConfirmPassword(e.target.value)
										}
									/>
									{eye ? (
										<Visibility
											className='authEye'
											onClick={() => setEye(!eye)}
										/>
									) : (
										<VisibilityOff
											className='authEye'
											onClick={() => setEye(!eye)}
										/>
									)}
								</div>

								<LoadingButton
									type='submit'
									variant='outlined'
									loading={loading}
									fullWidth
									sx={{ marginTop: '1rem' }}
								>
									Update
								</LoadingButton>
							</form>
						</div>
					</Container>
				</Fragment>
			)}
		</Fragment>
	)
}

export default ResetPassword
