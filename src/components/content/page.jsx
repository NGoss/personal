import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'

import defaultContent from '../../utilities/default-content'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Popover from '@material-ui/core/Popover'
import IconButton from '@material-ui/core/IconButton'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'

import BookmarkPopover from './bookmark-popover'

const heightFactor = 10
const widthFactor = 7.5

const styles = (theme) => ({
	page: {
		margin: 'auto',
		transition: theme.transitions.create(['margin', 'width', 'height'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	contentWrapper: {
		padding: '10%'
	},
	text: {
		paddingRight: 10,
	},
	button: {
		position: 'absolute',
		top: -10,
		right: -10
	}
})

class Page extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			popoverOpen: false,
		}
	}
	render() {
		const { classes, zoomFactor, index, style, isBookmarked } = this.props;

		const pageContent = defaultContent[index%5]

		const pageStyle = {...style}
		pageStyle.height=`${heightFactor * zoomFactor}px`
		pageStyle.width = `${widthFactor * zoomFactor}px`
		pageStyle.left = `Calc(50% - ${pageStyle.width} * 0.5)`

		return (
			<Paper key={index} square={true} className={classes.page} style={pageStyle}>
				<IconButton
					className={classes.button}
					onClick={(event) => {
						!isBookmarked ? this.props.addBookmark({index, section: pageContent.title}) : this.props.removeBookmark(index)
						this.setState({clickedButton: isBookmarked ? null : event.target.parentElement})
						if (!this.state.bookmarked) this.setState({popoverOpen: true})
					}}>
					{isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
				</IconButton>
				<Popover
					anchorEl={this.state.clickedButton}
					open={this.state.popoverOpen}
					onClose={() => {this.setState({popoverOpen: false})}}
					anchorOrigin={{
						vertical: 'center',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}><BookmarkPopover /></Popover>
				<div className={classes.contentWrapper}>
					<Typography variant="display1">{index}</Typography>
					<Typography
						className={classes.text}
						style={{zoom: `${zoomFactor}%`}}
						variant="headline">{pageContent.title}</Typography>
					<Typography
						className={classes.text}
						style={{zoom: `${zoomFactor}%`}}
						key={index} variant="body1">{pageContent.content}</Typography>
				</div>
			</Paper>
		)
	}
}

Page.propTypes = {
	color: PropTypes.string,
	zoomLevel: PropTypes.number,
	classes: PropTypes.object,
}

Page.defaultProps = {
	zoomLevel: 100
}

export default withStyles(styles)(Page)
