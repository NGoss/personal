import React from 'react'
import PropTypes from 'prop-types'
import TopToolbar from '../containers/top-toolbar'
import LeftNavPanel from '../containers/left-nav-panel'
import Content from '../containers/content'
import ZoomButtons from '../containers/zoom-buttons'
import Paging from '../containers/paging'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
	root: {
		'overflow': 'hidden',
		width: '100vw',
	}
})

class Viewer extends React.Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<TopToolbar />
				<LeftNavPanel />
				<Content />
				<ZoomButtons />
				<Paging />
			</div>
		);
	}
}

Viewer.propTypes = {
	classes: PropTypes.object
}

export default withStyles(styles)(Viewer);
