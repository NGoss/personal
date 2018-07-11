import { connect } from 'react-redux'
import Paging from '../components/paging/'

import { setCurrentIndex } from '../actions'

const mapStateToProps = (state) => {
	return {
		currentIndex: state.currentIndex,
		leftNavOpen: state.leftNavOpen.desktop,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentIndex(index, shouldScroll) {
			dispatch(setCurrentIndex(index, shouldScroll))
		}
	}
}

const PagingContainer = connect(mapStateToProps, mapDispatchToProps)(Paging)

export default PagingContainer
