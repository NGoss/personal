/* eslint-disable no-magic-numbers */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Print from './print'
import Save from './save'
import Export from './export'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

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
	tab: {
		fontSize: 10,
		minWidth: 0,
	},
	tabsIndicator: {
		backgroundColor: '#005bc6'
	}
})

class DeliveryPanel extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			tab: 0,
			method: 'All',
			section: ''
		}

		this.handleSelect = this.handleSelect.bind(this)
		this.handleSectionChange = this.handleSectionChange.bind(this)
	}
	renderPanelBody(tab) {
		switch (tab) {
			case 0:
				return <Print method={this.state.method} section={this.state.section} handleSelect={this.handleSelect} handleSectionChange={this.handleSectionChange}/>
			case 1:
				return <Save method={this.state.method} section={this.state.section} handleSelect={this.handleSelect} handleSectionChange={this.handleSectionChange}/>
			case 2:
				return <Export method={this.state.method} section={this.state.section} handleSelect={this.handleSelect} handleSectionChange={this.handleSectionChange}/>
			default:
				return <Print method={this.state.method} section={this.state.section} handleSelect={this.handleSelect} handleSectionChange={this.handleSectionChange}/>
		}
	}
	handleSelect(event, method) {
		if (event) this.setState({method: event.target.value})
		else if (method) this.setState({method})
	}
	handleSectionChange(event) {
		this.setState({section: event.target.value})
	}
	render() {
		const { classes } = this.props
		return (
			<ExpansionPanel
				expanded={this.props.expanded}
				onChange={this.props.onChange}
				className={classes.drawerItem}>
				<ExpansionPanelSummary>
					<Typography className={classes.headline} variant="headline">Print / Save / Export</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<div className={classes.deliverySection}>
						<Tabs
							fullWidth={true}
							value={this.state.tab}
							classes={{indicator: classes.tabsIndicator}}
							onChange={(event, tab) => {this.setState({tab})}} >
							<Tab classes={{root: classes.tab}} label="Print" />
							<Tab classes={{root: classes.tab}} label="Save" />
							<Tab classes={{root: classes.tab}} label="Export" />
						</Tabs>
						{ this.renderPanelBody(this.state.tab) }
					</div>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		)
	}
}

DeliveryPanel.propTypes = {
	classes: PropTypes.object,
	expanded: PropTypes.bool,
	onChange: PropTypes.func,
}

export default withStyles(styles)(DeliveryPanel)
