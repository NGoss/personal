import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'

import PageSelector from './page-selector'

const styles = () => ({
	button: {
		'&:hover': {
			backgroundColor: '#006be6'
		},
		margin: '20px auto 5px'
	}
})

class Print extends React.Component {
	render() {
		const { classes } = this.props

		return (
			<React.Fragment>
				<PageSelector method={this.props.method} section={this.props.section} handleSelect={this.props.handleSelect} handleSectionChange={this.props.handleSectionChange}/>
				<Button variant="contained" component="span" color="primary" classes={{root: classes.button}}>Print</Button>
			</React.Fragment>
		)
	}
}

Print.propTypes = {
	classes: PropTypes.object,
}

export default withStyles(styles)(Print)
