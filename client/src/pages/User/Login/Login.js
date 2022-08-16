import React, { Fragment, useEffect, useState } from 'react'
import './Login.scss'
import Meta from '../../../components/common/Meta'
import Loading from '../../../components/common/Loading'
import { Container, Avatar, Button } from '@mui/material'
import { Lock, Mail, Visibility, VisibilityOff } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, login } from '../../../redux/actions/userAction'
import { toast } from 'react-toastify'

const Login = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { error, loading, isAuthenticated } = useSelector(
		(state) => state.user,
	)

	const [eye, setEye] = useState(false)

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const loginSubmit = (e) => {
		e.preventDefault()

		dispatch(login(email, password, confirmPassword))
	}

	useEffect(() => {
		if (error) {
			toast.error(error)
			dispatch(clearErrors())
		}

		if (isAuthenticated) {
			toast.success('Login successfully.')
			navigate('/account')
		}
	}, [dispatch, error, navigate, isAuthenticated])

	return (
		<Fragment>
			{loading ? (
				<Loading />
			) : (
				<Fragment>
					<Meta title='Login' />

					<Container>
						<div className='auth'>
							<Avatar />
							<p>Welcome back to DStore</p>

							<form className='authForm' onSubmit={loginSubmit}>
								<div className='authEmail'>
									<Mail className='authIcon' />
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

								<div className='authPassword'>
									<Lock className='authIcon' />
									<input
										type={eye ? 'text' : 'password'}
										id='password'
										name='password'
										placeholder='Password'
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

								<div className='authForgot'>
									<Link to='/password/forgot'>
										Forgot password?
									</Link>
								</div>

								<LoadingButton
									type='submit'
									variant='outlined'
									loading={loading}
									fullWidth
									sx={{ marginTop: '1rem' }}
								>
									Login
								</LoadingButton>

								<Button
									component={Link}
									to='/register'
									sx={{
										textTransform: 'none',
										marginTop: '1rem',
										textAlign: 'center',
									}}
								>
									Don't have an account? Register
								</Button>
							</form>
						</div>
					</Container>
				</Fragment>
			)}
		</Fragment>
	)
}

export default Login
