import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import SearchButton from './search-button'
import SearchInput from './search-input'
import SearchResults from './search-results'
import { ScreenClassRender } from 'react-grid-system'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

const styles = () => ({
	root: {
		display: 'inline-block',
	},
	mobile: {
		display: 'inline-block',
		direction: 'rtl',
	}
})


class Search extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			expanded: false
		}
	}

	render() {
		const { classes, resultsList, hideResults, showResults, toggleSearch, search } = this.props;

		const renderSearch = (screenClass) => {
			const isMobile = ['xs', 'sm'].includes(screenClass)
			return (
				<ClickAwayListener onClickAway={hideResults} >
					<div className={isMobile ? classes.mobile : classes.root}>
						<SearchButton handleClick={toggleSearch} className={classes.searchButton} />
						<SearchInput
							expanded={search}
							className={classes.searchInput}
							showResults={showResults}
							hideResults={hideResults}/>
						<SearchResults activated={search && resultsList} />
					</div>
				</ClickAwayListener>
			)
		}
		return <ScreenClassRender render={renderSearch} />
	}
}

Search.propTypes = {
	classes: PropTypes.object,
	resultsList: PropTypes.bool,
	hideResults: PropTypes.func,
	showResults: PropTypes.func,
	toggleSearch: PropTypes.func,
	search: PropTypes.bool,
}

export default withStyles(styles)(Search)
