import React, { Fragment, useRef } from 'react'
import './Header.scss'
import { Container, Tooltip, IconButton, Badge } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import {
	Menu,
	ChevronLeft,
	Search,
	FavoriteBorder,
	ShoppingCartOutlined,
	PersonOutlineOutlined,
} from '@mui/icons-material'
import mainNav from './mainNav'
import { toast } from 'react-toastify'

const Header = () => {
	const menuRef = useRef(null)

	const menuToggle = () => menuRef.current.classList.toggle('active')

	const notify = () => toast('The function has not been developed.')

	return (
		<Fragment>
			<header className='header'>
				<Container
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						height: '50px',
					}}
				>
					<div className='headerMenuMobile' onClick={menuToggle}>
						<Menu />
					</div>

					<h3 className='headerLogo'>
						<Link to=''>
							<span>DStore</span>
						</Link>
					</h3>

					<div className='headerMenu' ref={menuRef}>
						<div className='headerMenuClose' onClick={menuToggle}>
							<ChevronLeft />
						</div>

						{mainNav.map((item, index) => (
							<NavLink
								to={item.path}
								key={index}
								className='headerMenuItem'
								onClick={menuToggle}
							>
								{item.display}
							</NavLink>
						))}
					</div>

					<div className='headerAction'>
						<Tooltip title='Search'>
							<IconButton onClick={notify}>
								<Search />
							</IconButton>
						</Tooltip>
						<Tooltip title='Wishlist'>
							<IconButton onClick={notify}>
								<Badge badgeContent={1} color='primary'>
									<FavoriteBorder />
								</Badge>
							</IconButton>
						</Tooltip>
						<Tooltip title='Cart'>
							<IconButton onClick={notify}>
								<Badge badgeContent={1} color='primary'>
									<ShoppingCartOutlined />
								</Badge>
							</IconButton>
						</Tooltip>
						<Tooltip title='Login'>
							<IconButton onClick={notify}>
								<PersonOutlineOutlined />
							</IconButton>
						</Tooltip>
					</div>
				</Container>
			</header>
		</Fragment>
	)
}

export default Header
