import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { ScreenClassRender } from 'react-grid-system'
import casual from 'casual-browserify'


const widthFactor = 0.75
const heightFactor = 1
const marginFactor = 0.25
const mobileFactor = 0.4

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
	}
})

class Page extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			headline: casual.title,
			content: [
				casual.text,
				casual.text,
				casual.text,
				casual.text,
				casual.text,
				casual.text,
				casual.text,
				casual.text,
				casual.text,
				casual.text,
				casual.text,
				casual.text,
				casual.text,
				casual.text,
			]
		}
	}
	render() {
		const { classes } = this.props;

		const renderPage = (screenClass) => {
			const isMobile = ['xs', 'sm'].includes(screenClass)

			const zoomFactor = !isMobile ? this.props.zoomLevel
				: this.props.zoomLevel * mobileFactor

			return (
				<Paper square={true} className={classes.page} style={{
						width: `${widthFactor * zoomFactor}em`,
						height: `${heightFactor * zoomFactor}em`,
						marginTop: `${marginFactor * zoomFactor}px`,
						marginBottom: `${marginFactor * zoomFactor}px`
					}}>
					<div className={classes.contentWrapper}>
						<Typography
							className={classes.text}
							style={{zoom: `${zoomFactor}%`}}
							variant="headline">{this.state.headline}</Typography>
						{this.state.content.map((text, index) =>
							(<Typography
								className={classes.text}
								style={{zoom: `${zoomFactor}%`}}
								key={index} variant="body1">{text}</Typography>))}
					</div>
				</Paper>
			)
		}

		return (
			<ScreenClassRender render={renderPage} />
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
