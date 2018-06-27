import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { ScreenClassRender } from 'react-grid-system'

import SignInContainer from '../../../containers/tools/signin'

const styles = () => ({
	root: {
		float: 'right',
		borderRadius: 2,
		display: 'inline-block',
	},
	mobile: {
	},
})


class UserAccount extends React.Component {

	render() {
		const { classes } = this.props;

		return (
			<ScreenClassRender render={(screenClass) => {
					const isMobile = ['xs', 'sm'].includes(screenClass)
					return (
						<div className={isMobile ? classes.mobile : classes.root}>
							<SignInContainer />
						</div>
					)
				}} />
		)
	}
}

UserAccount.propTypes = {
	classes: PropTypes.object,
}

export default withStyles(styles)(UserAccount)
