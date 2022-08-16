import React, { Fragment } from 'react'
import DotLoader from 'react-spinners/DotLoader'

const Loading = () => {
	return (
		<Fragment>
			<DotLoader
				color='hsl(197, 87%, 50%)'
				cssOverride={{
					margin: '30% auto',
				}}
				loading
				size={60}
				speedMultiplier={2}
			/>
		</Fragment>
	)
}

export default Loading
