import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

import PageSelector from './page-selector'

const styles = () => ({
	button: {
		'&:hover': {
			backgroundColor: '#006be6'
		},
		margin: '20px auto 5px'
	},
	formatSelect: {
		marginTop: 16,
		width: '100%'
	},
})

class Export extends React.Component {
	constructor(props) {
		super(props)

		this.state = {format: 'pdf'}

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({format: event.target.value})
	}

	render() {
		const { classes } = this.props

		return (
			<React.Fragment>
				<PageSelector method={this.props.method} section={this.props.section} handleSelect={this.props.handleSelect} handleSectionChange={this.props.handleSectionChange}/>
				<FormControl className={classes.formatSelect}>
					<InputLabel>Export as</InputLabel>
					<Select
						value={this.state.format}
						onChange={this.handleChange}
						classes={{root: classes.selectLabel, focused: classes.selectFocused}}>
						<MenuItem value={'pdf'}>PDF (.pdf)</MenuItem>
						<MenuItem value={'epub'}>EPUB (.epub)</MenuItem>
						<MenuItem value={'sun'}>Sunbeams (.sun)</MenuItem>
					</Select>
				</FormControl>
				<Button variant="contained" component="span" color="primary" classes={{root: classes.button}}>Export</Button>
			</React.Fragment>
		)
	}
}

Export.propTypes = {
	classes: PropTypes.object,
}

export default withStyles(styles)(Export)
