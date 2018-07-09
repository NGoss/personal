import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Collapse from '@material-ui/core/Collapse'
import ListItemText from '@material-ui/core/ListItemText'

import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

class TocElement extends React.Component {
	constructor(props) {
		super(props)

		this.state = {expanded: false}
		this.handleExpandItem = this.handleExpandItem.bind(this)
	}

	handleExpandItem() {
		this.setState({expanded: !this.state.expanded})
	}

	render() {
		const { children, title, level } = this.props

		let levelAdjustedChildren = children && React.Children.map(children, child => React.cloneElement(child, {level: (level || 0) + 1}))

		return (
			<React.Fragment>
				<ListItem button onClick={this.handleExpandItem}>
					<ListItemText primary={title} />
					{children ? this.state.expanded ? <ExpandLess /> : <ExpandMore /> : null}
				</ListItem>
				{levelAdjustedChildren ?
					<Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
						<List disablePadding style={{paddingLeft: ((level || 0) + 1) * 10}}>
							{levelAdjustedChildren}
						</List>
					</Collapse>
					: null}
			</React.Fragment>
		)
	}
}

export default TocElement
