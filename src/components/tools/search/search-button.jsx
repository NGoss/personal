import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

const styles = () => ({
	root: {
		display: 'inline-block',
	},
	button: {
		color: '#FFFFFF',
	}
})


class SearchButton extends React.Component {

	render() {
		const { classes, handleClick } = this.props;

		return (
			<div className={classes.root}>
				<IconButton
					color="inherit"
					className={classes.button}
					onClick={handleClick}>
					<SearchIcon />
				</IconButton>
			</div>
		)
	}
}

SearchButton.propTypes = {
	classes: PropTypes.object,
	handleClick: PropTypes.func,
}

export default withStyles(styles)(SearchButton)
