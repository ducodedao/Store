import React, { Fragment, useEffect, useState } from 'react'
import './UpdateProfile.scss'
import Meta from '../../../components/common/Meta'
import Loading from '../../../components/common/Loading'
import { Container, Avatar, Grid } from '@mui/material'
import { Mail, Person } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { useDispatch, useSelector } from 'react-redux'
import UserSidebar from '../../../components/User/UserSidebar/UserSidebar'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
	clearErrors,
	loadUser,
	updateProfile,
} from '../../../redux/actions/userAction'
import { UPDATE_PROFILE_RESET } from '../../../redux/constants/userConstant'

const UpdateProfile = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { user } = useSelector((state) => state.user)
	const { error, isUpdated, loading } = useSelector((state) => state.profile)

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [avatar, setAvatar] = useState('/images/Profile.png')
	const [avatarPreview, setAvatarPreview] = useState('/images/Profile.png')

	const updateProfileSubmit = (e) => {
		e.preventDefault()

		const myForm = new FormData()

		myForm.set('name', name)
		myForm.set('email', email)
		myForm.set('avatar', avatar)

		dispatch(updateProfile(myForm))
	}

	const updateProfileDataChange = (e) => {
		const reader = new FileReader()

		reader.onload = () => {
			if (reader.readyState === 2) {
				setAvatarPreview(reader.result)
				setAvatar(reader.result)
			}
		}

		reader.readAsDataURL(e.target.files[0])
	}

	useEffect(() => {
		if (user) {
			setName(user.name)
			setEmail(user.email)
			setAvatarPreview(user.avatar.url)
		}

		if (error) {
			toast.error(error)
			dispatch(clearErrors())
		}

		if (isUpdated) {
			toast.success('Update profile successfully.')
			dispatch(loadUser())

			navigate('/account')

			dispatch({
				type: UPDATE_PROFILE_RESET,
			})
		}
	}, [dispatch, user, error, isUpdated, navigate])

	return (
		<Fragment>
			{loading ? (
				<Loading />
			) : (
				<Fragment>
					<Meta title='Update Profile' />

					<Container sx={{ margin: '2rem auto' }}>
						<Grid container sx={{ transition: 'all 0.5s' }}>
							<Grid item xs={12} sm={12} md={4} lg={3}>
								<UserSidebar />
							</Grid>
							<Grid item xs={12} sm={12} md={8} lg={9}>
								<div className='updateProfile'>
									<h2>Update Profile</h2>

									<form
										className='updateProfileForm'
										encType='multipart/form-data'
										onSubmit={updateProfileSubmit}
									>
										<div className='updateProfileName'>
											<Person className='updateProfileIcon' />
											<input
												type='text'
												id='name'
												name='name'
												placeholder='Name'
												required
												value={name}
												onChange={(e) =>
													setName(e.target.value)
												}
											/>
										</div>

										<div className='updateProfileEmail'>
											<Mail className='updateProfileIcon' />
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

										<div className='updateProfileImage'>
											<Avatar src={avatarPreview} />
											<input
												type='file'
												name='avatar'
												accept='image/*'
												onChange={
													updateProfileDataChange
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

export default UpdateProfile
