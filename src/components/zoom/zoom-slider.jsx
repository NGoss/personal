import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import SearchIcon from 'material-ui-icons/Search'

const styles = () => ({
	slider: {
		'z-index': 1100,
		position: 'fixed',
		top: '3vh',
		right: '5%',
		width: '10%',
	},
	little: {
		transform: 'scaleX(-1)',
		height: '1.25em',
		width: '1.25em',
		position: 'fixed',
		top: '3.125vh',
		right: '15.5%',
	},
	big: {
		transform: 'scaleX(-1)',
		height: '2em',
		width: '2em',
		position: 'fixed',
		top: '3vh',
		right: '3%',
	}
})

class ZoomSlider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			expanded: false
		};
	}

	render() {
		const { classes, handleZoomChange } = this.props;
		return (
			<div className={classes.slider}>
				<SearchIcon className={classes.little}/>
				<input
					type="range"
					defaultValue="100"
					min="50"
					max="150"
					onInput={handleZoomChange}
					className={classes.slider} />
				<SearchIcon className={classes.big}/>
			</div>
		);
	}
}

ZoomSlider.propTypes = {
	handleZoomChange: PropTypes.func.isRequired,
	classes: PropTypes.object
};

export default withStyles(styles)(ZoomSlider);
