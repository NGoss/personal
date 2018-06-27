/*eslint no-magic-numbers: ["error", { "ignoreArrayIndexes": true }]*/

import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui-icons/Delete'
import EditIcon from 'material-ui-icons/Edit'
import red from 'material-ui/colors/red'
import TextInput from './text-input'

const notesUrl = 'http://pers.foinse.io'

const styles = () => ({
	root: {
		overflow: 'hidden'
	},
	container: {
		display: 'inline-block',
		width: '100%',
		'&:hover': {
			height: '120%',
		}
	},
	content: {
		display: 'inline-block',
		padding: '10px 0',
		width: '80%',
	},
	buttonContainer: {
		display: 'block',
		textAlign: 'right'
	},
	inlineEditButton: {
		display: 'none',
		width: 30,
		'$container:hover &': {
			display: 'inline-block'
		}
	},
	deleteButton: {
		color: red[500],
		display: 'none',
		width: 30,
		'$container:hover &': {
			display: 'inline-block',
		},
	},
	pageNumber: {
		display: 'inline-block',
		float: 'right',
		opacity: 0.7,
		padding: '10px 0',
	},
})


class Note extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			editing: false
		}
	}

	closeNoteEditor(inputRef) {
		inputRef.value = ''
		this.setState({editing: false})
	}

	deleteNote() {
		axios.delete(`${notesUrl}/notes/${this.props.note.id}`).then(() => {
			this.props.fetchNotes()
		})
	}

	render() {
		const { classes, note, fetchNotes, closeNewNoteEditor, user } = this.props;

		if (this.state.editing) {
			return (
				<TextInput
					isUpdate={true}
					defaultContent={note.content}
					fetchNotes={fetchNotes}
					note={note} user={user}
					closeNoteEditor={this.closeNoteEditor.bind(this)}/>
			)
		} else {
			return (
				<div className={classes.note}>
					<Divider />
					<div className={classes.container} >
						<Typography className={classes.content} variant="body1">
							{note.content}
						</Typography>
						<Typography className={classes.pageNumber} variant="body1">{note.page}</Typography>
						<div className={classes.buttonContainer}>
							<IconButton
								className={classes.inlineEditButton}
								onClick={() => {
									closeNewNoteEditor()
									this.setState({editing: true})
								}}>
								<EditIcon />
							</IconButton>
							<IconButton
								onClick={this.deleteNote.bind(this)}
								className={classes.deleteButton}
								color="inherit">
								<DeleteIcon />
							</IconButton>
						</div>
					</div>
					<Divider />
				</div>
			)
		}
	}
}

Note.propTypes = {
	classes: PropTypes.object,
	note: PropTypes.object,
	fetchNotes: PropTypes.func,
	closeNewNoteEditor: PropTypes.func,
	user: PropTypes.object,
}

export default withStyles(styles)(Note)
