import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const styles = (theme) => ({
	root: {
		display: 'inline-block',
		direction: 'ltr',
	},
	textField: {
		margin: 'auto 0',
		width: 200,
		transition: theme.transitions.create(['width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	input: {
		color: 'white',
	},
	inputUnderline: {
		'&:after': {
			borderBottomColor: 'rgba(255, 255, 255, 0.8)',
		},
		'&:before': {
			borderBottomColor: 'rgba(255, 255, 255, 0.3)',
		},
		'&:hover:not($input$disabled):not($input$focused):not($input$error):before': {
			borderBottomColor: 'rgba(255, 255, 255, 0.5)'
		}
	},
	collapsed: {
		width: 0,
		margin: 'auto 0',
		transition: theme.transitions.create(['width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	}
})


class SearchButton extends React.Component {

	render() {
		const { classes, expanded, hideResults, showResults } = this.props;

		return (
			<form className={classes.root} noValidate autoComplete="off">
				<TextField
					id="searchInput"
					label=""
					color="inherit"
					InputProps={{
						classes: {
							underline: classes.inputUnderline,
							input: classes.input
						},
					}}
					onFocus={(event) => { if (event.target.value.length > 0) showResults() }}
					className={expanded ? classes.textField : classes.collapsed}
					onChange={(event) => {
						if (event.target.value === '') {
							hideResults()
						} else {
							showResults()
						}
					}}
					margin="normal"
				/>
			</form>
		)
	}
}

SearchButton.propTypes = {
	classes: PropTypes.object,
	expanded: PropTypes.bool,
	hideResults: PropTypes.func,
	showResults: PropTypes.func
}

export default withStyles(styles)(SearchButton)
