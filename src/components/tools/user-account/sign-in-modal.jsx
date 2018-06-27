import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'

const styles = () => ({
	root: {

	},
})

class SignInModal extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			tab: 0,
			uname: '',
			first: '',
			last: ''
		}
	}

	createUserAndAuthenticate() {
		axios.post('http://pers.foinse.io/users/create', {
			uname: this.state.uname,
			firstName: this.state.first,
			lastName: this.state.last
		}).then(() => {
			this.fetchUserAndAuthenticate(this.state.uname)
		})
	}

	fetchUserAndAuthenticate() {
		axios.get(`http://pers.foinse.io/users/login?user=${this.state.uname}`).then((response) => {
			const user = response.data[0]
			if (user) this.props.handleSignIn(response.data[0])
		})
	}

	render() {
		const { classes, isOpen, handleClose } = this.props

		return (
			<Dialog
				open={isOpen}
				onClose={handleClose}>
				<DialogTitle>
					<Tabs
						value={this.state.tab}
						onChange={(event, tab) => {this.setState({tab})}}
						centered >
						<Tab label="Log In" />
						<Tab label="Create Account" />
					</Tabs>
				</DialogTitle>
				{
					this.state.tab === 0 ?
					(
						<div>
							<DialogContent className={classes.content}>
								<TextField onChange={(event) => this.setState({uname: event.target.value})}
									autoFocus margin="dense" label="Username" type="email" fullWidth />
								<TextField onChange={(event) => this.setState({pass: event.target.value})}
									margin="dense" label="Password" type="password" fullWidth />
							</DialogContent>
							<DialogActions>
								<Button onClick={handleClose} color="secondary">
									<Typography variant="button">Cancel</Typography>
								</Button>
								<Button onClick={this.fetchUserAndAuthenticate.bind(this)} color="primary">
									<Typography variant="button">Sign In</Typography>
								</Button>
							</DialogActions>
						</div>
					) : (
						<div>
							<DialogContent className={classes.content}>
								<TextField onChange={(event) => this.setState({uname: event.target.value})}
									autoFocus margin="dense" label="Username" type="text" fullWidth />
								<TextField onChange={(event) => this.setState({first: event.target.value})}
									margin="dense" label="First Name" type="text" fullWidth />
								<TextField onChange={(event) => this.setState({last: event.target.value})}
									margin="dense" label="Last Name" type="text" fullWidth />
							</DialogContent>
							<DialogActions>
								<Button onClick={handleClose} color="secondary">
									<Typography variant="button">Cancel</Typography>
								</Button>
								<Button onClick={this.createUserAndAuthenticate.bind(this)} color="primary">
									<Typography variant="button">Create Account</Typography>
								</Button>
							</DialogActions>
						</div>
					)
				}
			</Dialog>
		)
	}
}

SignInModal.propTypes = {
	classes: PropTypes.object,
	isOpen: PropTypes.bool,
	handleClose: PropTypes.func,
	handleSignIn: PropTypes.func,
}

export default withStyles(styles)(SignInModal)
