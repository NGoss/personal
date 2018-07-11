import { connect } from 'react-redux';
import Content from '../components/content';

import { setCurrentIndex, addBookmark, removeBookmark } from '../actions'

const leftNavOpenMult = 0.8;

const mapStateToProps = (state) => {
	const leftNavMultiplier = state.leftNavOpen ? leftNavOpenMult : 1
	return {
		leftNavOpen: state.leftNavOpen.desktop,
		zoomLevel: state.zoomLevel * leftNavMultiplier,
		currentIndex: state.currentIndex,
		bookmarks: state.bookmarks
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentIndex(index) {
			dispatch(setCurrentIndex(index))
		},
		addBookmark(bookmark) {
			dispatch(addBookmark(bookmark))
		},
		removeBookmark(index) {
			dispatch(removeBookmark(index))
		}
	}
}

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentContainer;
