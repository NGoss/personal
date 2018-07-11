import React from 'react';
import { withStyles } from '@material-ui/core/styles'

import Input from '@material-ui/core/Input'

const styles = (theme) => ({
	input: {
		width: '3em',
		textAlign: 'center',
		display: 'inline-block',
		'&::placeholder': {
			opacity: 1
		}
	},
})

class InputBox extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			currentValue: props.currentIndex.index
		}
	}
	render() {
		const { classes, currentIndex } = this.props
		return (
			<Input
				onBlur={(event) => {
					event.target.value && this.props.setCurrentIndex(parseInt(event.target.value, 10), true /*shouldScroll*/)
					event.target.value = null
				}}
				onKeyPress={(event) => {
					if (event.key === 'Enter') {
						event.target.value && this.props.setCurrentIndex(parseInt(event.target.value, 10), true /*shouldScroll*/)
						event.target.blur()
						event.target.value = null
					}
				}}
				onChange={(event) => {
					event.target.value && this.setState({currentValue: event.target.value})
				}} placeholder={currentIndex.index} classes={{root: classes.input, input: classes.input}}/>
		)
	}
}

export default withStyles(styles)(InputBox)
