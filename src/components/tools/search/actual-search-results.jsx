import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import defaultContent from '../../../utilities/default-content'

import Fuse from 'fuse.js'

import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'

const styles = (theme) => ({
	root: {
		width: 300,
		height: 400,
		backgroundColor: theme.palette.background.paper,
		position: 'relative',
		overflowY: 'auto',
		overflowX: 'hidden',
		transition: 'width 125ms cubic-bezier(0.4, 0, 0.6, 1) 0ms,'
							+ 'height 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms'
	},
	listSection: {
		backgroundColor: theme.palette.background.paper,
	},
	ul: {
		backgroundColor: theme.palette.background.paper,
		padding: 0,
	},
	hidden: {
		width: 0,
		height: 0,
	}
})

const snippetPadding = 20

class Results extends React.Component {
	constructor(props) {
		super(props)

		this.options = {
			shouldSort: true,
			findAllMatches: true,
			includeMatches: true,
			threshold: 0.4,
			location: 0,
			distance: 1000,
			maxPatternLength: 32,
			minMatchCharLength: 1,
			keys: [
				"title",
				"content"
			]
		};
	}
	render() {
		const { classes, activated, searchTerm } = this.props

		this.options.minMatchCharLength = searchTerm.length
		const content = defaultContent;
		const searchEngine = new Fuse(content, this.options)

		const resultsList = searchEngine.search(searchTerm)

		return (
			<div className={activated ? classes.root : classes.hidden}>
				<Card className={classes.card}>
					{activated && (
						<List dense={true} subheader={<li />}>
							{
								resultsList.map((resultItem) => {
									return (
										<li className={classes.listSection}>
											<ul className={classes.ul}>
												<ListSubheader>Page {resultItem.item.index}</ListSubheader>
												{
													resultItem.matches.map((match) => {
														return match.indices.map((indices) => {
															const snippet = `...${resultItem.item.content.substring(indices[0] - snippetPadding, indices[1] + snippetPadding)}...`
															return (
																<ListItem button>
																	<ListItemText>{snippet}</ListItemText>
																</ListItem>
															)
														})
													})
												}
											</ul>
										</li>
									)
								})
							}
						</List>
					)}
				</Card>
			</div>
		)
	}
}

Results.propTypes = {
	classes: PropTypes.object,
	activated: PropTypes.bool,
}

export default withStyles(styles)(Results)
