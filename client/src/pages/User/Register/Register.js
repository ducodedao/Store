import React, { Fragment, useEffect, useState } from 'react'
import './Register.scss'
import Meta from '../../../components/common/Meta'
import Loading from '../../../components/common/Loading'
import { Container, Avatar, Button } from '@mui/material'
import {
	Lock,
	Mail,
	Person,
	Visibility,
	VisibilityOff,
} from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, register } from '../../../redux/actions/userAction'
import { toast } from 'react-toastify'

const Register = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { error, loading, isAuthenticated } = useSelector(
		(state) => state.user,
	)

	const [eye, setEye] = useState(false)

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	})

	const { name, email, password, confirmPassword } = user

	const [avatar, setAvatar] = useState('/images/Profile.png')
	const [avatarPreview, setAvatarPreview] = useState('/images/Profile.png')

	const registerSubmit = (e) => {
		e.preventDefault()

		const myForm = new FormData()

		myForm.set('name', name)
		myForm.set('email', email)
		myForm.set('password', password)
		myForm.set('confirmPassword', confirmPassword)
		myForm.set('avatar', avatar)

		dispatch(register(myForm))
	}

	const registerDataChange = (e) => {
		if (e.target.name === 'avatar') {
			const reader = new FileReader()

			reader.onload = () => {
				if (reader.readyState === 2) {
					setAvatarPreview(reader.result)
					setAvatar(reader.result)
				}
			}

			reader.readAsDataURL(e.target.files[0])
		} else {
			setUser({ ...user, [e.target.name]: e.target.value })
		}
	}

	useEffect(() => {
		if (error) {
			toast.error(error)
			dispatch(clearErrors())
		}

		if (isAuthenticated) {
			toast.success('Registered successfully.')
			navigate('/account')
		}
	}, [dispatch, error, navigate, isAuthenticated])

	return (
		<Fragment>
			{loading ? (
				<Loading />
			) : (
				<Fragment>
					<Meta title='Register' />

					<Container>
						<div className='auth'>
							<Avatar />
							<p>Welcom to DStore</p>

							<form
								className='authForm'
								encType='multipart/form-data'
								onSubmit={registerSubmit}
							>
								<div className='authName'>
									<Person className='authIcon' />
									<input
										type='text'
										id='name'
										name='name'
										placeholder='Name'
										required
										value={name}
										onChange={registerDataChange}
									/>
								</div>

								<div className='authEmail'>
									<Mail className='authIcon' />
									<input
										type='email'
										id='email'
										name='email'
										placeholder='Email'
										required
										value={email}
										onChange={registerDataChange}
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
										onChange={registerDataChange}
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
										onChange={registerDataChange}
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

								<div className='authImage'>
									<Avatar src={avatarPreview} />
									<input
										type='file'
										name='avatar'
										accept='image/*'
										onChange={registerDataChange}
									/>
								</div>

								<LoadingButton
									type='submit'
									variant='outlined'
									loading={loading}
									fullWidth
									sx={{ marginTop: '1rem' }}
								>
									Register
								</LoadingButton>

								<Button
									component={Link}
									to='/login'
									sx={{
										textTransform: 'none',
										marginTop: '1rem',
										textAlign: 'center',
									}}
								>
									Already have an account? Login
								</Button>
							</form>
						</div>
					</Container>
				</Fragment>
			)}
		</Fragment>
	)
}

export default Register
