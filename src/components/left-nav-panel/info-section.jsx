import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'

import bookcover from '../../images/othumb.jpg'

const styles = (theme) => ({
	infoSectionContainer: {
		width: '100%',
		padding: '1em 0',
	},
	bookInfo: {
		paddingBottom: '0.5em',
		width: '100%',
		height: '80%'
	},
	coverImage: {
		height: '8em',
		borderRadius: '0.25em',
		display: 'inline-block',
		margin: '0 1.25em',
		float: 'left'
	},
	permissionsBlock: {
		paddingLeft: '1em'
	},
	altCaption: {
		color: '#005bc6',
		opacity: 0.7,
		padding: '2em 2em 0'
	},
	permissionsHeader: {
		opacity: 0.8,
		color: '#000',
		paddingBottom: '0.25em'
	}
})

class TocElement extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<div className={classes.infoSectionContainer}>
				<div className={classes.bookInfo}>
					<img className={classes.coverImage} src={bookcover} alt="Book Cover"/>
					<Typography variant="title">Look it's an eBook!</Typography>
					<Typography variant="subheading">Author McAuthorface</Typography>
					<Typography variant="subheading">3008</Typography>
					<Typography classes={{root: classes.altCaption}} variant="caption"><b>3</b> out of <b>5</b> copies of this ebook are currently in use.</Typography>
				</div>
				<div className={classes.permissionsBlock}>
					<Typography classes={{root: classes.permissionsHeader}} variant="caption"><b>Publisher Permissions</b></Typography>
					<Typography variant="caption">Copy/Paste: <b>Allowed</b></Typography>
					<Typography variant="caption">Print/Save/Download: <b>Unlimited</b></Typography>
					<Typography variant="caption">Screenshots: <b>Restricted</b></Typography>
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(TocElement)
