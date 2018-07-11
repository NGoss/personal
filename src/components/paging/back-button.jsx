import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'

const styles = () => ({
	root: {
		display: 'inline-block',
	},
	button: {
		color: '#000'
	}
})


class BackButton extends React.Component {

	render() {
		const { classes, handleClick } = this.props;

		return (
			<div className={classes.root}>
				<IconButton
					className={classes.button}
					onClick={handleClick}>
					<NavigateBeforeIcon className={classes.button} color="inherit" />
				</IconButton>
			</div>
		)
	}
}

BackButton.propTypes = {
	classes: PropTypes.object,
	handleClick: PropTypes.func,
}

export default withStyles(styles)(BackButton)
