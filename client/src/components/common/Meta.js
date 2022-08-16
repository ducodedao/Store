import React, { Fragment } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Meta = ({ title }) => {
	return (
		<Fragment>
			<HelmetProvider>
				<Helmet prioritizeSeoTags>
					<title>{title} -- DStore</title>
				</Helmet>
			</HelmetProvider>
		</Fragment>
	)
}

export default Meta
