/*eslint-disable no-magic-numbers*/

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Visible } from 'react-grid-system'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import SignInModal from './sign-in-modal'
import UserInfo from './user-info'

const styles = (theme) => ({
	root: {
		borderRadius: 3,
	},
	button: {
		marginTop: 7,
	}
})


class SignInButton extends React.Component {

	render() {
		const { classes, handleClick, signInModalOpen, signIn, closeModal, user } = this.props;

		if (user.id > 0) {
			return <UserInfo user={user} />
		}
		return (
			<div className={classes.root}>
				<Visible md lg xl>
					<Button
						variant="raised"
						color="secondary"
						className={classes.button}
						onClick={handleClick}
						size="small">
						<Typography color="inherit" variant="button">
							Sign In
						</Typography>
					</Button>
				</Visible>
				<SignInModal
					handleSignIn={signIn}
					isOpen={signInModalOpen}
					handleClose={closeModal}/>
			</div>
		)
	}
}

SignInButton.propTypes = {
	classes: PropTypes.object,
	handleClick: PropTypes.func,
	signInModalOpen: PropTypes.bool,
	signIn: PropTypes.func,
	closeModal: PropTypes.func,
	user: PropTypes.object,
}

export default withStyles(styles)(SignInButton)
