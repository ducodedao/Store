import React, { Fragment, useEffect } from 'react'
import './Profile.scss'
import Meta from '../../../components/common/Meta'
import { useSelector } from 'react-redux'
import Loading from '../../../components/common/Loading'
import { Avatar, Button, Container, Grid } from '@mui/material'
import UserSidebar from '../../../components/User/UserSidebar/UserSidebar'
import { Person } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'

const Profile = () => {
	const navigate = useNavigate()

	const { user, loading, isAuthenticated } = useSelector(
		(state) => state.user,
	)

	useEffect(() => {
		if (isAuthenticated === false) {
			navigate('/login')
		}
	}, [navigate, isAuthenticated])

	return (
		<Fragment>
			{loading ? (
				<Loading />
			) : (
				<Fragment>
					<Meta title={`${user.name}'s Profile`} />

					<Container sx={{ margin: '2rem auto' }}>
						<Grid container sx={{ transition: 'all 0.5s' }}>
							<Grid item xs={12} sm={12} md={4} lg={3}>
								<UserSidebar />
							</Grid>
							<Grid item xs={12} sm={12} md={8} lg={9}>
								<div className='profile'>
									<div className='profileTop'>
										<div className='profileTopLeft'>
											<Person />
											<p>My Profile</p>
										</div>
										<div className='profileTopRight'>
											<Button
												variant='contained'
												component={Link}
												to='/me/update'
												sx={{
													textTransform: 'none',
												}}
											>
												Edit Profile
											</Button>
										</div>
									</div>

									<div className='profileMiddle'>
										<div className='profileMiddleLeft'>
											<Avatar
												src={user.avatar.url}
												sx={{
													width: '56px',
													height: '56px',
												}}
											/>
											<p>{user.name}</p>
										</div>
										<div className='profileMiddleRight'>
											<Button
												variant='outlined'
												component={Link}
												to='/password/update'
												sx={{
													textTransform: 'none',
												}}
											>
												Change Password
											</Button>
										</div>
									</div>

									<div className='profileBottom'>
										<div className='profileBottomItem'>
											<p>Full Name</p>
											<span>{user.name}</span>
										</div>
										<div className='profileBottomItem'>
											<p>Email</p>
											<span>{user.email}</span>
										</div>
										<div className='profileBottomItem'>
											<p>Joined On</p>
											<span>
												{String(user.createdAt).substr(
													0,
													10,
												)}
											</span>
										</div>
									</div>
								</div>
							</Grid>
						</Grid>
					</Container>
				</Fragment>
			)}
		</Fragment>
	)
}

export default Profile
