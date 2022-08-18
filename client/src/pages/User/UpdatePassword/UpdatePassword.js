import React, { Fragment, useEffect, useState } from 'react'
import './UpdatePassword.scss'
import Meta from '../../../components/common/Meta'
import Loading from '../../../components/common/Loading'
import { Container, Grid } from '@mui/material'
import { Lock, Visibility, VisibilityOff } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { useDispatch, useSelector } from 'react-redux'
import UserSidebar from '../../../components/User/UserSidebar/UserSidebar'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { clearErrors, updatePassword } from '../../../redux/actions/userAction'
import { UPDATE_PASSWORD_RESET } from '../../../redux/constants/userConstant'

const UpdatePassword = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { error, isUpdated, loading } = useSelector((state) => state.profile)

	const [eye, setEye] = useState(false)

	const [oldPassword, setOldPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const updatePasswordSubmit = (e) => {
		e.preventDefault()

		const myForm = new FormData()

		myForm.set('oldPassword', oldPassword)
		myForm.set('newPassword', newPassword)
		myForm.set('confirmPassword', confirmPassword)

		dispatch(updatePassword(myForm))
	}

	useEffect(() => {
		if (error) {
			toast.error(error)
			dispatch(clearErrors())
		}

		if (isUpdated) {
			toast.success('Update password successfully.')

			navigate('/account')

			dispatch({
				type: UPDATE_PASSWORD_RESET,
			})
		}
	}, [dispatch, error, isUpdated, navigate])

	return (
		<Fragment>
			{loading ? (
				<Loading />
			) : (
				<Fragment>
					<Meta title='Update Password' />

					<Container sx={{ margin: '2rem auto' }}>
						<Grid container sx={{ transition: 'all 0.5s' }}>
							<Grid item xs={12} sm={12} md={4} lg={3}>
								<UserSidebar />
							</Grid>
							<Grid item xs={12} sm={12} md={8} lg={9}>
								<div className='updatePassword'>
									<h2>Update Password</h2>

									<form
										className='updatePasswordForm'
										onSubmit={updatePasswordSubmit}
									>
										<div className='authPassword'>
											<Lock className='authIcon' />
											<input
												type={eye ? 'text' : 'password'}
												id='oldPassword'
												name='oldPassword'
												placeholder='Old Password'
												required
												value={oldPassword}
												onChange={(e) =>
													setOldPassword(
														e.target.value,
													)
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

										<div className='authPassword'>
											<Lock className='authIcon' />
											<input
												type={eye ? 'text' : 'password'}
												id='newPassword'
												name='newPassword'
												placeholder='New Password'
												required
												value={newPassword}
												onChange={(e) =>
													setNewPassword(
														e.target.value,
													)
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
													setConfirmPassword(
														e.target.value,
													)
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
							</Grid>
						</Grid>
					</Container>
				</Fragment>
			)}
		</Fragment>
	)
}

export default UpdatePassword
