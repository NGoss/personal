import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = (theme) => ({
	container: {
		padding: 10
	},
	textButton: {
		padding: 1,
		'&:hover': {
			backgroundColor: '#FFF'
		}
	}
})

class BookmarkPopover extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<div className={classes.container}>
				<Typography variant="title">Bookmark placed!</Typography>
				<Typography variant="body">You can access your bookmarks in the <Button color="primary" classes={{root: classes.textButton}}>Bookmarks panel</Button></Typography>
				<Typography variant="body"><Button color="primary" classes={{root: classes.textButton}}>Click here</Button> to generate a permalink to this bookmark.</Typography>
			</div>
		)
	}
}

export default withStyles(styles)(BookmarkPopover)
