/* eslint-disable no-magic-numbers */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Bookmark from './bookmark'

import Typography from '@material-ui/core/Typography'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'

const styles = () => ({
	root: {
		overflow: 'hidden'
	},
	deliverySection: {
		width: '100%',
	},
	drawerItem: {
		boxShadow: 'none',
		'overflow-y': 'auto',
		'max-height': 'Calc(100vh - 214px)'
	},
})

class BookmarksPanel extends React.Component {
	render() {
		const { classes, bookmarks, removeBookmark } = this.props
		return (
			<div className={classes.deliverySection}>
				{
					typeof bookmarks === 'undefined' || bookmarks.length === 0
					? <Typography variant="body">You haven't created any bookmarks yet! Click the <BookmarkBorderIcon /> icon to create one and you'll see it here.</Typography>
					: (
							<div className={classes.listContainer}>
								{
									bookmarks.map(bookmark => <Bookmark removeBookmark={removeBookmark} bookmark={bookmark} />)
								}
							</div>
						)
				}
			</div>
		)
	}
}

BookmarksPanel.propTypes = {
	classes: PropTypes.object,
	expanded: PropTypes.bool,
	onChange: PropTypes.func,
}

export default withStyles(styles)(BookmarksPanel)
