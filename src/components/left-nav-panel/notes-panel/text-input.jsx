/*eslint no-magic-numbers: ["warn", { "ignoreArrayIndexes": true }]*/

import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'
import { InputAdornment } from 'material-ui/Input'
import Button from 'material-ui/Button'
import ModeEditIcon from 'material-ui-icons/ModeEdit'

const notesUrl = 'http://pers.foinse.io'

const styles = () => ({
	newNoteForm: {
		display: 'inline-block',
		marginTop: 5
	},
	saveButton: {
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
	textField: {

	},
})


class Note extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			currentEditedNote: {}
		}
	}

	createNote() {
		axios.post(`${notesUrl}/notes/${this.props.user.id}`, {
			content: this.state.currentEditedNote.content,
			page: this.state.currentEditedNote.page
		})
		.then(() => {
			this.props.fetchNotes()
			this.setState({currentEditedNote: {}})
			this.inputRef.value = ''
		})
	}

	updateNote() {
		axios.put(`${notesUrl}/notes/${this.props.note.id}`, {
			content: this.state.currentEditedNote.content,
		}).then(() => {
			this.props.fetchNotes()
			this.setState({currentEditedNote: {}})
			this.props.closeNoteEditor(this.inputRef)
		})
	}

	render() {
		const { classes, isUpdate } = this.props;

		return (
			<div className={classes.newNoteForm}>
				<IconButton
					onClick={() => {this.props.closeNoteEditor(this.inputRef)}}
					className={classes.cancelButton}>
					X
				</IconButton>
				<TextField
					className={classes.textField}
					inputRef={(input) => {this.inputRef = input}}
					{...isUpdate && {defaultValue: this.props.note.content}}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<ModeEditIcon />
							</InputAdornment>
						),
					}}
					onChange={(event) => {
						this.setState({currentEditedNote: {
							content: event.target.value,
							page: this.state.currentPage || 100, // TODO: Using page 100 until I introduce page tracking
						}})
					}}
					/>
					<Button
						variant="raised"
						color="primary"
						className={classes.saveButton}
						onClick={isUpdate ? this.updateNote.bind(this) : this.createNote.bind(this)}>
						Save
					</Button>
				</div>
		)
	}

	componentDidMount() {
		this.inputRef.focus()
	}
}

Note.propTypes = {
	classes: PropTypes.object,
	note: PropTypes.object,
	fetchNotes: PropTypes.func,
	closeNoteEditor: PropTypes.func,
	isUpdate: PropTypes.bool,
	user: PropTypes.object,
}

export default withStyles(styles)(Note)
