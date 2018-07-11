import {combineReducers} from 'redux'

const MAX_PAGES = 30

const defaultZoomLevel = 100
const zoomLevelIncrement = 10
const minimumZoomLevel = 10

const zoomLevel = (store, action) => {
	if (action.type === 'SET_ZOOM_LEVEL') {
		return action.zoomLevel
	} else if (action.type === 'INCREMENT_ZOOM_LEVEL') {
		return store + zoomLevelIncrement
	} else if (action.type === 'DECREMENT_ZOOM_LEVEL') {
		const newZoom = store - zoomLevelIncrement
		return newZoom >= minimumZoomLevel ? newZoom : store
	}

	return store || defaultZoomLevel
};

const leftNavOpen = () => {
	const desktop = (store, action) => {
		if (!!action.env && action.env === 'desktop') {
			if (action.type === 'TOGGLE_LEFT_NAV') {
				return !store.env
			} else if (action.type === 'DISPLAY_LEFT_NAV') {
				return true
			} else if (action.type === 'CLOSE_LEFT_NAV') {
				return false
			}
		}

		return typeof store === 'undefined' ? true : store
	}

	const mobile = (store, action) => {
		if (!!action.env && action.env === 'mobile') {
			if (action.type === 'TOGGLE_LEFT_NAV') {
				return !store.env
			} else if (action.type === 'DISPLAY_LEFT_NAV') {
				return true
			} else if (action.type === 'CLOSE_LEFT_NAV') {
				return false
			}
		}

		return typeof store === 'undefined' ? false : store
	}

	return combineReducers({
		desktop,
		mobile
	})
};

const fullscreen = (store, action) => {
	if (action.type === 'TOGGLE_FULLSCREEN') {
		if (typeof document !== 'undefined') {
			if (document.webkitFullscreenElement === document.body) {
				document.webkitExitFullscreen()
				return false
			} else {
				document.body.webkitRequestFullscreen()
				return true
			}
		}
	}

	return (typeof store === 'undefined') ? false : store
}

const resultsList = (store, action) => {
	if (action.type === 'SHOW_RESULTS_LIST') {
		return true
	} else if (action.type === 'HIDE_RESULTS_LIST') {
		return false
	}

	return store || false
}

const search = (store, action) => {
	if (action.type === 'TOGGLE_SEARCH') {
		return !store
	}

	return typeof store === 'undefined' ? false : store
}

const user = (store, action) => {
	if (action.type === 'LOGIN') {
		return action.user
	} else if (action.type === 'LOGOUT') {
		return { uid: 0 }
	} else if (action.type === 'UPDATE_USER_INFO') {
		return action.user
	}

	return typeof store === 'undefined' ? { uid: 0 } : store
}

const signInModal = (store, action) => {
	if (action.type === 'OPEN_SIGN_IN_MODAL') {
		return true
	} else if (action.type === 'CLOSE_SIGN_IN_MODAL') {
		return false
	}

	return typeof store === 'undefined' ? false : store
}

const currentIndex = (store, action) => {
	if (action.type === 'SET_CURRENT_INDEX') {
		if (action.index < 0) action.index = 0
		if (action.index > MAX_PAGES) action.index = MAX_PAGES
		return {index: action.index, shouldScroll: action.shouldScroll}
	}

	return typeof store === 'undefined' ? {index: 0, shouldScroll: true} : store
}

const bookmarks = (store, action) => {
	if (action.type === 'ADD_BOOKMARK') {
		return [...store, action.bookmark]
	} else if (action.type === 'REMOVE_BOOKMARK') {
		return store.filter(bookmark => bookmark.index !== action.bookmark.index)
	}

	return typeof store === 'undefined' ? [] : store
}

export default combineReducers({
  zoomLevel,
	leftNavOpen: leftNavOpen(),
	fullscreen,
	resultsList,
	search,
	user,
	signInModal,
	currentIndex,
	bookmarks
})
