import React from 'react'
import PropTypes from 'prop-types'
import Page from './page'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import { ScreenClassRender } from 'react-grid-system'

const styles = (theme) => ({
	content: {
		'background-color': '#E0E0E0',
		'overflow-y': 'scroll',
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	'@media (min-width: 0px) and (orientation: landscape)': {
		content: {
			marginTop: 48,
			height: 'Calc(100vh - 48px)',
		}
	},
	'@media (min-width: 600px) and (orientation: landscape)': {
		content: {
			marginTop: '64px',
			height: 'Calc(100vh - 64px)',
		}
	},
	'@media (min-width: 0px) and (orientation: portrait)': {
		content: {
			marginTop: 54,
		}
	},
	'@media (min-width: 600px)': {
		content: {
			marginTop: 64,
		}
	},
	'content-shift': {
		'margin-left': '25vw',
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}
})

class Content extends React.Component {
	render() {
		const { classes, leftNavOpen, zoomLevel } = this.props

		const renderContent = (screenClass) => {
			const isMobile = ['xs', 'sm'].includes(screenClass)

			return (
				<div className={classNames(classes.content, {
						[classes['content-shift']]: !isMobile && leftNavOpen
					})}>
					<Page zoomLevel={zoomLevel} />
					<Page zoomLevel={zoomLevel} />
					<Page zoomLevel={zoomLevel} />
					<Page zoomLevel={zoomLevel} />
					<Page zoomLevel={zoomLevel} />
					<Page zoomLevel={zoomLevel} />
					<Page zoomLevel={zoomLevel} />
				</div>
			)
		}

		return (
			<ScreenClassRender render={renderContent} />
		);
	}
}

Content.propTypes = {
	classes: PropTypes.object,
	leftNavOpen: PropTypes.bool,
	zoomLevel: PropTypes.number,
}

export default withStyles(styles)(Content)
