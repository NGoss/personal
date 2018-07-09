import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import PageSelector from './page-selector'

const styles = () => ({
	button: {
		'&:hover': {
			backgroundColor: '#006be6'
		},
		margin: '20px auto 5px'
	},
	textField: {
		width: '100%'
	}
})

class Save extends React.Component {
	render() {
		const { classes } = this.props

		return (
			<React.Fragment>
				<PageSelector method={this.props.method} section={this.props.section} handleSelect={this.props.handleSelect} handleSectionChange={this.props.handleSectionChange}/>
				<TextField
					id="filename-input"
					defaultValue="Look-Its-An-eBook.pdf"
					className={classes.textField}
					InputProps={{
						classes: {
							input: classes.textField
						}
					}}
					margin="normal"
					label="Save as:"/>
				<Button variant="contained" component="span" color="primary" classes={{root: classes.button}}>Save</Button>
			</React.Fragment>
		)
	}
}

export default withStyles(styles)(Save)
