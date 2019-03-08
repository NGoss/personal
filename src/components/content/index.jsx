import React from 'react'
import PropTypes from 'prop-types'
import Page from './page'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import { ScreenClassRender } from 'react-grid-system'
import VirtualList from 'react-tiny-virtual-list'
import { SizeMe } from 'react-sizeme'

const mobileFactor = 0.4
const heightFactor = 10
const marginFactor = 0.25

const styles = (theme) => ({
	content: {
		height: '100%',
		'background-color': '#E0E0E0',
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
		const { classes, leftNavOpen, zoomLevel, currentIndex, addBookmark, removeBookmark, bookmarks } = this.props

		const renderContent = (screenClass) => {
			const isMobile = ['xs', 'sm'].includes(screenClass)

			const zoomFactor = !isMobile ? zoomLevel : zoomLevel * mobileFactor

			return (
				<SizeMe
					monitorHeight>{({ size }) =>
					<div className={classNames(classes.content, {
							[classes['content-shift']]: !isMobile && leftNavOpen
						})}>
						<VirtualList
							renderItem={({index, style}) => <Page key={index} isBookmarked={bookmarks.some(bookmark => bookmark.index === index)}
																							addBookmark={addBookmark} removeBookmark={removeBookmark} zoomFactor={zoomFactor} index={index} style={style} />}
							height={size.height}
							width="100%"
							itemCount={10}
							overscanCount={1}
							itemSize={(heightFactor + marginFactor) * zoomFactor}
							onScroll={(scrollTop, event) => {
								this.props.setCurrentIndex(Math.floor((scrollTop + document.body.clientHeight / 2) / ((heightFactor + marginFactor) * zoomFactor) ))
							}}
							{...currentIndex.shouldScroll ? {scrollToIndex: currentIndex.index} : {}}
							/>
					</div>}
				</SizeMe>
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
