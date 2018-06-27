import { connect } from 'react-redux'
import Search from '../../components/tools/search'
import { showResultsList, hideResultsList, toggleSearch } from '../../actions'

const mapStateToProps = (state) => {
	return {
		resultsList: state.resultsList,
		search: state.search
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		showResults() {
			dispatch(showResultsList())
		},
		hideResults() {
			dispatch(hideResultsList())
		},
		toggleSearch() {
			dispatch(toggleSearch())
		}
	}
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)

export default SearchContainer
