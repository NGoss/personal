import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

const styles = (theme) => ({
	formContainer: {
		paddingBottom: 10
	},
	radio: {
		'&$checked': {
			color: '#005bc6'
		}
	},
	checked: {},
	radioLabel: {
		display: 'inline-block',
		paddingRight: '1em'
	},
	inputUnderline: {
		'&:after': {
			borderBottomColor: theme.palette.primary.main,
		},
	},
	altCaption: {
		paddingTop: 5,
		color: theme.palette.primary.light
	}
})

class PageSelector extends React.Component {
	render() {
		const { classes } = this.props

		return (
			<div className={classes.container}>
				<FormControl className={classes.formContainer}>
					<RadioGroup
						className={classes.group}
						value={this.props.method}
						onChange={this.props.handleSelect} >
						<FormControlLabel value="All" control={<Radio classes={{root: classes.radio, checked: classes.checked}} />} label="All"/>
						<FormControlLabel value="Section" control={
								<Radio classes={{root: classes.radio, checked: classes.checked}} />
							}
							label={
								<div>
									<Typography classes={{root: classes.radioLabel}} variant="body1">Section:</Typography>
									<Select
										value={this.props.section}
										onChange={this.props.handleSectionChange}
										inputProps={{
											name: 'section',
										}}>
										<MenuItem value={1}>Chapter 1</MenuItem>
										<MenuItem value={2}>Chapter 2</MenuItem>
										<MenuItem value={3}>Chapter 3</MenuItem>
									</Select>
								</div>
							}/>
						<FormControlLabel value="Range" control={
								<Radio classes={{root: classes.radio, checked: classes.checked}} />
							}
							label={
								<TextField
									id="page-range"
									InputProps={{
										classes: {
											underline: classes.inputUnderline,
											input: classes.input
										},
									}}
									onFocus={() => {this.props.handleSelect(null /*event*/, 'Range')}}
									className={classes.textField}
									placeholder="1-5 1,2,5"
									margin="normal"/>
							}/>
					</RadioGroup>
				</FormControl>
				<Typography variant="caption">You have <b>200</b> pages left in your usage limit for this ebook.</Typography>
				<Typography classes={{root: classes.altCaption}} variant="caption">This option will use <b>64</b> pages from your usage limit.</Typography>
			</div>
		)
	}
}

PageSelector.propTypes = {
	classes: PropTypes.object,
}

export default withStyles(styles)(PageSelector)
