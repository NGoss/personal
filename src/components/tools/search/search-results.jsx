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
										<ListItemText>...dolor sit amet, <b>consectetur</b> adipiscing...</ListItemText>
									</ListItem>
								</ul>
							</li>
							<li className={classes.listSection}>
								<ul className={classes.ul}>
									<ListSubheader>Page 10</ListSubheader>
									<ListItem button>
										<ListItemText>Fusce condimentum <b>sagittis</b> viverra...</ListItemText>
									</ListItem>
									<ListItem button>
										<ListItemText>...tincidunt sed <b>pulvinar</b> vel, gravida vitae arcu. Aenean...</ListItemText>
									</ListItem>
								</ul>
							</li>
							<li className={classes.listSection}>
								<ul className={classes.ul}>
									<ListSubheader>Page 14</ListSubheader>
									<ListItem button>
										<ListItemText>...Integer magna <b>urna</b>, pharetra sed tempor...</ListItemText>
									</ListItem>
									<ListItem button>
										<ListItemText>...dapibus sodales <b>libero</b> eu pulvinar...</ListItemText>
									</ListItem>
								</ul>
							</li>
							<li className={classes.listSection}>
								<ul className={classes.ul}>
									<ListSubheader>Page 150</ListSubheader>
									<ListItem button>
										<ListItemText>...massa <b>sollicitudin</b> elementum. Donec erat nulla...</ListItemText>
									</ListItem>
									<ListItem button>
										<ListItemText>...<b>tincidunt</b> sed pulvinar vel pharetra sed tempor...</ListItemText>
									</ListItem>
								</ul>
							</li>
							<li className={classes.listSection}>
								<ul className={classes.ul}>
									<ListSubheader>Page 242</ListSubheader>
									<ListItem button>
										<ListItemText>Fusce condimentum <b>sagittis</b> viverra...</ListItemText>
									</ListItem>
								</ul>
							</li>
							<li className={classes.listSection}>
								<ul className={classes.ul}>
									<ListSubheader>Page 244</ListSubheader>
									<ListItem button>
										<ListItemText>...massa sollicitudin <b>elementum</b>. Donec erat nulla...</ListItemText>
									</ListItem>
								</ul>
							</li>
							<li className={classes.listSection}>
								<ul className={classes.ul}>
									<ListSubheader>Page 244</ListSubheader>
									<ListItem button>
										<ListItemText>..., gravida <b>vitae</b> arcu. Aenean...</ListItemText>
									</ListItem>
									<ListItem button>
										<ListItemText>...Aliquam <b>finibus</b> tempor erat...</ListItemText>
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
