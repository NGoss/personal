import { connect } from 'react-redux'
import LeftNavPanel from '../components/left-nav-panel'
import { closeLeftNav, removeBookmark } from '../actions'

const mapStateToProps = (state) => {
	return {
		leftNavOpen: state.leftNavOpen,
		user: state.user,
		bookmarks: state.bookmarks
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleLeftNavClose(isMobile) {
			return isMobile
				? () => {dispatch(closeLeftNav('mobile'))}
				: () => {dispatch(closeLeftNav('desktop'))}
		},
		removeBookmark(index) {
			dispatch(removeBookmark(index))
		}
	}
}

const LeftNavPanelContainer = connect(mapStateToProps, mapDispatchToProps)(LeftNavPanel)

export default LeftNavPanelContainer
