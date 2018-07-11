import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Visible } from 'react-grid-system'

import Button from '@material-ui/core/Button'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'

const styles = () => ({
	root: {
		'z-index': 1000,
		position: 'fixed',
		bottom: '5vh',
		right: '5vw',
	},
	button: {
		'margin-right': '1px',
		'background-color': '#ffffff',
		'border-radius': '0px',
		height: '40px',
		'min-width': '40px',
		width: '40px',
		'font-size': '1.125rem',
		'&:hover': {
			'background-color': '#EEE',
		}
	},
})

class ZoomButtons extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			expanded: false
		};
	}

	render() {
		const { classes, handleZoomIn, handleZoomOut, handleFullscreen, fullscreen } = this.props;
		return (
			<div className={classes.root}>
				<Button
					color="inherit"
					size="medium"
					variant="raised"
					className={classes.button}
					onClick={handleZoomOut}>
					-
				</Button>
				<Button
					color="inherit"
					size="medium"
					variant="raised"
					className={classes.button}
					onClick={handleZoomIn}>
					+
				</Button>
				<Visible md lg xl>
					<Button
						color="inherit"
						size="medium"
						variant="raised"
						className={classes.button}
						onClick={handleFullscreen}>
						{fullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
					</Button>
				</Visible>
			</div>
		);
	}
}

ZoomButtons.propTypes = {
	handleZoomIn: PropTypes.func.isRequired,
	handleZoomOut: PropTypes.func.isRequired,
	handleFullscreen: PropTypes.func.isRequired,
	classes: PropTypes.object,
	fullscreen: PropTypes.bool,
};

export default withStyles(styles)(ZoomButtons);
