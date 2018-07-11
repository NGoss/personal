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
		paddingBottom: '1em',
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
	altCaption: {
		color: '#005bc6',
		opacity: 0.7
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
				</div>
				<Typography classes={{root: classes.altCaption}} variant="caption"><b>3</b> out of <b>5</b> copies of this ebook are currently in use.</Typography>
			</div>
		)
	}
}

export default withStyles(styles)(TocElement)
