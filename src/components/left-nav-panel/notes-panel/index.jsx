import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import TextInput from './text-input'
import Note from './note'
import axios from 'axios'

const notesUrl = 'http://pers.foinse.io'

const styles = () => ({
	root: {
		overflow: 'hidden'
	},
	notesSection: {
		width: '100%',
	},
	drawerItem: {
		boxShadow: 'none',
		'overflow-y': 'auto',
		'max-height': 'Calc(100vh - 214px)'
	},
	actionButton: {
		margin: '30px 116px 0',
	},
	newNoteForm: {
		display: 'inline-block',
		marginTop: 5
	},
	button: {
		width: 55,
		height: 26,
		minWidth: 0,
		fontSize: 12,
		minHeight: 20,
		padding: 0,
		marginLeft: 5,
	},
	cancelButton: {
		opacity: 0.7,
		fontSize: 20,
		textTransform: 'lowercase',
		marginLeft: -20,
	},
})


class Notes extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			notes: [],
			editingNewNote: false,
		}
	}

	fetchNotes() {
		axios.get(`${notesUrl}/notes/${this.props.user.id}`)
		.then((response) => {
			this.setState({notes: response.data})
		})
	}

	closeNoteEditor(inputRef = this.inputRef) {
		this.setState({editingNewNote: false})
		if (inputRef) inputRef.value = ''
	}

	renderPanelBody(classes, user) {
		if (user.id) {
			return (
				<div>
					{
						this.state.notes.map((note) => {
							return (
								<Note
									fetchNotes={this.fetchNotes.bind(this)}
									closeNewNoteEditor={this.closeNoteEditor.bind(this)}
									key={note.id} note={note} user={user}/>
							)
						})
					}
					{
						this.state.editingNewNote ?
						(
							<TextInput
								user={user}
								isUpdate={false}
								fetchNotes={this.fetchNotes.bind(this)}
								closeNoteEditor={this.closeNoteEditor.bind(this)}/>
						) :
						(
							<Button
								variant="fab"
								color="primary"
								aria-label="add"
								className={classes.actionButton}
								onClick={() => {this.setState({editingNewNote: true})}}>
								<AddIcon />
							</Button>
						)
					}
				</div>
			)
		}
		return (
			<Typography variant="body1">
				Please sign in to use the notes feature (the developer hasn't implemented anonymous notes yet)
			</Typography>
		)
	}

	render() {
		const { classes, user } = this.props;

		return (
			<ExpansionPanel
				expanded={this.props.expanded}
				onChange={this.props.onChange}
				className={classes.drawerItem}>
				<ExpansionPanelSummary>
					<Typography variant="headline">Notes</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<div className={classes.notesSection}>
						{
							this.renderPanelBody(classes, user)
						}
					</div>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		)
	}

	componentDidUpdate(prevProps) {
		if (prevProps.user.id !== this.props.user.id) this.fetchNotes()
	}

	componentDidMount() {
		if (this.props.user.id) this.fetchNotes()
	}
}

Notes.propTypes = {
	classes: PropTypes.object,
	expanded: PropTypes.bool,
	onChange: PropTypes.func,
	user: PropTypes.object,
}

export default withStyles(styles)(Notes)
