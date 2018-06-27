import React from 'react'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Tools from './tools'
import { ScreenClassRender } from 'react-grid-system'

const drawerWidth = '25vw';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		position: 'fixed',
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: '75vw',
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: drawerWidth,
	},
	toolbar: {
		height: '100%',
		backgroundColor: '#0d69ad'
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20,
	},
	menuButtonMobile: {
		marginRight: 20,
	},
	hide: {
		display: 'none',
	},
	title: {
		transition: theme.transitions.create(['width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}
});

class TopToolbar extends React.Component {
	render() {
		const { leftNavOpen, classes, handleLeftNavExpand, search } = this.props

		const renderAppBar = (screenClass) => {
			const isMobile = ['xs', 'sm'].includes(screenClass)

			return (
				<AppBar
					className={classNames(classes.appBar, {
						[classes.appBarShift]: !isMobile && leftNavOpen,
					})}
					>
					<Toolbar
						className={classes.toolbar}
						disableGutters={!leftNavOpen}>
								<IconButton
									color="inherit"
									className={classNames((isMobile ? classes.menuButtonMobile : classes.menuButton),
										(!isMobile && leftNavOpen) && classes.hide)}
									onClick={handleLeftNavExpand(isMobile)}>
									<MenuIcon/>
								</IconButton>
								<Typography
									style={isMobile ? search ? {width: 0} : {width: '100%'} : {}}
									variant="title" color="inherit" className={classes.title} noWrap>
									Look it's an eBook!
								</Typography>
								<Tools />
							</Toolbar>
						</AppBar>
				)
			}

		return (
			<ScreenClassRender render={renderAppBar} />
		);
	}
}

TopToolbar.propTypes = {
	leftNavOpen: PropTypes.bool,
	classes: PropTypes.object,
	handleLeftNavExpand: PropTypes.func,
	search: PropTypes.bool,
};

export default withStyles(styles)(TopToolbar);
