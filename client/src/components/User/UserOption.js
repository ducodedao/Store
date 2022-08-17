import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	Tooltip,
	Avatar,
	Divider,
	IconButton,
	ListItemIcon,
	Menu,
	MenuItem,
	Typography,
} from '@mui/material'
import { Dashboard, ListAlt, Logout } from '@mui/icons-material'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/userAction'

const UserOption = ({ user }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const options = [
		{ icon: <ListAlt />, name: 'Orders', func: orders },
		{ icon: <Logout />, name: 'Logout', func: logoutUser },
	]

	if (user.role === 'admin') {
		options.unshift({
			icon: <Dashboard />,
			name: 'Dashboard',
			func: dashboard,
		})
	}

	function account() {
		navigate('/account')
	}

	function dashboard() {
		navigate('/admin/dashboard')
	}

	function orders() {
		navigate('/orders')
	}

	function logoutUser() {
		dispatch(logout())
		toast.success('Logout successfully.')
	}

	return (
		<Fragment>
			<Tooltip title='Account'>
				<IconButton
					onClick={handleClick}
					size='small'
					aria-controls={open ? 'account-menu' : undefined}
					aria-haspopup='true'
					aria-expanded={open ? 'true' : undefined}
				>
					<Avatar
						src={
							user.avatar.url
								? user.avatar.url
								: '/images/Profile.png'
						}
						sx={{ width: 30, height: 30 }}
					/>
				</IconButton>
			</Tooltip>
			<Menu
				anchorEl={anchorEl}
				id='account-menu'
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiList-root': {
							p: 0,
						},
						'& .MuiAvatar-root': {
							width: 30,
							height: 30,
							ml: -0.5,
							mr: 1.3,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				<MenuItem onClick={account}>
					<Avatar
						src={
							user.avatar.url
								? user.avatar.url
								: '/images/Profile.png'
						}
					/>
					<Typography>{user.name}</Typography>
				</MenuItem>

				<Divider />

				{options.map((option) => (
					<MenuItem key={option.name} onClick={option.func}>
						<ListItemIcon>{option.icon}</ListItemIcon>
						<Typography>{option.name}</Typography>
					</MenuItem>
				))}
			</Menu>
		</Fragment>
	)
}

export default UserOption
