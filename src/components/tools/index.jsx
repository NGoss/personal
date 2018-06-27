import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SearchContainer from '../../containers/tools/search'
import UserAccount from './user-account'
import { ScreenClassRender } from 'react-grid-system'

const styles = () => ({
	root: {
		margin: 'auto 0',
		position: 'absolute',
		left: '50%',
		borderLeft: '1px solid rgba(0, 0, 0, 0.15)', //Vertical divider
		display: 'inline-block',
		height: '75%',
		width: '45%',
	},
	mobile: {
		margin: 'auto 0',
		position: 'absolute',
		right: 16,
		top: 4,
		display: 'inline-block',
		height: '75%',
		direction: 'rtl'
	},
})


class Tools extends React.Component {

	render() {
		const { classes } = this.props;

		return (
			<ScreenClassRender render={(screenClass) => {
					const isMobile = ['xs', 'sm'].includes(screenClass)
					return (
						<div className={isMobile ? classes.mobile : classes.root}>
							<SearchContainer />
							<UserAccount />
						</div>
					)
				}} />
		)
	}
}

Tools.propTypes = {
	classes: PropTypes.object,
}

export default withStyles(styles)(Tools)
