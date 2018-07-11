import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Popover from '@material-ui/core/Popover'
import Input from '@material-ui/core/Input'
import IconButton from '@material-ui/core/IconButton'
import LinkIcon from '@material-ui/icons/Link'
import DeleteIcon from '@material-ui/icons/Delete'

const styles = (theme) => ({
	container: {
		padding: 10,
		height: '100%',
		width: '100%',
		display: 'inline-block'
	},
	infoBlock: {
		display: 'block',
	},
	iconBlock: {
		display: 'block',
		float: 'right',
		opacity: 0.7
	},
	linkButton: {
		display: 'inline-block'
	},
	deleteButton: {
		display: 'inline-block',
		color: 'red'
	},
	plinkPopup: {
		padding: 10,
	},
	input: {
		width: 270
	}
})

class Bookmark extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			clickedButton: null,
			popoverOpen: false
		}
	}
	render() {
		const { classes, bookmark, removeBookmark } = this.props
		return (
			<Paper className={classes.container}>
				<div className={classes.infoBlock}>
					<Typography variant="title">{bookmark.section}</Typography>
					<Typography variant="caption">Bookmark on page index: {bookmark.index}</Typography>
				</div>
				<div className={classes.iconBlock}>
					<IconButton
						size="small"
						onClick={(event) => this.setState({clickedButton: event.target, popoverOpen: true})}
						className={classes.linkButton}>
						<LinkIcon />
					</IconButton>
					<Popover
						anchorEl={this.state.clickedButton}
						open={this.state.popoverOpen}
						onClose={() => {this.setState({clickedButton: null, popoverOpen: false})}}
						anchorOrigin={{
							vertical: 'center',
							horizontal: 'right',
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}>
						<Paper className={classes.plinkPopup}>
							<Input className={classes.input} value='http://imaplink.com/plink?link=abcdefg' readOnly/>
						</Paper>
					</Popover>
					<IconButton
						size="small"
						color="inherit"
						onClick={() => {removeBookmark(bookmark.index)}}
						className={classes.deleteButton}>
						<DeleteIcon />
					</IconButton>
				</div>
			</Paper>
		)
	}
}

export default withStyles(styles)(Bookmark)
