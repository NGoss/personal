import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { ScreenClassRender } from 'react-grid-system'
import TocElement from './toc-element'
import InfoSection from './info-section'
import DeliveryPanel from './delivery-panel'

const drawerWidth = '25vw'
const mobileDrawerWidth = '80vw'

const styles = theme => ({
	root: {
		overflow: 'hidden'
	},
	hide: {
		display: 'none',
	},
	drawerPaper: {
		position: 'relative',
		width: drawerWidth,
		overflow: 'hidden',
	},
	mobileDrawerPaper: {
		position: 'relative',
		width: mobileDrawerWidth,
		overflow: 'hidden',
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	drawerItem: {
		boxShadow: 'none',
		'overflow-y': 'auto',
		'max-height': 'Calc(100vh - 214px)'
	},
	tocSection: {
		width: '100%',
	}
})


class LeftNavPanel extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			activePanel: 'details'
		}
	}

	render() {
		const { leftNavOpen, classes, handleLeftNavClose } = this.props;

		const renderDrawerContents = (screenClass) => {
			const isMobile = ['xs', 'sm'].includes(screenClass)

			return (
				<ClickAwayListener onClickAway={isMobile ? handleLeftNavClose(isMobile) : () => {}}>
					<div className={classes.root}>
						<div className={classes.drawerHeader}>
							<IconButton onClick={handleLeftNavClose(isMobile)}>
								<ChevronLeftIcon/>
							</IconButton>
						</div>
						<Divider />
						<div className={isMobile ? classes.mobileDrawerPaper : classes.drawerPaper}>
							<ExpansionPanel
								expanded={this.state.activePanel === 'details'}
								onChange={(e, expanded) => {if (expanded) this.setState({activePanel: 'details'})}}
								className={classes.drawerItem}>
								<ExpansionPanelSummary>
									<Typography variant="headline">Book Info</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<InfoSection />
								</ExpansionPanelDetails>
							</ExpansionPanel>
							<Divider />
							<ExpansionPanel
								expanded={this.state.activePanel === 'toc'}
								onChange={(e, expanded) => {if (expanded) this.setState({activePanel: 'toc'})}}
								className={classes.drawerItem}>
								<ExpansionPanelSummary>
									<Typography variant="headline">Table of Contents</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<div className={classes.tocSection}>
										<TocElement />
										<TocElement />
										<TocElement />
										<TocElement />
										<TocElement />
										<TocElement />
										<TocElement />
										<TocElement />
										<TocElement />
										<TocElement />
										<TocElement />
										<TocElement />
										<TocElement />
										<TocElement />
										<TocElement />
										<TocElement />
										<TocElement />
										<TocElement />
									</div>
								</ExpansionPanelDetails>
							</ExpansionPanel>
							<Divider />
								<DeliveryPanel
									expanded={this.state.activePanel === 'delivery'}
									onChange={(e, expanded) => {if (expanded) this.setState({activePanel: 'delivery'})}} />
							<Divider />
						</div>
					</div>
				</ClickAwayListener>
				)
			}

		const renderResponsiveDrawer = (screenClass) => {
			switch (screenClass) {
				case 'xs':
				case 'sm':
					return (
						<Drawer
							variant="temporary"
							anchor="left"
							open={leftNavOpen.mobile}
							elevation={16}
							className={classes.root}>
							{renderDrawerContents(screenClass)}
						</Drawer>
					)
				default:
					return (
						<Drawer
							variant="persistent"
							anchor="left"
							open={leftNavOpen.desktop}
							elevation={16}
							className={classes.root}>
							{renderDrawerContents(screenClass)}
						</Drawer>
					)
				}
			}

		return (
			<ScreenClassRender render={renderResponsiveDrawer} />
		)
	}
}

LeftNavPanel.propTypes = {
	leftNavOpen: PropTypes.object,
	classes: PropTypes.object,
	handleLeftNavClose: PropTypes.func,
	user: PropTypes.object,
}

export default withStyles(styles)(LeftNavPanel)
