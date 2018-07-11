export const setZoomLevel = (zoomLevel) => {
	return {
		type: 'SET_ZOOM_LEVEL',
		zoomLevel
	}
}

export const incrementZoomLevel = () => {
	return {
		type: 'INCREMENT_ZOOM_LEVEL'
	}
}

export const decrementZoomLevel = () => {
	return {
		type: 'DECREMENT_ZOOM_LEVEL'
	}
}

export const toggleLeftNav = (env = 'desktop') => {
	return {
		type: 'TOGGLE_LET_NAV',
		env
	}
}

export const displayLeftNav = (env = 'desktop') => {
	return {
		type: 'DISPLAY_LEFT_NAV',
		env
	}
}

export const closeLeftNav = (env = 'desktop') => {
	return {
		type: 'CLOSE_LEFT_NAV',
		env
	}
}

export const toggleFullscreen = () => {
	return {
		type: 'TOGGLE_FULLSCREEN'
	}
}

export const showResultsList = () => {
	return {
		type: 'SHOW_RESULTS_LIST'
	}
}

export const hideResultsList = () => {
	return {
		type: 'HIDE_RESULTS_LIST'
	}
}

export const toggleSearch = () => {
	return {
		type: 'TOGGLE_SEARCH'
	}
}

export const login = (user) => {
	return {
		type: 'LOGIN',
		user
	}
}

export const logout = () => {
	return {
		type: 'LOGOUT'
	}
}

export const updateUserInfo = (user) => {
	return {
		type: 'UPDATE_USER_INFO',
		user
	}
}

export const openSignInModal = () => {
	return {
		type: 'OPEN_SIGN_IN_MODAL'
	}
}

export const closeSignInModal = () => {
	return {
		type: 'CLOSE_SIGN_IN_MODAL'
	}
}

export const setCurrentIndex = (index, shouldScroll = false) => {
	return {
		type: 'SET_CURRENT_INDEX',
		index,
		shouldScroll
	}
}

export const addBookmark = (bookmark) => {
	return {
		type: 'ADD_BOOKMARK',
		bookmark
	}
}

export const removeBookmark = (index) => {
	return {
		type: 'REMOVE_BOOKMARK',
		bookmark: { index }
	}
}
