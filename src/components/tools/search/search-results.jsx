import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader';

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


class Results extends React.Component {

	render() {
		const { classes, activated } = this.props;

		return (
			<div className={activated ? classes.root : classes.hidden}>
				<Card className={classes.card}>
					{activated && (
						<List dense={true} subheader={<li />}>
							<li className={classes.listSection}>
								<ul className={classes.ul}>
									<ListSubheader>Page 1</ListSubheader>
									<ListItem button>
										<ListItemText primary={'...dolor sit amet, consectetur adipiscing...'} />
									</ListItem>
								</ul>
							</li>
							<li className={classes.listSection}>
								<ul className={classes.ul}>
									<ListSubheader>Page 10</ListSubheader>
									<ListItem button>
										<ListItemText primary={'Fusce condimentum sagittis viverra...'}/>
									</ListItem>
									<ListItem button>
										<ListItemText primary={'...tincidunt sed pulvinar vel, gravida vitae arcu. Aenean...'} />
									</ListItem>
								</ul>
							</li>
							<li className={classes.listSection}>
								<ul className={classes.ul}>
									<ListSubheader>Page 14</ListSubheader>
									<ListItem button>
										<ListItemText primary={'...Integer magna urna, pharetra sed tempor...'}/>
									</ListItem>
									<ListItem button>
										<ListItemText primary={'...dapibus sodales libero eu pulvinar...'}/>
									</ListItem>
								</ul>
							</li>
							<li className={classes.listSection}>
								<ul className={classes.ul}>
									<ListSubheader>Page 150</ListSubheader>
									<ListItem button>
										<ListItemText primary={'...massa sollicitudin elementum. Donec erat nulla...'} />
									</ListItem>
									<ListItem button>
										<ListItemText primary={'...tincidunt sed pulvinar vel...'} />
									</ListItem>
								</ul>
							</li>
							<li className={classes.listSection}>
								<ul className={classes.ul}>
									<ListSubheader>Page 242</ListSubheader>
									<ListItem button>
										<ListItemText primary={'Fusce condimentum sagittis viverra...'}/>
									</ListItem>
								</ul>
							</li>
							<li className={classes.listSection}>
								<ul className={classes.ul}>
									<ListSubheader>Page 244</ListSubheader>
									<ListItem button>
										<ListItemText primary={'...massa sollicitudin elementum. Donec erat nulla...'} />
									</ListItem>
								</ul>
							</li>
							<li className={classes.listSection}>
								<ul className={classes.ul}>
									<ListSubheader>Page 244</ListSubheader>
									<ListItem button>
										<ListItemText primary={'..., gravida vitae arcu. Aenean...'} />
									</ListItem>
									<ListItem button>
										<ListItemText primary={'...Aliquam finibus tempor erat...'} />
									</ListItem>
								</ul>
							</li>
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
