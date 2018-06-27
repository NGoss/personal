/*eslint no-magic-numbers: ["warn", { "ignoreArrayIndexes": true }]*/

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Typography from '@material-ui/core/Typography'
import grey from '@material-ui/core/colors/grey'

const styles = {
	root: {
		display: 'inline-block',
	},
	userName: {
		display: 'inline-block',
		color: grey[100],
	},
	button: {
		display: 'inline-block',
	}
}

class UserInfo extends React.Component {

	render() {
		const { classes, user } = this.props

		return (
			<div className={classes.root}>
				<Typography className={classes.userName}
					color="primary" variant="caption">
					{user.first_name}
				</Typography>
				<IconButton
					color="inherit"
					className={classes.button}>
					<AccountCircleIcon />
				</IconButton>
			</div>
		)
	}
}

UserInfo.propTypes = {
	classes: PropTypes.object,
	user: PropTypes.object,
}

export default withStyles(styles)(UserInfo)
