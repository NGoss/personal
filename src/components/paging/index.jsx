import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import { ScreenClassRender } from 'react-grid-system'

import Paper from '@material-ui/core/Paper'

import BackButton from './back-button'
import InputBox from './input-box'
import ForwardButton from './forward-button'

const styles = (theme) => ({
	container: {
		position: 'absolute',
		bottom: '5vh',
	},
	positionDrawerOpen: {
		left: '28.25vw',
		transition: theme.transitions.create(['left'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	positionDrawerClosed: {
		left: '5vw',
		transition: theme.transitions.create(['left'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	}
})

class Paging extends React.Component {
	render() {
		const { classes, currentIndex, setCurrentIndex, leftNavOpen } = this.props

		const renderPagingTools = (screenClass) => {
			const isMobile = ['xs', 'sm'].includes(screenClass)

			return (
				<Paper className={classnames(classes.container, !isMobile && leftNavOpen ? classes.positionDrawerOpen : classes.positionDrawerClosed)}>
					<BackButton currentIndex={currentIndex} handleClick={() => {setCurrentIndex(currentIndex.index - 1, true /*shouldScroll*/)}} />
					<InputBox currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
					<ForwardButton currentIndex={currentIndex} handleClick={() => {setCurrentIndex(currentIndex.index + 1, true /*shouldScroll*/)}} />
				</Paper>
			)
		}

		return (
			<ScreenClassRender render={renderPagingTools} />
		)
	}
}

export default withStyles(styles)(Paging)
