import React, { Fragment } from 'react'
import './Footer.scss'
import { Container, Tooltip, IconButton } from '@mui/material'
import { Facebook, Instagram, YouTube } from '@mui/icons-material'
import { toast } from 'react-toastify'

const Footer = () => {
	const notify = () => toast('The function has not been developed.')

	return (
		<Fragment>
			<footer className='footer'>
				<div className='content'>
					<Container
						sx={{
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							flexDirection: 'column',
						}}
					>
						<h3>DStore</h3>
						<p>
							Distribution center and retail phone accessories and
							computers with the best prices, nationwide delivery.
						</p>
						<div className='socials'>
							<Tooltip title='Facebook'>
								<IconButton onClick={notify}>
									<Facebook />
								</IconButton>
							</Tooltip>
							<Tooltip title='Instagram'>
								<IconButton onClick={notify}>
									<Instagram />
								</IconButton>
							</Tooltip>
							<Tooltip title='YouTube'>
								<IconButton onClick={notify}>
									<YouTube />
								</IconButton>
							</Tooltip>
						</div>
					</Container>
				</div>

				<div className='copyright'>
					<Container>
						<p>Copyright &copy; 2022 by ducodedao.</p>
					</Container>
				</div>
			</footer>
		</Fragment>
	)
}

export default Footer
